import React, { Components } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Layout, Menu, Icon, Timeline, List, Avatar } from 'antd';
import './reset.css'
import './App.css';
const vaeimg: string = require('./img/vae.png');
const gifimg: string = require('./img/movie.gif');
const resultimg: string = require('./img/result.png');

const { Header, Content, Sider, Footer } = Layout;

class App extends React.Component {
    state = {
        collapsed: window.parent.screen.width > 800 ? false : true,
        collapsedwidth: window.parent.screen.width > 500 ? 80 : 0,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return (
            <BrowserRouter>
                <Layout hasSider={true}>
                    <Sider collapsible={true} collapsed={this.state.collapsed} onCollapse={this.onCollapse} collapsedWidth={this.state.collapsedwidth}>
                    <div className="logo" style={{ textAlign: 'center', color: '#fff'}}>
                        🙇
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to={process.env.PUBLIC_URL + "/"}>
                                <Icon type="home" />
                                <span className="nav-text">home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={process.env.PUBLIC_URL + "/about.me"}>
                                <Icon type="user" />
                                <span className="nav-text">about me</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={process.env.PUBLIC_URL + "/product"}>
                                <Icon type="appstore-o" />
                                <span className="nav-text">product</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={process.env.PUBLIC_URL + "/blog"}>
                                <Icon type="edit" />
                                <span className="nav-text">blog</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={process.env.PUBLIC_URL + "/contact"}>
                                <Icon type="contacts" />
                                <span className="nav-text">contact</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#f2feff', padding: 0 }}>
                        <div id="header-wrapper">
                        <List>
                            <List.Item>
                                <a href="https://github.com/kokeshing" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="github" />} title="" description=""/></a>
                                <a href="https://twitter.com/kokeshing_" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="twitter" />} title="" description=""/></a>
                                <a href="mailto:kou7cdb1a+site@gmail.com" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="mail" />} title="" description=""/></a>
                            </List.Item>
                        </List>
                        </div>
                    </Header>
                  <Content>
                        <div id="wrapper">
                            <Route exact path='/' component={home}/>
                            <Route path='/about.me' component={aboutme}/>
                            <Route path='/product' component={product}/>
                            <Route path='/blog' component={blog}/>
                            <Route path='/contact' component={contact}/>
                        </div>
                  </Content>
                </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}

const home = () => (
    <div id="contents-wrapper">
        <h1>KOTARO ONISHI</h1>
        <h2>Japanese Kuso Engineer</h2>
        <h1 style={{ margin: 24 }}>Welcome!!</h1>
        <h1>🙇</h1>
    </div>
)

const aboutme = () => (
    <div id="contents-wrapper">
        <h1>KOTARO ONISHI</h1>
        <div style={{ padding: 24, textAlign: 'left' }}>
            <h2 style={{ marginTop: 24 }}>Profile</h2>
            <List>
                <List.Item>
                    <List.Item.Meta avatar={<Avatar icon="calendar" />} title="Birth" description="1997"/>
                    <List.Item.Meta avatar={<Avatar icon="team" />} title="Organization" description="UEC CAT2 "/>
                    <List.Item.Meta avatar={<Avatar icon="home" />} title="Living" description="Tokyo"/>
                </List.Item>
            </List>
            <h2 style={{ marginTop: 24, marginBottom: 24 }}>History</h2>
            <Timeline>
                <Timeline.Item>2017/12 -<br/>Diverta Inc. Intern of Web Backend and Frontend</Timeline.Item>
                <Timeline.Item>2017/04 -<br/>Departments of the Faculty of Informatics and Engineering (Bachelor), The University of Electoro-Communications</Timeline.Item>
            </Timeline>
            <h2 style={{ marginTop: 24 }}>Interesting</h2>
            <List>
                <List.Item>
                    <List.Item.Meta avatar={<Avatar icon="share-alt" />} title="Machine Learning" description="Computer Vison, Converted Speech"/>
                    <List.Item.Meta avatar={<Avatar icon="global" />} title="Web App" description="Progressive Web App, WebAssembly"/>
                </List.Item>
            </List>
        </div>
    </div>
)

const product = () => (
    <div id="contents-wrapper">
        <h1>VAE</h1>
        <p>Variational Autoencoder is one of the generate model.</p>
        <div style={{ padding: 24, textAlign: 'left' }}>
            <h2>Approach</h2>
            <p>The input data denote x, and the latent variable denote z.<br/>The reason why we can in this way is this method basing on manifold hypothesis.<br/>And, suppose z is probably distribution N(0, 1).<br/>Encoder is work that processing x to z.<br/>Decoder is work that processing z to x.<br/>From the above, Encoder can be expressed q(z|x), Decoder can be expressed p(x|z).</p>
            <div style={{ textAlign: 'center' }}><img src={vaeimg}/></div>
            <h2>Implementation</h2>
            <p>When implementation, not output z. the mean of z and dispersion of z.<br/>It is the solution of computational problems.</p>
            <p>Loss function denote reconstraction loss and KL-divergence.<br/>It is because, reconstraction loss denote the diffrent of the input data x and the decoder output<br/>x^. KL-divergenece denote the diffrent of x and x^.</p>
            <h2>Result</h2>
            <h3>Training Trainsition</h3>
            <div style={{ textAlign: 'center' }}><img src={gifimg}/></div>
            <h3>Finally Result</h3>
            <div style={{ textAlign: 'center' }}><img src={resultimg}/></div>
        </div>
    </div>
)

const blog = () => (
    <div id="contents-wrapper">
        <h1>🙇 now developing 🙇</h1>
    </div>
)

const contact = () => (
    <div id="contents-wrapper">
        <h1>Someday, Inquiry form will be added</h1>
        <List>
            <List.Item>
                <a href="https://twitter.com/kokeshing_" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="twitter" />} title="Twitter" description=""/></a>
                <a href="mailto:kou7cdb1a+site@gmail.com" style={{ padding: 10 }}><List.Item.Meta avatar={<Avatar icon="mail" />} title="Mail" description=""/></a>
            </List.Item>
        </List>
    </div>
)


export default App;
