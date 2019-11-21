import React from 'react';
import SendMessageBox from "./SendMessageBox";
import ChatDisplay from "./ChatDisplay";

function ChatContainer(props) {
  return (
    <>
      <SendMessageBox/>
      <ChatDisplay/>
    </>
  );
}

export default ChatContainer;
