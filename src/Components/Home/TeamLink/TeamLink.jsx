import React from 'react'
import { Link } from 'react-router-dom'
import './TeamLink.scss'

const TeamLink = () => {
    return (
        <div>
			<div className="container">
				<div className="col-a">
					<div className="img">
						
					</div>
				</div>
				<div className="col-b">
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae quo, 
					vero voluptate perspiciatis nihil laboriosam tenetur exercitationem sit atque 
					illum. Voluptatibus veniam quia</p>
				</div>
			</div>
			<div className="btn-container">
				<Link className="btn" to="team">see team</Link>
			</div>
		</div>
    )
}

export default TeamLink