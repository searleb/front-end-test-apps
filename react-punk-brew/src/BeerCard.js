import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BeerCardWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 5px 1px rgba(0,0,0, 0.2);
  max-width: 400px;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
`

const Image = styled.img`
  height: 300px;
  max-width: 100%;
  display: block;
  margin: 0 auto 1em;
`

class BeerCard extends React.Component {
  render() {
    const { beer } = this.props
    return (
      <BeerCardWrapper>
        <Image src={beer.image_url} alt={beer.name} />
        <h3>
          {beer.name}
          <br />
          <small>{beer.tagline}</small>
        </h3>

        <p>{beer.description}</p>

        <h4>Food pairing</h4>
        <ul>
          {beer.food_pairing.map((food, i) => <li key={i}>{food}</li> )}
        </ul>

        <Link to={`/beer/${beer.id}`}>More</Link>
      </BeerCardWrapper>
    )
  }
}

export default BeerCard
