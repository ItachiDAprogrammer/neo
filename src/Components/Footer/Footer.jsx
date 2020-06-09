import React from 'react'
import styles from './Footer.module.scss'
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className={styles.footer}>
        
        <h2 className={styles.center}>Get In Touch With Us</h2>
        <p style={{color:'red'}}>this part needs to be filled</p>
        <h5> times of oporation</h5>
        <h5>location (optional)</h5>
        <h5>social mediea links</h5>
        <FacebookIcon color='primary' />
        <WhatsAppIcon/>
        <InstagramIcon />



		<span className={styles.copyRights}>&copy;2020 Teens With vission NGO| All rights reserved.</span>
		</div>
    )
}

export default Footer