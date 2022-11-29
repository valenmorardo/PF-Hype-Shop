import React from 'react'
// tutorial https://fredrikoseberg.github.io/react-chatbot-kit-docs/
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';


const ChatLit = () => {
  return (
<div class="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 "
>
<Chatbot
config={config}
messageParser={MessageParser}
actionProvider={ActionProvider}
/>
</div>
    )
}

export default ChatLit