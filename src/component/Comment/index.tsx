import { Trash } from 'phosphor-react';

import {Avatar} from '../Avatar';

import styles from './Comment.module.css';

interface IProps{
  content: string;
}

export function Comment({content}:IProps) {
  
  return (
    <div className={styles.commentContainer}>
        <div className={styles.commentUser}>
          <Avatar src="https://github.com/fabioabrantes.png"/>

          <div className={styles.authorAndTime}>
            <strong>francisco Abrantes</strong>
          </div>
        </div> 

        <div className={styles.commentContent}>
          <p>{content}</p>

          <div className={styles.ButtonContainer}>
            <button onClick={()=>{console.log('deletou')}} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </div>         
        </div>
      </div>
  );
}