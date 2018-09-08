import React, { Component } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import { Tag } from 'antd';

class Article extends Component {
    constructor(props) {
        super(props);
        const {params} = this.props.match
        const id = parseInt(params.id, 10)
        this.state = {
            id: id,
            subject: "",
            content: "",
            tags: [],
            create_date: "",
            update_date: "",
            error: false,
        };
    }

    componentWillMount() {
        axios.all([
            axios.get('https://kokeshing.com/articles/' + this.state.id),
            axios.get('https://api.kokeshing.com/articles/detail/' + this.state.id)
        ])
        .then(axios.spread((content, res) => {
            this.setState({
                subject: res.data.Subject,
                content: content.data,
                tags: res.data.Tags !== null ? res.data.Tags : [],
                create_date: res.data.Create_date,
                update_date: res.data.Update_date
            });
        })).catch((error) =>  {
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
            const { subject, content, tags, create_date } = this.state;
            return (
                <div id="article">
                    <div className="article-header">
                        <h3 className="create-date">{moment(create_date).utcOffset(create_date).format("YYYY/MM/DD HH:mm")}</h3>
                        <h2 className="title">{subject}</h2>
                        <div className="tag-field">
                            {tags.map((tag) => {
                                return <Tag key={tag}>{tag}</Tag>;
                            })}
                        </div>
                    </div>
                    <ReactMarkdown source={content} escapeHtml={false} className="article-content"/>
                </div>
            );
        }
    }
}

export default Article;