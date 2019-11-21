import React from 'react';
import {postChat} from "../api/PostChat";
import {NAME} from "../config/Constants";

function SendMessageBox(props) {
  return (
    <form className="field" onSubmit={async (e) => {
      e.preventDefault();

      const val = e.target.text.value;
      e.target.text.value = "";

      await postChat({author: NAME, message: val});

    }}>
      <input className="input" placeholder="Type a message to say" name="text"
             autoComplete="off">
      </input>
    </form>
  );
}

export default SendMessageBox;
