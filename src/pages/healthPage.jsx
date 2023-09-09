

import React, { Component, Fragment } from 'react'
import HealthCard from '../components/card/healthCard';

export class Health extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Health Posts</h1>
          </div>
          <div className="container">
            <HealthCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Health