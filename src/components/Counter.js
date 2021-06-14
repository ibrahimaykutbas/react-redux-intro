import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

class Counter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>Counter: {this.props.counter}</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProst(state) {
  return { counter: state.counterReducer };
}

export default connect(mapStateToProst)(Counter);
