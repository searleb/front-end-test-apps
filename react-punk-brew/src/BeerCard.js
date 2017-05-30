import React from 'react'
import './BeerCard.css'
import { Link } from 'react-router-dom'


class BeerCard extends React.Component {
  render() {
    const { beer } = this.props
    return (
      <div className="beer-card">
        <img src={beer.image_url} alt={beer.name} />
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
      </div>
    )
  }
}

export default BeerCard
