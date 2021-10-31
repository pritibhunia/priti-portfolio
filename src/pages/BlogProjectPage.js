import React from 'react';
import { Route, Switch, useHistory } from 'react-router';
import img from '../assets/images/bgImage.jpeg';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Section from '../components/Section';

const BlogProjectPage = () => {
    let history = useHistory();

    const modalCloseHandler = () => {
        history.push("/blog");
    }

    return (
        <div className="container mt-2 pt-2">
            <Section title="Blogs and Projects">
                {/* <div className="d-flex flex-row gap-3 flex-wrap"> */}
                <div className="row gap-3">
                    <Card className="col" imgUrl={require('../assets/images/bgImage.jpeg').default}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Content>Html / JavaScript / Css</Card.Content>
                        <Card.Link to="/blog/1">Learn More</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={img}>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Content>Html / JavaScript / Css</Card.Content>
                        <Card.Link to="/blog/2">Learn More</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={require('../assets/images/blog_3.jpeg').default}>
                        <Card.Title>Comming soon...</Card.Title>
                        {/* <Card.Content>Me and my friends: A journey which I am going to remember for my whole life</Card.Content> */}
                        {/* <Card.Link to="/blog/3">Know More</Card.Link> */}
                    </Card>
                </div>
                <div className="row gap-3 mt-3">
                    <Card className="col" imgUrl={require('../assets/images/blog_2.png').default}>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Card.Content>Integrating Azure API Management with Azure Virtual Network and Azure Application Gateway</Card.Content>
                        <Card.Link to="/blog/4">Learn More</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={require('../assets/images/blog_1.jpeg').default}>
                        <Card.Title>A trip to remember</Card.Title>
                        <Card.Content>Me and my friends: A journey which I am going to remember for my whole life</Card.Content>
                        <Card.Link to="/blog/5">Know More</Card.Link>
                    </Card>
                    
                </div>
            </Section>
            <Switch>
                <Route path="/blog/1" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 1">
                        <Modal.Body>Blog 1</Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/2" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 2">
                        <Modal.Body>Blog 2</Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/3" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 3">
                        <Modal.Body>Blog 3</Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/4" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 3">
                        <Modal.Body>
                            <iframe
                                src="https://pritibhunia.medium.com/integrating-azure-api-management-with-azure-virtual-network-and-azure-application-gateway-920eb532c049"
                                frameBorder="0" title="Blog1"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/5" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 3">
                        <Modal.Body>
                            <iframe
                                src="https://pritibhunia.medium.com/go-goa-the-advent-of-a-wonderful-journey-1690f571667"
                                frameBorder="0" title="Blog1"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
            </Switch>
        </div>
    )
}

export default BlogProjectPage
