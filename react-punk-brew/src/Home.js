import React from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'
import styled from 'styled-components'

const BeersList = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
`

class Home extends React.Component {
  state = {
    loading: true,
    beers: [],
  }

  componentDidMount() {
    axios
    .get('https://api.punkapi.com/v2/beers?per_page=80')
    .then(res => this.setState({ beers: res.data }));
  }

  render() {
    return (
      <BeersList>
        {this.state.beers ?
          this.state.beers.map((beer, i) => <BeerCard key={i} beer={beer} />)
          :
          'Loading...'
        }
      </BeersList>
    )
  }
}

export default Home
