import { useState } from "react";

// import "./chat.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function ChatMain() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default ChatMain;