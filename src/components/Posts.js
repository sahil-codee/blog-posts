import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";

function Posts({ blogs }) {
    const [searchInput, setSearchInput] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== "") {
            const filteredData = blogs.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(blogs);
        }
    };

    return (
        <Container fluid>
                    <input className="search-bar"
                        type="text"
                        value={searchInput}
                        placeholder="Search....."
                        onChange={(e) => searchItems(e.target.value)}
                    ></input>
            <Container>
                <Row>
                    {searchInput.length > 1
                        ? filteredResults.map((posts) => {
                            return (
                                <Card
                                    key={posts.id}
                                    style={{
                                        width: "18rem",
                                        color: "black",
                                        borderRadius: "10px",
                                        margin: "25px",
                                    }}
                                >
                                    <Card.Body>
                                        <p>{posts.id}</p>
                                        <Card.Title>{posts.title}</Card.Title>
                                        <Card.Text>{posts.body}</Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })
                        : blogs.map((posts) => {
                            return (
                                <Card
                                    key={posts.id}
                                    style={{
                                        width: "18rem",
                                        color: "black",
                                        borderRadius: "10px",
                                        margin: "25px",
                                    }}
                                >
                                    <Card.Body>
                                        <p>{posts.id}</p>
                                        <Card.Title>{posts.title}</Card.Title>
                                        <Card.Text>{posts.body}</Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                </Row>
            </Container>
        </Container>
    );
}

export default Posts;
