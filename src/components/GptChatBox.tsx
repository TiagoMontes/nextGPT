import { getResponse } from '@/utils/getResponse';
import { useState } from 'react'
import styles from './styles.module.css'

export default function GptChatBox() {
  const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');


    const handleSendMessage = async (e: any) => {
      e.preventDefault();
      const chatResponse = await getResponse(message);

      if (chatResponse.error) {
          console.log(chatResponse.error)
          return
      }
      setResponse(chatResponse);
      setMessage('')
  }

  return (
    <>
          <div className={styles.gptMessage}>
              <div className={styles.chatInputField}>
                <label htmlFor="inputGpt">Mande sua mensage para o Gepêto:</label>      
                <input id='inputGpt' className={styles.inputGpt} onChange={(e) => setMessage(e.target.value)} value={message} />        
              </div>
              <button className={styles.sendMessageButton} onClick={handleSendMessage}>Enviar</button>
          </div>
          <div className={styles.gptResponse}>
              <div>AI: {response}</div>
          </div>
    </>
  )
}