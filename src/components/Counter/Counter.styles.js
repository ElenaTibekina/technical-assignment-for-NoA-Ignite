import {createUseStyles} from 'react-jss';
import { borders, sizes } from '../utils/consts/styleVariables';

export const useStyles = createUseStyles({
  CounterWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    height: '60vh',
    boxShadow: borders.wrapperShadow,
    borderRadius: '15px',
    padding: '12px',
  },
  [`@media (max-width: ${sizes.mobileSize})`]: {
    CounterWrapper: {
      height: '80vh',
      overflow: 'scroll',
      boxSizing: 'border-box',
    }
  },
})
