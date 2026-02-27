import React, { useState } from 'react';
import type { BookPost } from '../../shared/types/book.model';
import Book from '../../shared/components/book/book';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Home: React.FC = () => {
  const [serachInput, setSearchInput] = useState<string>('');

  const [books] = useState<BookPost[]>([
    {
      id: '123',
      title: 'harry potter',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid1',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
    {
      id: '1234',
      title: 'harry potter 2',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid2',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
    {
      id: '3',
      title: 'harry potter3',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid2',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
    {
      id: '4',
      title: 'harry potter4',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid4',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
    {
      id: '5',
      title: 'harry potter5',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid1',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
    {
      id: '6',
      title: 'harry potter6',
      author: 'j k rolling',
      price: 89,
      imageUrl: '/src/assets/harrypotter1.jpg',
      sellerId: 'usrid1',
      description: 'harry potter book good condition',
      summery: 'book summery',
      comments: [],
    },
  ]);

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
