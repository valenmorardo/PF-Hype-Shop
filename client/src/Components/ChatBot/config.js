import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'El_Zapatero';
const config = {
  initialMessages: [createChatBotMessage(`hola yo soy ${botName}`)],
 botName: botName,
//  customStyles:{
//     backgroundColor:'#376B7E'
//  },
//  chatButton: {
//       backgroundColor: '#5ccc9d',
//     },
};

export default config;