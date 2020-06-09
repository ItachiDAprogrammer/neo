import React from "react";
import styles from './Team.module.scss'





const Team_Members = (props) => {
    const prop = props.members
    return (
        <div className={styles.wrap}>
            <img  src={prop.img}  alt={"img"}/>
            <h3 className={styles.title}>{prop.name} </h3>
            <p>{prop.title}</p>
        </div>
    );
};

export default Team_Members;