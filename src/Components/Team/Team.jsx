import React from "react";
import "./Team.css";
import teamData from '../../assets/teamData'
import Team_Members from "./Team_Members";

const Team = () => {
    
    const team = teamData.map(data => <Team_Members members={data} />)
    
  return (
    <div>
      {team}
    </div>
  );
};

export default Team;
