import React from 'react';
import { Route, Switch } from 'react-router';
import BlogData from '../assets/data/BlogData.json';
import Card from '../components/Card';
import Section from '../components/Section';
import BlogPage from './BlogPage';
import classes from './BlogProjectPage.module.scss';

const BlogProjectPage = () => {
    document.title = 'Priti Bhunia | Projects and Blogs';

    return (
        <div className="container mt-2 pt-2">
            <Section title="Blogs and Projects">
                <div className={classes.BlogList}>
                    {BlogData.blogs.map((blog => (
                        <Card key={blog.blogId} className={classes.blog} imgUrl={blog.blogImg}>
                            {blog.blogTitle && <Card.Title>{blog.blogTitle}</Card.Title>}
                            {blog.blogDesc && <Card.Content>{blog.blogDesc}</Card.Content>}
                            {blog.blogUrl && <Card.Link to={blog.blogUrl.url} openOnNew={blog.blogUrl.openOnNew}>{blog.blogUrl.urlTitle}</Card.Link>}
                    </Card>
                    )))}
                </div>
            </Section>
            <Switch>
                <Route path="/blog/:blogId" exact>
                    <BlogPage></BlogPage>
                </Route>
            </Switch>
            {/* <Switch>
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
            </Switch> */}
        </div>
    )
}

export default BlogProjectPage
