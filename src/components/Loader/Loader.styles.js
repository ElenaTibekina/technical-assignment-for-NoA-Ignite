import {createUseStyles} from 'react-jss';
import { colors } from '../utils/consts/styleVariables';

export const useStyles = createUseStyles({
  '@keyframes spinnerAnimation': {
    from: 'transform: rotate(0deg)',
    to: 'transform: rotate(360deg)'
  },

  Loader: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: [[5, 'solid', colors.colorSecondary]],
    borderTop: [[5, 'solid', colors.colorPrimary]],
    animation: '$spinnerAnimation 1s infinite linear'
  }
})
