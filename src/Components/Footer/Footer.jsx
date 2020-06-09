import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
        <h2 className={styles.center}>Get In Touch With Us</h2>
        <h4> times of oporation</h4>
        <h4>location (optional)</h4>
        <h4>social mediea links</h4>

		<span className={styles.copyRights}>&copy;2020 Teens With vission NGO| All rights reserved.</span>
		</div>
    )
}

export default Footer