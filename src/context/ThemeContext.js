// **** class component

import React, { createContext, Component } from 'react'

// ---- context has been created here and exported
export const ThemeContext = createContext();


// ---- create a context provider and exported
export default class ThemeContextProvider extends Component {

  // ---- this state will be stored in the context 
  state = {
    isLightTheme: false,    // we need a function to chage this value
    light: {
      text: "black",
      background: "white"
    },
    dark: {
      text: "white",
      background: "black"
    }
  }

  changeTheme = () => {
    this.setState(state => ({ isLightTheme: !state.isLightTheme }))
  }


  render() {
    return (

      // through the themeContext any component(we want) can access this value 
      < ThemeContext.Provider value={{ ...this.state, themeToggle: this.changeTheme }
      } >
        {this.props.children}
      </ThemeContext.Provider >

    )
  }
}


