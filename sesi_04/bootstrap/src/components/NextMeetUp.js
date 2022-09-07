import React from 'react';
import Card from 'react-bootstrap/Card';

function HomeworkContent2() {
    return (
        <div className="row justify-content-center">
            <div className="row mt-4 col-11">
                <div>
                    <h5>Next Meetup</h5>
                </div>

                <div className="row mt-2 col md-12">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <Card.Title>Halo, Sobat Kode!</Card.Title>
                            <Card.Text>
                                Get ready for our monthly meetup Jakarta and Bandung JS
                                <br />
                                The meetup format will contain some short stories and technical talks
                                <br />
                                If you have a short announcement you d like to share with the audience, you may do so during open mic announcements
                                <br />
                                <br />
                                Remember to bring a photo ID to get through building security
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
      );
    }

export default HomeworkContent2;