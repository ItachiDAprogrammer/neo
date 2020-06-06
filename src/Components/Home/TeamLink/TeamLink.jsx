import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Wrepper from './Styles'


const TeamLink = () => {

    return (

        <Wrepper>
      <img src="https://images.unsplash.com/photo-1591155426209-23831d47700d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" rounded />
      <div className="link">
    	<Link id = 'link'to = '/team' > See Team </Link>
      </div>

    	</Wrepper>
    )
}

export default TeamLink