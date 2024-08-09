'use client';
import Image from 'next/image';
import styles from './Hero.module.scss';
import cn from 'classnames';
import { roboto, robotoCondensed } from '@/styles/fonts';
import Navbar from '@/components/navbar/Navbar';
import ButtonWhite from '../buttons/buttonWhite/ButtonWhite';
import dashLeft from '@/images/dashboard-left.webp';
import dashRight from '@/images/dashboard-right.webp';
import { useState } from 'react';
const Hero = () => {
	const [radioValue, setRadioValue] = useState('');
	return (
		<section className={styles.section}>
			<div className={styles.navbarWrapper}>
				<Navbar />
			</div>
			<Image src={dashLeft} alt='' className={styles.dashLeft}></Image>
			<Image src={dashRight} alt='' className={styles.dashRight}></Image>
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
							<label
								htmlFor='open'
								className={
									radioValue == 'open'
										? 'radio-label--checked'
										: 'radio-label'
								}>
								<input
									type='radio'
									value='open'
									id='open'
									name='transport'
									onChange={() => setRadioValue('open')}
								/>
								<span>Open transport</span>
							</label>
							<label
								htmlFor='enclosed'
								className={
									radioValue == 'enclosed'
										? 'radio-label--checked'
										: 'radio-label'
								}>
								<input
									type='radio'
									value='enclosed'
									id='enclosed'
									name='transport'
									onChange={() => setRadioValue('enclosed')}
								/>
								<span>Enclosed transport</span>
							</label>
						</div>
						<div className={styles.submit}>
							<ButtonWhite text='Vehicle details' />
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};
export default Hero;
