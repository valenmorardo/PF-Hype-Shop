import React from 'react'
// tutorial https://fredrikoseberg.github.io/react-chatbot-kit-docs/
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../ChatBot/config';
import MessageParser from '../ChatBot/MessageParser';
import ActionProvider from '../ChatBot/ActionProvider';


const Yo = () => {
  return (
<div >
<Chatbot
config={config}
messageParser={MessageParser}
actionProvider={ActionProvider}
/>
</div>
    )
}

export default Yo