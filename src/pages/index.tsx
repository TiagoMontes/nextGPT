import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import GptChatBox from '@/components/GptChatBox'

export default function Home() {
  return (
    <div className={styles.body}>

      <div className={styles.main}>
        <h1>Chat GPT integrado em uma aplicação next</h1>
        <GptChatBox />
      </div>
    </div>
  )
}
