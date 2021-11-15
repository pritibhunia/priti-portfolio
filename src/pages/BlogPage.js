import React from 'react';
import { useHistory, useParams } from 'react-router';
import BlogData from '../assets/data/BlogData.json';
import Blog1 from '../components/blogs/Blog1';
import Blog3 from '../components/blogs/Blog3';
import Blog4 from '../components/blogs/Blog4';
import Blog5 from '../components/blogs/Blog5';
import Modal from '../components/Modal';

const BlogPages = {
    DefaultBlog: <div>Not Found</div>,
    Blog1 : <Blog1/>,
    Blog3: <Blog3/>,
    Blog4: <Blog4/>,
    Blog5: <Blog5/>
}

const findBlog = (blogId) => {
    return BlogData.blogs.find(blog => blog.blogId === blogId);
}

const BlogPage = () => {
    
    const { blogId } = useParams();
    let history = useHistory();
    const blogName = "Blog" + blogId; 
    const blogData = findBlog(+blogId);
    document.title = 'Priti Bhunia | ' + blogData.blogTitle;
    
    const modalCloseHandler = () => {
        history.push("/blog");
    }

    return (
        <Modal onClose={modalCloseHandler} title={blogData.blogTitle}>
            <Modal.Body>{BlogPages[blogName] || BlogPages.DefaultBlog}</Modal.Body>
        </Modal>
    )
}

export default BlogPage