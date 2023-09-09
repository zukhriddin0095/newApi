
import React, { Component, Fragment } from 'react'
import TechnologyCard from '../components/card/technologyCard'

export class Technology extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Sports Posts</h1>
          </div>
          <div className="container">
            <TechnologyCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Technology