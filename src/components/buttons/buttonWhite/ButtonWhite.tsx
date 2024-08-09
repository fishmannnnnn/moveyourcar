import styles from './ButtonWhite.module.scss';
import arrow from '@/icons/arrow.svg'
import Image from 'next/image';
const ButtonWhite = ({text}:{text: string}) => {
  return (
    <button className={styles.button}>
        <span>{text}</span>
        <Image src={arrow} alt='submit-icon'></Image>
    </button>
  )
}
export default ButtonWhite