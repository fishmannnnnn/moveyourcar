import styles from './ButtonTransparent.module.scss';
import cn from 'classnames';
const ButtonTransparent = ({text}: {text: string}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}
export default ButtonTransparent