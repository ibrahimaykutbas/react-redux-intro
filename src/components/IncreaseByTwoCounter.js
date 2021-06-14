import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>
                <Button
                  outline
                  color="info"
                  onClick={(e) => {
                    this.props.dispatch(increaseByTwoCounter());
                  }}
                >
                  2 Arttır
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
  return { action: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
