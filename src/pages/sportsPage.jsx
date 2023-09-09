import React, { Component, Fragment } from 'react'
import SportsCard from '../components/card/sportsCard';

export class Sports extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Sports Posts</h1>
          </div>
          <div className="container">
            <SportsCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Sports