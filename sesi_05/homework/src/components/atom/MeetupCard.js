import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import MeetupContent from "./MeetupContent";
import MeetupButton from "./MeetupButton";

const MeetupCard = () => {
  return (
    <div className="row justify-content-center">
      <div className="row mt-4 col-11">
        <Row>
          <Col md="{12}">
            <Card className="border-0 rounded shadow-sm">
              <Card.Body className="p-4">
                <MeetupContent />
                <MeetupButton />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MeetupCard;
