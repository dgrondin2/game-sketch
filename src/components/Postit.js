import React from 'react';
import '../styles/css/Postit.css';

function Postit(props) {
  let color;
  switch (props.color) {
    case "green":
      color = "#bcff99";
      break;
    case "purple":
      color = "#d0b0ff";
      break;
    default:
      color = "#fffd9a";
  }
  const style = {
    backgroundColor: color
  }
  return (
    <div className="postit" style={style}>
      {props.children}
    </div>
  )
}

export default Postit;