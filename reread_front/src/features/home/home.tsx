import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Book from '../../shared/components/book/book';
import type { BookPost } from '../../shared/types/book.model';
import { mockBooks } from './utils/mockbooks';

const Home: React.FC = () => {
  const [serachInput, setSearchInput] = useState<string>('');

  const [books] = useState<BookPost[]>(mockBooks);

  const filteredBooks = books.filter((book) => {
    const searchText = serachInput.toLowerCase();
    return (
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center mb-5">
          <Col md={6}>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search by book or author..."
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </Col>
        </Row>

        <Row xs={1} md={2} lg={4} className="g-4">
          {filteredBooks.map((book) => (
            <Col key={book.id}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
