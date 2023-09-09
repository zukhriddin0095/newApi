

import React, { Component, Fragment } from 'react'

import BusinessCard from '../components/card/businessCard';

export class Business extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Business Posts</h1>
          </div>
          <div className="container">
            <BusinessCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Business