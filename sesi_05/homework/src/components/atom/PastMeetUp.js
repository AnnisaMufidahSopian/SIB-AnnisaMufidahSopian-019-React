import React from 'react';
import {Button, Card} from 'react-bootstrap';

function HomeworkContent5() {
  return (
    <div className="row justify-content-center">
        <div className="row mt-4 col-11">
            <div>
                <h5>Past Meetups</h5>
            </div>

            <div className="row mt-2 mb-4">
                <div className = "col-md">
                    <Card>
                    <Card.Header>27 November 2017</Card.Header>
                    <Card.Body>
                        <Card.Title>#39 JakartaJS April Meetup with Kumparan</Card.Title>
                        <Card.Text>
                            <strong>113</strong> went
                        </Card.Text>
                        <Button variant="secondary">view</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div className = "col-md">
                    <Card>
                    <Card.Header>27 October 2017</Card.Header>
                    <Card.Body>
                        <Card.Title>#38 JakartaJS April Meetup with Tokopedia</Card.Title>
                        <Card.Text>
                            <strong>113</strong> went
                        </Card.Text>
                        <Button variant="secondary">view</Button>
                    </Card.Body>
                    </Card>
                </div>

                <div className = "col-md">
                    <Card>
                    <Card.Header>27 September 2017</Card.Header>
                    <Card.Body>
                        <Card.Title>#37 JakartaJS April Meetup with Hacktiv8</Card.Title>
                        <Card.Text>
                           <strong>110</strong> went
                        </Card.Text>
                        <Button variant="secondary">view</Button>
                    </Card.Body>
                    </Card>
                </div>
        </div>

            
        </div>
    </div>
  );
}

export default HomeworkContent5;