import React from 'react';
//import pict from '../asset/hacktiv8.jpg'
import {Button,Card, Row, Col } from 'react-bootstrap';

function HomeworkContent1() {
  return (
    <div className="row justify-content-center">
            <div className="row mt-4 col-11">               
                <Row>
                    <Col md="{12}">
                        <Card className="border-0 rounded shadow-sm">
                            <Card.Body className="p-4">
                                <Row>
                                    <Col className="col-auto">
                                        <div className="bg-large">
                                        <img
                                            src={"hacktiv8.jpg"}
                                            alt="hacktiv8-logo"
                                            width="100"
                                            height = "100"
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
                                        <button className="btn btn-secondary mt-3 col-sm">
                                            Join Us
                                        </button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>
    </div>
  );
}

export default HomeworkContent1;