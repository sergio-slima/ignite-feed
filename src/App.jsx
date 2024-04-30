import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Siderbar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/sergio-slima.png',
      name: 'Sergio Silva Lima',
      role: 'Analista de Sistemas'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishAt: new Date('2024-04-25 20:10:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/sergio-slima.png',
      name: 'Ananda Cristina',
      role: 'Professora Infantil'
    },
    content: [
      { type: 'paragraph', content: 'Olá galera!' },
      { type: 'paragraph', content: 'Quod consectetur laudantium aperiam, libero ut ipsam accusamus hic maxime id aut repudiandae sed magnam nam pariatur dolorum nemo ducimus.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishAt: new Date('2024-04-30 11:28:30'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
