import React from "react";
import { Row, Col } from 'react-bootstrap';

const MeetupContent = () => {
  return (
    <>
      <Row>
        <Col className="col-auto">
          <div className="bg-large">
            <img
              src={"hacktiv8.jpg"}
              alt="hacktiv8-logo"
              width="100"
              height="100"
            />
          </div>
        </Col>
        <Col className="m-0 mx-auto">
          <h3>Hacktiv8 MeetUp</h3>
          <div className="lead text-meet">
            <Row>
              <Col className="col-2">Location</Col>
              <Col className="col-7">Jakarta, Indonesia</Col>
            </Row>
            <Row>
              <Col className="col-2">Members</Col>
              <Col className="col-7">1,078</Col>
            </Row>
            <Row>
              <Col className="col-2">Organizers</Col>
              <Col className="col-7">Adhy Wiranata</Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MeetupContent;
