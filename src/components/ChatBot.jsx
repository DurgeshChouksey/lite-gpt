import React from 'react'
import {useState} from 'react';
import HashLoader from "react-spinners/PacmanLoader";
import '../css/common.css'
import '../css/chat-bot.css'
import axios from 'axios';

const ChatBot = () => {

  const handleClick = async () => {
    setResponse('');
    setLoading(true);
    const ans = await axios.post('https://voice-gpt-backend.vercel.app/api', {prompt: `${userInput}" ,give response without any special characters or formatting. The response should be concise and easy to understand.`})
    setResponse(ans.data.result);
  }
  const [userInput, setUserInput] = useState('')
  const [response, setResponse] = useState('');
  const[showState, setShowState] = useState(true);
  const[loading, setLoading] = useState(false);

  return (
    <div className="chat-bot wrapper">
      <p className="heading-chat-bot">Ask me anything, and I’ll do my best to help you! Just type your question below and hit enter.</p>

      <div className="qna">
          <input onChange={(e)=>{setUserInput(e.target.value)}} className="prompt_input" type="text" name="prompt" id="" placeholder='Enter Prompt...' />

          <button onClick={handleClick} type="submit">send</button>
      </div>

      {showState && (<div className="response">
        <h3>AI-Powered Reply:</h3>
        <p>{response === '' ? (loading === false ? 'Response will be show here' : <HashLoader size={20}></HashLoader>) : response}</p>
      </div>)}
    </div>
  )
}

export default ChatBot



// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/DurgeshChouksey/lite-gpt.git
// git push -u origin main
