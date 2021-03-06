import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  Container,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';

import './pages.css';

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //caculate price
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  //shipping price

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);

  //tax price
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));

  // total price
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  // get state of orderCreate
  const orderCreate = useSelector((state) => state.orderCreate);

  // destructure
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
    }
  }, [dispatch, navigate, success, order]);

  // When user proceeds to Place Order
  // dispatch createOrder Action and send this data for payload
  const placeholderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <Container>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row className="top">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {/* prettier-ignore */}
                {cart.shippingAddress.address}, {cart.shippingAddress.city},{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method : </strong>
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/${item.category}/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger"> {error} </Message>}
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn btn-block btn-dark"
                  disabled={cart.cartItems.length === 0}
                  onClick={placeholderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
