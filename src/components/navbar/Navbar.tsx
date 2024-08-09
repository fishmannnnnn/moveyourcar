import styles from './Navbar.module.scss';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { inter } from '@/fonts';
import f from '@/icons/f.svg';
import insta from '@/icons/insta.svg';
import x from '@/icons/x.svg';
import menu from '@/icons/menu.svg';
import cn from 'classnames';
import { LINKS } from '@/constants';
import LanguageSelect from '../language-select/LanguageSelect';
import ButtonTransparent from '../buttons/buttonTransparent/ButtonTransparent';

const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const navRef = useRef<HTMLElement>(null);
	const showMenu = () => {
		let navEl: HTMLElement | null = navRef.current;
		if (navEl) {
			console.log(navEl);
			navEl.classList.toggle(styles.navMobile);
		}
		setMenuVisible(!menuVisible);
	};
	return (
		<header className={styles.header}>
			<div className={styles.background}></div>
			<div className={styles.headerTop}>
				<div className={styles.headerTopInner}>
					<div className={styles.contacts}>
						<div className={styles.socials}>
							<a href='http://www.facebook.com'>
								<Image src={f} alt='facebook' />
							</a>
							<a href='http://www.instagram.com'>
								<Image src={insta} alt='instagram' />
							</a>
							<a href='http://www.x.com'>
								<Image src={x} alt='x' />
							</a>
						</div>
						<a className={styles.number} href='tel:+19372723744'>
							<span>+</span>1 ­<span>[</span>937<span>]</span>­
							272-37-44
						</a>
					</div>

					<LanguageSelect />
				</div>
			</div>
			<div className={styles.headerBottom}>
				<div className={styles.headerBottomInner}>
					<div className={cn(styles.logo, inter.className)}>LOGO</div>
					<nav className={styles.nav} ref={navRef}>
						<div className={styles.contactsMobile}>
							<div className={styles.contacts}>
								<div className={styles.socials}>
									<a href='http://www.facebook.com'>
										<Image src={f} alt='facebook' />
									</a>
									<a href='http://www.instagram.com'>
										<Image src={insta} alt='instagram' />
									</a>
									<a href='http://www.x.com'>
										<Image src={x} alt='x' />
									</a>
								</div>
								<a
									className={styles.number}
									href='tel:+19372723744'>
									<span>+</span>1 ­<span>[</span>937
									<span>] ­</span> 272-37-44
								</a>
							</div>
							<div className={styles.languageSelect}>
								<LanguageSelect />
							</div>
						</div>
						<ul>
							{LINKS.map((link) => (
								<li className={styles.navLink} key={link.key}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							))}
						</ul>
					</nav>
					<div className={styles.navRight}>
						<ButtonTransparent text='Get a quote' />
						<button
							className={
								menuVisible
									? styles.closeMenuButton
									: styles.menuButton
							}
							onClick={() => showMenu()}>
							<span
								className={cn(
									!menuVisible
										? styles.line
										: styles.lineFirst,
									styles.animatedLine
								)}></span>
							<span
								className={cn(
									!menuVisible
										? styles.line
										: styles.lineInvisible,
									styles.animatedLine
								)}></span>
							<span
								className={cn(
									!menuVisible
										? styles.line
										: styles.lineLast,
									styles.animatedLine
								)}></span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
