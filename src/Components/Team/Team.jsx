import React from "react";
import teamData from '../../assets/teamData'
import Team_Members from './Team_Members'
import styles from './Team.module.scss'





const Team = () => {

    const team = teamData.map(data => {
        return (
            <div>
            <img  src={data.img}  alt={"img"}/>
            <h3>{data.name} </h3>
            <p>{data.title}</p>
        </div>
        )
    })

    return (
        <div className={styles.header}>
    		<h1>
    			Meet The Team Behind Teens With Vission
    		</h1>
    	
        <div className = { styles.wrap }>
         { team } 
        </div>
        </div>
    );
};

export default Team;