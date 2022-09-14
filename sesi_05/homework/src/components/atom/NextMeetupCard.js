import React from "react";
import Card from "react-bootstrap/Card";
import NextMeetUpContent from "./NextMeetupContent";


const NextMeetUpCard = () => {
  return (
    <div className="row justify-content-center">
            <div className="row mt-4 col-11">
                <div>
                    <h5>Next Meetup</h5>
                </div>

                <div className="row mt-2 col md-12">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body className="p-4">
                            <NextMeetUpContent />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
  );
};

export default NextMeetUpCard;