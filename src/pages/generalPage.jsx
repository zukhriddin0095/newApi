
import React, { Component, Fragment } from 'react'
import GeneralCard from '../components/card/generalCard';

export class General extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our General Posts</h1>
          </div>
          <div className="container">
            <GeneralCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default General