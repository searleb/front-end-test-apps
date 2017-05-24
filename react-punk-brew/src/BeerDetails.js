import React from 'react'
import axios from 'axios'

class BeerDetails extends React.Component {
  state = {
    brew: [],
  }

  componentDidMount() {
    console.log(this.props);
    axios
    .get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`)
    .then(res => this.setState({ brew: res.data[0] }));
  }

  render() {
    const { brew } = this.state
    return (
      <div className="beer-details">
        {brew.length === 0 ?
          <p>Loading...</p>
          :
          <section>
            <img src={brew.image_url} alt={brew.name} style={{ maxHeight: '300px' }}/>
            <h3>
              {brew.name}
              <br />
              <small>{brew.tagline}</small>
            </h3>
            <p>{brew.description}</p>

            <h4>Food pairing</h4>
            <ul>
              {brew.food_pairing.map(food => <li>{food}</li>)}
            </ul>

            <h2>
              {brew.name} Brewing Guide <br />
              <small>First brewed: {brew.first_brewed}</small>
            </h2>
            <h3>Ingredients</h3>
            <h4>Hops</h4>
            <ul>
              {brew.ingredients.hops.map(hops =>
                <li>
                  {hops.name}: {hops.amount.value} {hops.amount.unit} ({hops.add})
                </li>
              )}
            </ul>

            <h4>Malt</h4>
            <ul>
              {brew.ingredients.malt.map(malt =>
                <li>{malt.name}: {malt.amount.value} {malt.amount.unit}</li>
              )}
            </ul>

            <h4>Yeast</h4>
            {brew.ingredients.yeast}
            <ul>
              <li>
                ABV: {brew.abv}
              </li>
            </ul>

            <h3>Brew Method</h3>
            <h4>Fermentation</h4>
            {brew.method.fermentation.temp.value} {brew.method.fermentation.temp.unit}
            <h4>Mash Temp</h4>
            <ul>
              {brew.method.mash_temp.map(mash =>
                <li>{mash.duration} mins at {mash.temp.value} {mash.temp.unit}</li>
              )}
            </ul>
            <h4>Twist</h4>
            {brew.method.twist}

            <h3>Brewers Tip</h3>
            <p>{brew.brewers_tips}</p>

            <h3>Stats</h3>
            <ul>
              <li>ABV: {brew.abv}</li>
              <li>EBC: {brew.ebc}</li>
              <li>IBU: {brew.ibu}</li>
              <li>PH: {brew.ph}</li>
              <li>SRM: {brew.srm}</li>
              <li>Volume: {brew.volume.value} {brew.volume.unit}</li>
              <li>Target FG: {brew.target_fg}</li>
              <li>Target OG: {brew.target_og}</li>
              <li>Attenuation Level: {brew.attenuation_level}</li>
              <li>Boil Volume: {brew.boil_volume.value} {brew.boil_volume.unit}</li>
            </ul>
          </section>
        }
      </div>
    )
  }
}

export default BeerDetails
