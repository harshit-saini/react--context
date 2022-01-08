/* 
this is a class component and we will learn here how to use 
context in a class component 

1. 
if we have only one context to use we can use the special variable ```contextType```
  to use the context.

2. 
if we have to use more than one component then we have to use the ```context.consumer```


*/

import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const divStyle = {
  border: "2px solid black"
}

class Div extends Component {

  static contextType = ThemeContext;


  render() {
    const { isLightTheme, light, dark, themeToggle } = this.context;

    const theme = isLightTheme ? light : dark;

    return (
      <div style={{ backgroundColor: theme.background, color: theme.text, ...divStyle }}>
        <h1>Harshit saini</h1>
        <button onClick={themeToggle}>Change Theme</button>
      </div>

    )
  }

}

export default Div;