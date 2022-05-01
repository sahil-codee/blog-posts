import React, { useEffect, useState } from 'react'
import Posts from './Posts'
import { Row, Col, Container } from 'react-bootstrap';
import Pagination from './Pagination';

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.log(error))

    }, [])

    // console.log(blogs);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)


    // Change Page //
    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div>
            <Container fluid className=''>
                <Container>
                    <Row>
                        <Col>
                            <Posts blogs={currentPosts}/>
                            <Pagination
                                postsPerPage={postsPerPage}
                                totalPosts={blogs.length}
                                paginate={paginate}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>

    )
}

export default Blog