import React from "react";
import teamData from '../../assets/teamData'
import Team_Members from './Team_Members'
import styles from './Team.module.scss'




const Team = () => {


    return (
        <div>
        { teamData.map(data => <div className="styles flexWrap"><Team_Members members={data} /></div>) }
        </div>
    );
};

export default Team;