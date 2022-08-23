import React from 'react';
import { useStyles as ErrorCardStyles } from './RepositoryInfoCard.styles'
import { icons } from '../utils/consts/styleVariables';

export const ErrorCard = ({error}) => {
  const cardStyles = ErrorCardStyles();

  return (
    <div className={cardStyles.CardWrapper}>
        <div className={cardStyles.InfoCard}>
          <p>{icons.alert} Something went wrong. {error}</p>
        </div>
    </div>
  )

}