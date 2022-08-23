import React, { useState, useEffect, useCallback } from 'react';
import { Repositories } from '../utils/Repositories';
import { useStyles as InfoCardStyles } from './RepositoryInfoCard.styles'
import { Loader } from '../Loader/Loader';
import { ErrorCard } from './ErrorCard';
import { RepositoryCard } from './RepositoryCard';
import { ThemeProvider } from 'react-jss';
import { cardErrorTheme, cardInfoTheme } from '../utils/themes/cardThemes';

export const RepositoryCardContent = ({counter}) => {
  const cardStyles = InfoCardStyles();
  const [repositoryData, setRepositoryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const repositoryUrl = `https://api.github.com/repos/${Repositories[counter]}`;

  const handleErrors = useCallback(async(response) => {
    if (response.status === 404) {
      const errorInfo = await response.json();
      setIsLoading(false);
      setError(`Looks like this repository is not found`)
      throw new Error(errorInfo.message);

    } else if (!response.ok) {
      const errorInfo = await response.json();
      setIsLoading(false);
      const err = response.statusText || response;
      setError(errorInfo.message);
      throw Error(err);
    }
    return response;
  }, [])

  const fetchData = useCallback(() => {
    setIsLoading(true);
    setError(false);
    fetch(repositoryUrl)
      .then(handleErrors)
      .then((response) => response.json())
      .then((data) => {
        setRepositoryData({
          name: data.full_name,
          description: data.description,
          amountOfStars: data.stargazers_count
        });
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [repositoryUrl, handleErrors])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className={cardStyles.CardWrapper}>
      {isLoading ? <Loader /> : (
        <>
          {error ?
            <ThemeProvider theme={cardErrorTheme}>
              <ErrorCard error={error} />
            </ThemeProvider>
             :
            <ThemeProvider theme={cardInfoTheme}>
              <RepositoryCard
                name={repositoryData.name}
                amountOfStars={repositoryData.amountOfStars}
                description={repositoryData.description}
              />
            </ThemeProvider>
          }
        </>
      )}
    </div>
  )

}