




import React, { Component } from "react";

import "./homeCard.scss";
import request from "../../server";

export class SportsCard extends Component {
  state = {
    newapi: [],
  };
  async getNewApi() {
    try {
      let { data } = await request.get(
        "top-headlines?country=de&category=sports&apiKey=9685146720c842ee84cdbd0fc6a11420"
      ); 
      this.setState({ newapi: data.articles });
    } catch (err) {
      console.log(err.response.statusText);
    }
  }
  componentDidMount() {
    this.getNewApi();
  }
  render() {
    const { newapi, alldataPage } = this.state;
    console.log(alldataPage);
    if (!newapi.length) {
      return <div className="container"> <h1>Loading...</h1>;</div>
     
    }
   
    return (
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

    );
  }
}

export default SportsCard;



//  const pages = 20 / 5;
//  let paginationItem = [];
//  for (let i = 1; i <= pages; i++) {
//    paginationItem.push(allData);
//  }

        // <ul className="pagination">
        //   <li className="page__item">
        //     <button className="page__link">Previous</button>
        //   </li>
        //   {paginationItem.map((page) => (
        //     <li className="page__item">
        //       <button className="page__link">{page}</button>
        //     </li>
        //   ))}
        //   <li className="page__item">
        //     <button className="page__link">Next</button>
        //   </li>
        // </ul>;

