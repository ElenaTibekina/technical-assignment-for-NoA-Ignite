import React from 'react';
import { counterActions } from '../../store/counter';
import {useDispatch, useSelector} from 'react-redux';
import { useStyles as ButtonStyles } from '../Button/Button.styles';
import { useStyles as CounterWrapperStyles } from './Counter.styles';
import Button from '../Button/Button';
import { RepositoryCardContent } from '../RepositoryInfoCard/RepositoryCardContent';
import { Repositories } from '../utils/Repositories';
import { ThemeProvider } from 'react-jss'
import { buttonMinusTheme, buttonPlusTheme } from '../utils/themes/buttonThemes';
import { icons } from '../utils/consts/styleVariables';

export const Counter = () => {
  const buttonStyles = ButtonStyles();
  const counterWrapperStyles = CounterWrapperStyles();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const increment = () => {
    dispatch(counterActions.increment());
  };

  return (
    <div>
        <div className={counterWrapperStyles.CounterWrapper}>
          <div>
            <ThemeProvider theme={buttonMinusTheme}>
              <Button
                disabled={counter <= 0}
                onClick={decrement}
                className={buttonStyles.ButtonPlus}
                icon={icons.minus}>DECREMENT
              </Button>
            </ThemeProvider>
            <span>Counter: {counter}</span>
            <ThemeProvider theme={buttonPlusTheme}>
            <Button
                disabled={counter >= Repositories.length - 1}
                onClick={increment}
                className={buttonStyles.ButtonPlus}
                icon={icons.plus}
              >INCREMENT
            </Button>
            </ThemeProvider>
          </div>
            <RepositoryCardContent counter={counter} />
          </div>

    </div>
  );
}