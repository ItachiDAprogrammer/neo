import React from "react";
import styles from './Team_Members.module.scss'




const Team_Members = (props) => {
    const prop = props.members
    return (
        <div className={styles.wrap}>
          <div className={styles.img}>
            <img src={prop.img}  alt={"img"}/>
          </div>

          <div className={styles.caption} >
            <h3 className={styles.title}>{prop.name} </h3>
            <p>{props.title}</p>
        </div>
    </div>
    );
};

export default Team_Members;