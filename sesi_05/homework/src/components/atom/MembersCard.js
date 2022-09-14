import React from 'react';
import {Card, Row, Col} from 'react-bootstrap';
import MembersContent from './MembersContent';

const MemberCard = () => {
  return (
    <div className="row justify-content-center">
      <div className="row mt-4 col-11">
        <div>
          <h5>Members</h5>
        </div>

        <div className="row mt-2">
          <Row>
            <Col md="{12}">
              <Card className="border-0 rounded shadow-sm">
                <MembersContent />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
