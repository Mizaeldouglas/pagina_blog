import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import { ActiveLink } from '../ActiveLink'


export function Header(){
	return(
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>

				<a>
					<Image src={ logo } alt='Logo' />
				</a>
				<nav>
					<ActiveLink href="/" activeClassName={styles.active}>
						<a>Home</a>
					</ActiveLink >

					<ActiveLink href="/posts" activeClassName={styles.active}>
						<a>Conteudo</a>
					</ActiveLink>
					
					<ActiveLink href="/sobre" activeClassName={styles.active}>
						<a>Quem somos</a>
					</ActiveLink>
				</nav>
				<a  className={styles.readyButtom} type='button' href='www.google.com'>
					Começar
				</a>
			</div>
		</header>
	)
}