import styles from './Hero.module.scss';
import cn from 'classnames';
import { roboto, robotoCondensed } from '@/styles/fonts';
import Navbar from '@/components/navbar/Navbar';

const Hero = () => {
	return (
		<section className={styles.section}>
			<Navbar />
			<div className='container'>
				<div className={styles.container}>
					<h1
						className={cn(
							styles.heading,
							robotoCondensed.className
						)}>
						MOVEYOURCAR
					</h1>
					<p className={styles.text}>
						Moveyourcar is your trusted partner in moving vehicles
						and motorized equipment.
					</p>
					<h2
						className={cn(
							styles.formTitle,
							robotoCondensed.className
						)}>
						Start your free quote
					</h2>
					<form className={styles.form} action='' method='post'>
						<div className={styles.search}>
							<input
								className={styles.deliveryInput}
								type='text'
								placeholder='Delivery from'
							/>
							<input
								className={styles.deliveryInput}
								type='text'
								placeholder='Delivery to'
							/>
						</div>
						<div className={styles.transportOptions}>
							<input type='radio' value='open' />
							<input type='radio' value='enclosed' />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Hero;
