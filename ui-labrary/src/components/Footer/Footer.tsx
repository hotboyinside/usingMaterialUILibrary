import React from 'react';

import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.header}>
			<div className={styles.container}>
				<span>Logo</span>
				<nav>
					<ul>
						<li>Home</li>
						<li>Start game</li>
						<li>Contacts</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};
