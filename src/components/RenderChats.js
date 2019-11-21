import React from 'react';
import PropTypes from 'prop-types';

RenderChats.propTypes = {
  message: PropTypes.string,
  date: PropTypes.number,
  author: PropTypes.string
};

function RenderChats(props) {
  return (
    <div>{props.author}: {props.message}</div>
  );
}

export default RenderChats;
