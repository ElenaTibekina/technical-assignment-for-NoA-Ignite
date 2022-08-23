import React from 'react';
import { useStyles as InfoCardStyles } from './RepositoryInfoCard.styles'
import { icons } from '../utils/consts/styleVariables';

export const RepositoryCard = ({name, amountOfStars, description, ...props}) => {
  const cardStyles = InfoCardStyles(props);
  return (
    <div className={cardStyles.InfoCard}>
      <h3>{name} </h3>
      <p>	{icons.star} {amountOfStars}</p>
      <article><b>Description:</b> {description}</article>
    </div>
  )
}