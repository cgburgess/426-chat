import React from 'react';
import PropTypes from 'prop-types';
import {animated, useSpring} from "react-spring";

MessageDisplay.propTypes = {
  message: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.number

};

function MessageDisplay(props) {
  const date = new Date(props.date);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const animProps = useSpring({
    backgroundColor: '#fff',
    from: {
      backgroundColor: '#b4ff98'
    },
    config: {
      mass: 1,
      tension: 50,
      clamp: true
    }
  });


  return (
    <animated.li className="list-item" style={animProps}>
      <div className="level">
        <div className="is-left">
          <span>{props.author}</span>: <span>{props.message}</span>
        </div>
        <div className="is-right">
          {hours}:{minutes}:{seconds}
        </div>
      </div>
    </animated.li>
  );
}

export default MessageDisplay;
