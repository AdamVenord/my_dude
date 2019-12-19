import React from 'react'
import { Link, } from 'react-router-dom'
import { Header, } from 'semantic-ui-react'

const NoMatch = () => (
  <Header as="h3" textAlign="center">
    What in the whosa where the whatsa howsa 
    <Link to="/"> Go Home</Link>
  </Header>
)

export default NoMatch
