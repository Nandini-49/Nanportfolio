import React from "react";
import ChatBot from "react-chatbotify";
import MyAnotherChatbot from "./MyAnoterChatBot";

const styles = {
  chatbot: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 999,
  },
};

const MyChatBot = () => {
  return (
    <div style={styles.chatbot}>
      {/* <ChatBot /> */}
      {/* <MyAnotherChatbot /> */}
    </div>
  );
};

export default MyChatBot;
