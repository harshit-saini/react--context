// **** class component

import React, { createContext, Component } from 'react'

// ---- context has been created here and exported
export const ThemeContext = createContext();


// ---- create a context provider and exported
export default class ThemeContextProvider extends Component {

  // ---- this state will be stored in the context 
  state = {
    isLightTheme: true,
    light: {
      text: "black",
      background: "white"
    },
    dark: {
      text: "black",
      background: "white"
    }
  }

  render() {
    return (
      < ThemeContext.Provider value={{ ...this.state }} >
        {this.props.children}
      </ThemeContext.Provider>

    )
  }
}


