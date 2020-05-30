import React from "react";
import "./Team.scss";
import teamData from '../../assets/teamData'
import Team_Members from "./Team_Members";

const Team = () => {

    // const team = teamData.map(data => <Team_Members members={data} />)

    return (
        <div className="container">
      {teamData.map(data => <Team_Members members={data} />)}
    </div>
    );
};

export default Team;