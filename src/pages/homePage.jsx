import React, { Component, Fragment } from "react";

import "../components/Home/home.scss";
import HomeCard from "../components/card/homeCard";


export class Home extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <h1 className="home__title">Our Latest Posts</h1>
          </div>
          <div className="container">
            <HomeCard />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
