import styles from './App.module.css';

import {Header} from './component/Header';
import { PostDriver } from './component/PostDriver';

export function App() {

  return (
    <div className={styles.widget}>
      <Header/>
      
      <PostDriver/>
    </div>   
  )
}
