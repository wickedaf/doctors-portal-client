import React from 'react';
import BlogDetail from '../BlogDetail/BlogDetail';

const Blog = () => {
    const blogData = [
        {
            title: 'Lorem ipsum, dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero quas fugiat vel minus quasi voluptatem dolore, natus doloribus vitae eaque suscipit voluptas similique, repudiandae a sit saepe esse velit',
            name: 'Dr. Caudi',
            date: '23 April 2020',
            img: '/images/client-(1).png'
        },
        {
            title: 'Lorem ipsum, dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero quas fugiat vel minus quasi voluptatem dolore, natus doloribus vitae eaque suscipit voluptas similique, repudiandae a sit saepe esse velit',
            name: 'Dr. Caudi',
            date: '23 April 2020',
            img: '/images/client-(2).png'
        },
        {
            title: 'Lorem ipsum, dolor sit amet',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta libero quas fugiat vel minus quasi voluptatem dolore, natus doloribus vitae eaque suscipit voluptas similique, repudiandae a sit saepe esse velit',
            name: 'Dr. Caudi',
            date: '23 April 2020',
            img: '/images/client-(3).png'
        }
    ]
    return (
        <section className="container my-5 py-5">
            <div className="text-center pb-3">
                <h5 className="color-primary">OUR BLOG</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row justify-content-center mt-5">
                {
                    blogData.map(blog => <BlogDetail blog={blog}></BlogDetail>)
                }
            </div>
        </section>
    );
};

export default Blog;