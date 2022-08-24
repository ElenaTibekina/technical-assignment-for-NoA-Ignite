import { createUseStyles } from 'react-jss'
import { borders, spaces, sizes } from '../utils/consts/styleVariables';

export const useStyles = createUseStyles((theme) => ({
  InfoCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: spaces.defaultCardPadding,
    marginTop: spaces.defaultCardMarginTop,
    height: sizes.cardHeight,
    overflow: 'hidden',
    width: '90%',
    border: borders.cardBorder,
    borderRadius: borders.cardBorderRadius,
    background: theme.cardBackgroundColor,
    color: theme.cardTextColor,
    fontSize: theme.textSize,
    boxSizing: 'border-box',
  },
  CardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  [`@media (max-width: ${sizes.mobileSize})`]: {
    CardWrapper: {
      paddingTop: spaces.defaultPaddingTop,

    },
    InfoCard: {
      paddingTop: spaces.defaultPaddingTop,
      overflow: 'scroll',
      height: '50vh',
      '& > h3, p': {
        margin: '3px',
        padding: '3px'
      },
    }
  },
}));

