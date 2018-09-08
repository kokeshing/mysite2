import React, { Component } from 'react';
import { Timeline, List, Avatar } from 'antd';

class Aboutme extends Component {
    render() {
        return (
            <div id="aboutme">
                <h2>Profile</h2>
                <List>
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar icon="user" />} title="Name" description="Kotaro Onishi"/>
                        <List.Item.Meta avatar={<Avatar icon="calendar" />} title="Birth" description="1997"/>
                    </List.Item>
                </List>
                <List>
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar icon="team" />} title="Organization" description="UEC CAT2"/>
                        <List.Item.Meta avatar={<Avatar icon="home" />} title="ALIVE" description="Tokyo"/>
                    </List.Item>
                </List>
                <h2>History</h2>
                <Timeline>
                    <Timeline.Item>2017/12 -<br/>Diverta Inc. Intern of Web Backend and Frontend</Timeline.Item>
                    <Timeline.Item>2017/04 -<br/>Departments of the Faculty of Informatics and Engineering (Bachelor), The University of Electoro-Communications</Timeline.Item>
                </Timeline>
                <h2>Interesting</h2>
                <List>
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar icon="share-alt" />} title="Machine Learning" description="Computer Vison, Converted Speech"/>
                        <List.Item.Meta avatar={<Avatar icon="global" />} title="Web App" description="Progressive Web App, WebAssembly"/>
                    </List.Item>
                </List>
            </div>
        );
    }
}

export default Aboutme;