import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: rgba(141, 42, 170, 1);
  display: flex;
  padding: 0px 1em;
`
const H2Header = styled.h2`
  color: #fff;
  font-size: 1.7em;
`
class PunkHeader extends React.Component {
  render() {
    return (
      <Nav>
        <H2Header>Brew Dog Library</H2Header>
      </Nav>
    )
  }
}

export default PunkHeader
