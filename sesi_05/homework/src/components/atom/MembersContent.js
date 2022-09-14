import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const MemberContent = () => {
  return (
    <>
      <Card.Body className="p-4">
        <Row>
          <Col className="col-auto">
            <div className="bg-large">
              <img src="icon.png" alt="icon-logo" width="100" height="100" />
            </div>
          </Col>
          <Col className="m-0 mx-auto">
            <Row>
              <Col className="col-2">Organizers</Col>
            </Row>
            <Row className="row mt-3">
              <Col className="col-4">Annisa Mufidah Sopian</Col>
              <Col className="col-7">2 others</Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </>
  );
};

export default MemberContent;
