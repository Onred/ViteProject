import React from 'react'

export default function Square(props) {
  const color_options = {
    red: "#f38ba8",
    green: "#a6e3a1",
    blue: "#89b4fa",
    yellow: "#f9e2af"
  }

  const size_options = {
    small: "8px",
    medium: "16px",
    large: "32px"
  }

  function get_color(color) {
    if (!color_options[color]) {
      return "#000000";
    }
    return color_options[color];
  }

  function get_size(size) {
    if (!size_options[size]) {
      return size_options.medium;
    }
    return size_options[size];
  }
  // console.log(props)
  const square_style = {
    width: get_size(props.size),
    height: get_size(props.size),
    backgroundColor: get_color(props.color),
    color: "#fff"
  }

  return (
    <>
      <div style={square_style}>{props.text}</div>
    </>  
  )
}
