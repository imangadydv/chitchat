import React from 'react'
import axios from 'axios'
import { useEffect , useState} from 'react'
const ChatPage = () => {

const [chats, setChats] = useState([])
   
const fetchChats = async () => {
    try {
        console.log('fetching chats')
        const response = await axios.get('http://localhost:3000/api/chat')
        setChats(response.data)
    }
    catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchChats()
}
, [])



  return (
    <div>
        <h1>Chat Page</h1>
        <ul>
            {chats.map((chat) => (
                <li key={chat._id}>{chat.chatName}</li>
            ))}
        </ul>
    </div>
  )
}

export default ChatPage