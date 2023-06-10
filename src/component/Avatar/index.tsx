import styles from './Avatar.module.css'

interface IProps{
  src:string;
}
export function Avatar({ src }:IProps) {
  return (
    <img
      className={styles.avatar}
      src={src}
    />
  );
}