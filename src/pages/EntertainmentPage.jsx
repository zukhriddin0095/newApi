
import React, { Component, Fragment } from 'react'
import EntertainmentCard from '../components/card/entertainmentCard';

export class EntertainmentPage extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our entertainment Posts</h1>
          </div>
          <div className="container">
            <EntertainmentCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default EntertainmentPage;