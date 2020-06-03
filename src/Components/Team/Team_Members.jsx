import React from "react";
import "./Team_Members.scss"


const Team_Members = (props) => {
    const prop = props.members
    return (
        <div>
        <section>
          <div className="container">
            <img src={prop.img} className={"team-img"}  alt={"img"}/>
          </div>

          <div className="caption" >
            <h3 className="team-title">{prop.name} </h3>
            <p>{prop.title}</p>
        </div>
        </section>
    </div>
    );
};

export default Team_Members;