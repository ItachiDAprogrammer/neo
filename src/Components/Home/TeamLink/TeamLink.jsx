import React from 'react'
import { Link } from 'react-router-dom'
import styles from './TeamLink.module.scss'



const TeamLink = () => {

    return (

        <div className={styles.container}>
        <div className="img">
          <img src="https://images.unsplash.com/photo-1591155426209-23831d47700d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
        </div>


        <div className={styles.discription}>
            <h2>Get to know the team</h2>
            <p>click the botton below to get to the team behind <span>Teans With Vission</span> better</p>
          </div>

          <div className={styles.link}>
          <Link id = {styles.link} to = '/team' > See Team </Link>
          </div>
        </div>
    )
}

export default TeamLink