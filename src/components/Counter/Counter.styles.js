import {createUseStyles} from 'react-jss';
import { borders, sizes } from '../utils/consts/styleVariables';

export const useStyles = createUseStyles({
  CounterWrapper: {
    paddingTop: '40px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',

    maxWidth: '90vw',
    margin: '0 auto',
    height: '90vh',

    boxShadow: borders.wrapperShadow,
    borderRadius: '3px',
    padding: '12px',
  },
  [`@media (max-width: ${sizes.mobileSize})`]: {
    CounterWrapper: {
      width: '100vw',
      height: '100vh',
      padding: '20px',
    }
  },
})
