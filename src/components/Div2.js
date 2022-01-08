// this is a class component 
// here we had used the context with a context comsumer

import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { UserContext } from '../context/UserContext'

export default class Div2 extends Component {

  render() {
    return (
      <ThemeContext.Consumer>
        {firstContext => {
          const theme = firstContext.isLightTheme ? firstContext.light : firstContext.dark;
          console.log(firstContext)
          return (
            <UserContext.Consumer>
              {secondContext => {
                return (
                  <div style={{ backgroundColor: theme.background, color: theme.text, border: "2px solid black" }}>
                    <h1>{secondContext.user}</h1>
                  </div>
                )
              }}
            </UserContext.Consumer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}