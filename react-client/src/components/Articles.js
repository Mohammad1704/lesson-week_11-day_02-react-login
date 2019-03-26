import React, { Component } from "react";
import { getUser, getJwt } from "../services/AuthService";
class Articles extends Component {
  state = {
    articles: []
  };

  handleArticlesRequest() {
    const user = getUser();
    console.log("the user id is ", user.id);
    const apiUrl = `http://localhost:3001/api/person/${user.id}/articles`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getJwt()}`
      }
    })
      .then(response => response.json())

      .then(data => this.setState({ articles: data.person.Articles }))
      .catch(e => console.log(e));
  }

  componentDidMount() {
    this.handleArticlesRequest();
  }
  render() {
    const articles = this.state.articles.map(articles => {
      return (
        <div>
          <h1>Title: </h1> <p>{articles.title} </p>
        </div>
      );
    });

    return <div>{articles}</div>;
  }
}

export default Articles;
