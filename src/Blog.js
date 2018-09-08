import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import moment from 'moment';
import { List, Tag } from 'antd';

const apiUrl = 'https://api.kokeshing.com/articles'

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            initLoading: true,
            articles: [],
            error: false,
        };
    }

    componentWillMount() {
        axios.get(apiUrl)
        .then(res => {
            this.setState({
                initLoading: false,
                articles: res.data
            });
        }).catch(error => {
            this.setState({
                error: true,
            });
        });
    }


    render() {
        if (this.state.error) {
            return (
                <div id="error">
                    Sorry, something wrong. Try it again.
                </div>
            );
        } else {
            const { initLoading, articles } = this.state;
            return (
                <div id="articles">
                    <List
                        className="aritcle-list"
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={articles}
                        renderItem={item => (
                            <List.Item key={item.Id}>
                                <Link to={process.env.PUBLIC_URL + "/articles/" + item.Id}>
                                    <h4 className="date">{moment(item.Create_date).utcOffset(item.Create_date).format("YYYY/MM/DD HH:mm")}</h4>
                                    <h2 className="title">{item.Subject}</h2>
                                    <div className="tag-field">
                                        {item.Tags.map((tag) => {
                                            return <Tag key={tag}>{tag}</Tag>;
                                        })}
                                    </div>
                                </Link>
                            </List.Item>
                        )}
                    />
                </div>
            );
        }
    }
}

export default Blog;