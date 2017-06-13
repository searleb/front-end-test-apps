import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PunkHeader from './PunkHeader';
import BeerDetails from './BeerDetails';
import styled from 'styled-components'

const Main = styled.main`
  background-color: rgba(238, 238, 238, 1);
`

class App extends Component {
  render() {
    return (
      <Main>
        <PunkHeader />
        {/* Router Switch */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beer/:id' component={BeerDetails} />
        </Switch>
      </Main>
    );
  }
}

export default App;
