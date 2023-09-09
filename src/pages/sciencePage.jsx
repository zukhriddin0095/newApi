import React, { Component, Fragment } from 'react'
import ScienceCard from '../components/card/scienceCard';

export class Science extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Science Posts</h1>
          </div>
          <div className="container">
            <ScienceCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Science