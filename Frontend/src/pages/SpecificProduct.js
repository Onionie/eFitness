import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
} from 'react-bootstrap';
//import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from '../actions/productActions';

import './pages.css';

const SpecificProduct = () => {
  const [qty, setQty] = useState(1);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params.id]);

  const addToCartHandler = () => {
    // Redirects us to /cart/${product.id}/${andQuantity}
    // The cart page will then take further action
    navigate(`/cart/${params.id}?qty=${qty}`);
  };

  return (
    <Container>
      <Link className="btn btn-dark my-3" to={`/${product.category}`}>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row className="top">
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                ></Rating>
              </ListGroup.Item> */}
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          // when there's an event change in our dropdown qty
                          // setQty state to the target value
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {/* Gets the number of products in stock and creates
                        a list of array [0,1,2,3,4] and lists it out */}
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="btn-block btn btn-dark"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SpecificProduct;
