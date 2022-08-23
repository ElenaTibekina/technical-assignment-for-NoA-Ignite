import { createUseStyles } from 'react-jss';
import {
  colors,
  fonts,
  sizes,
  spaces,
} from '../utils/consts/styleVariables';

export const useStyles = createUseStyles((theme) => ({
  ButtonPlus: {
    backgroundColor: theme.colorPrimary,
    border: theme.borderButton,
    color: theme.buttonTextColor,
    padding: spaces.buttonPadding,
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: fonts.defaultTextSize,
    margin: spaces.buttonMargin,
    borderRadius: 35,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.colorHover,
      color: colors.colorWhite,
    },
    '&:disabled': {
      backgroundColor: colors.colorLightgrey,
      cursor: 'not-allowed',
      border: 'none',
      color: colors.colorWhite,
    },
  },
  [`@media (max-width: ${sizes.mobileSize})`]: {
    ButtonPlus: {
      marginTop: spaces.buttonMarginTop
    }
  }
}))
