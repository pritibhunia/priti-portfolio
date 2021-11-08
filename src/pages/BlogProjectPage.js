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
                    <Card className="col" imgUrl={require('../assets/images/blog_3.jpeg').default}>
                        <Card.Title>A cup of Coffee and peace of my mind</Card.Title>
                        <Card.Content>When we are grappling through the day and striving to keep our inner selves together, nothing can be better than a cup of coffee to help us fight through that.</Card.Content>
                        <Card.Link to="/blog/3">See Inside</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={require('../assets/images/IAD.jpg').default}>
                        <Card.Title>Component Details Extraction from Architecture Diagram</Card.Title>
                        <Card.Content>Java</Card.Content>
                        <Card.Link to="/blog/1">Know More</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={require('../assets/images/DevOpsPipeline.png').default}>
                        <Card.Title>End-to-end Pipeline for Azure Kubernetes Services</Card.Title>
                        <Card.Content>AKS / Docker / YAML</Card.Content>
                        <Card.Link to="/blog/2">Learn More</Card.Link>
                    </Card>
                </div>
                <div className="row gap-3 mt-3">
                    <Card className="col" imgUrl={require('../assets/images/blog_2.png').default}>
                        <Card.Title>My First Technical Blog</Card.Title>
                        <Card.Content>Integrating Azure API Management with Azure Virtual Network and Azure Application Gateway</Card.Content>
                        <Card.Link to="/blog/4">Details Inside</Card.Link>
                    </Card>
                    <Card className="col" imgUrl={require('../assets/images/Goa.jpg').default}>
                        <Card.Title>A trip to remember</Card.Title>
                        <Card.Content>Me and my friends: A journey which I am going to remember for my whole life</Card.Content>
                        <Card.Link to="/blog/5">Take a Look!</Card.Link>
                    </Card>
                    
                </div>
            </Section>
            <Switch>
                <Route path="/blog/1" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 1">
                    <Modal.Body>
                            <iframe
                                src="https://github.com/pritibhunia/IADExtraction"
                                frameBorder="0" title="Blog1"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/2" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 2">
                    <Modal.Body>
                            <iframe
                                src="https://github.com/pritibhunia/AKS"
                                frameBorder="0" title="Blog2"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/3" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 3">
                        <Modal.Body>Blog 3</Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/4" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 4">
                        <Modal.Body>
                            <iframe
                                src="https://pritibhunia.medium.com/integrating-azure-api-management-with-azure-virtual-network-and-azure-application-gateway-920eb532c049"
                                frameBorder="0" title="Blog4"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
                <Route path="/blog/5" exact>
                    <Modal onClose={modalCloseHandler} title="Blog 5">
                        <Modal.Body>
                            <iframe
                                src="https://pritibhunia.medium.com/go-goa-the-advent-of-a-wonderful-journey-1690f571667"
                                frameBorder="0" title="Blog5"
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Route>
            </Switch>
        </div>
    )
}

export default BlogProjectPage
