import React, { Component, Fragment } from "react";

import "./homeCard.scss";
import request from "../../server";
import "bootstrap/dist/css/bootstrap.min.css";
export class BusinessCard extends Component {
  state = {
    newapi: [],
    total: 0,
    activePage: 1,
  };
  async getNewApi() {
    try {
      let { data: allData } = await request.get(
        "top-headlines?country=de&category=business&apiKey=1d6514cbdbd0459db60cab7eb95aa786"
      );
      let { data } = await request.get(
        `top-headlines?country=de&category=business&apiKey=1d6514cbdbd0459db60cab7eb95aa786&page=${this.state.activePage}&pageSize=5`
      );
      this.setState({ newapi: data.articles, total: allData.articles.length });
    } catch (err) {
      console.log(err.response.statusText);
    }
  }
  componentDidMount() {
    this.getNewApi();
  }
  render() {
    const { newapi, allData, total, activePage } = this.state;
    const pages = total / 5;
    let paginationItem = [];
    for (let i = 1; i <= pages; i++) {
      paginationItem.push(i);
    }
    if (!newapi.length) {
      return (
        <div className="container">
          {" "}
          <h1>Loading...</h1>;
        </div>
      );
    }

    const getPage = (page) => {
      this.setState({ activePage: page });
      this.getNewApi();
    };

    return (
      <Fragment>
        <div className="cards">
          {newapi.map((news, idx) => (
            <div className="card" key={idx}>
              <div className="card__img">
                <img src={news.urlToImage} alt="card img" />
                <div className="card__category_btn">
                  <button className="category__btn">{news.author}</button>
                </div>
              </div>
              <div className="card__title">
                <h5>{news.title}</h5>
                <div className="card__title__desc">
                  <p>{news.author}</p>
                  <p>3 Days Ago</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination mt-5">
          <li className={`page-item ${activePage === 1 ? "disabled" : ""}`}>
            <button className="page-link">Previous</button>
          </li>
          {paginationItem.map((page, i) => (
            <li
              className={`page-item ${activePage === page ? "active" : ""}`}
              key={i}
            >
              <button onClick={() => getPage(page)} className="page-link">
                {page}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default BusinessCard;
