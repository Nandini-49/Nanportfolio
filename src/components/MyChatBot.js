import React from "react";

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
