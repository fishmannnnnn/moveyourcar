import styles from './Navbar.module.scss';
import Image from 'next/image';
import f from '@/icons/f.svg';
import insta from '@/icons/insta.svg';
import x from '@/icons/x.svg';
import LanguageSelect from '../language-select/LanguageSelect';
import { inter } from '@/fonts';
import cn from 'classnames';
import { LINKS } from '@/constants';
import Link from 'next/link';
import ButtonTransparent from '../buttons/buttonTransparent/ButtonTransparent';
const Navbar = () => {
	return (
		<header className={styles.header}>
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
						<div className={styles.number}>
							<span>+</span>1 <span>[</span>937<span>]</span>{' '}
							272-37-44
						</div>
					</div>

					<div className={styles.languageSelect}>
						<LanguageSelect />
					</div>
				</div>
			</div>
			<div className={styles.headerBottom}>
				<div className={styles.headerBottomInner}>
					<div className={cn(styles.logo, inter.className)}>LOGO</div>
					<nav>
						<ul className={styles.nav}>
							{LINKS.map((link) => (
								<li className={styles.navLink} key={link.key}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							))}
						</ul>
					</nav>
					<ButtonTransparent text='Get a quote' />
				</div>
			</div>
		</header>
	);
};
export default Navbar;
