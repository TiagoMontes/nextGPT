import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import GptChatBox from '@/components/GptChatBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h1>Chat GPT integrado em uma aplicação next</h1>
      </div>
      
      <GptChatBox />
    </div>
  )
}
