import { Post } from "./Post";
import { Header } from "./components/Header";
import { Siderbar } from "./components/Sidebar";

import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Siderbar />
        <main>
          <Post autor='Sergio' content='Teste de propriedades' />
          <Post autor='Ananda' content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod consectetur laudantium aperiam, libero ut ipsam accusamus hic maxime id aut repudiandae sed magnam nam pariatur dolorum nemo ducimus.' />
        </main>
      </div>
    </>
  )
}
