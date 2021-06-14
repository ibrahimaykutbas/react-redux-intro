import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2>
                <Button
                  outline
                  color="primary"
                  onClick={(e) => {
                    this.props.dispatch(increaseCounter());
                  }}
                >
                  1 Arttır
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
  return { action: bindActionCreators(increaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseCounter);
