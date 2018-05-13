//src/components/colorScore.js

import React from 'react'
import '../styling/pages.css'

export default class ColorScore extends React.Component {
  
  render() {
      const color = this.props.color
    return (
      <div>
        {color && color === "red" && <span className="dotRed"></span>}
        {color && color === "yellow" && <span className="dotYellow"></span>}
        {color && color === "green" && <span className="dotGreen"></span>}
        {color && color === "grey" && <span className="dotGrey"></span>}
      </div>
    )
  }
}