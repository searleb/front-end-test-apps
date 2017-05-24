import React from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'
import './Home.css'

class Home extends React.Component {
  state = {
    loading: true,
    beers: [],
  }

  componentDidMount() {
    axios
    .get('https://api.punkapi.com/v2/beers')
    .then(res => this.setState({ beers: res.data }));
  }

  render() {
    return (
      <section className='beers-list'>
        {this.state.beers ?
          this.state.beers.map((beer, i) => <BeerCard key={i} beer={beer} />)
          :
          'Loading...'
        }
      </section>
    )
  }
}

export default Home
