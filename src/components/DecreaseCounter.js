import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { decreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>
                <Button
                  outline
                  color="danger"
                  onClick={(e) => {
                    this.props.dispatch(decreaseCounter());
                  }}
                >
                  1 Azalt
                </Button>
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
