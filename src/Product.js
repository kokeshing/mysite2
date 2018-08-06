import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'antd';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
    };
  }

  componentWillMount() {
    const request = axios.create({
            baseURL: "https://api.github.com"
        })
        request.get("/users/kokeshing/repos")
            .then(res => {
                this.setState({
                    repositories: res.data
                });
            })
  }

  render() {
    return (
        <div id="contents-wrapper">
            <h1>Repositories</h1>
        <div style={{ padding: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {this.state.repositories.map((data) => {
                return <Card title={data.name} key={data.id} extra={<a href={data.html_url}>Detail</a>} style={{ width: 300 }}><p>{data.description}</p></Card>;
            })}
        </div>
        </div>
    );
  }
}

export default Product;