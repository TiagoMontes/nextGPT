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
      <div className={styles.messageContainer}>
          <div className={styles.messageInputField}>
          <label htmlFor="inputGpt">Mande sua mensagem para o Gepêto</label>      
            <div className={styles.inputAndButton}>
              <input id='inputGpt' className={styles.inputGpt} onChange={(e) => setMessage(e.target.value)} value={message} />        
              <button className={styles.sendMessageButton} onClick={handleSendMessage}>Enviar</button>  
            </div>
          </div>
      </div>
      <div className={styles.messageResponse}>
          <p>{response}</p>
      </div>
    </>
  )
}