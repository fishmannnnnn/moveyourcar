import styles from "./page.module.scss";
import Hero from '@/components/hero/Hero';
export default function Home() {
  return (
		<main className={styles.main}>
			<Hero />
		</main>
  );
}
