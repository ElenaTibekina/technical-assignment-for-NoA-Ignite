import React from 'react'
import { useStyles } from './Button.styles';


const Button = ({children, icon, onClick, disabled, ...props}) => {
  const classes = useStyles(props)

  return (
    <button
      className={classes.ButtonPlus}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? icon : null} {children}
    </button>
  )
};

export default Button;