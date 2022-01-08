// this is a functional component
// both the context are used in this component

import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'


const Div3 = () => {

  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  const theme = themeContext.isLightTheme ? themeContext.light : themeContext.dark;

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1>{userContext.user}</h1>
    </div>
  )
}

export default Div3
