//@flow

import React from 'react';
import { Card, CardBody, CardHeader, Input, Button, Label } from 'reactstrap';
import './styles.scss';

class SecondPage extends React.Component{
    constructor(props: Props)
    {
        super(props);

    }
    render(){
        return (
        <Card className='card_left'>
            <CardHeader className="left_header">
                <h1>Siddhant Brij Sinha</h1><span className='left_header_span'>|</span>
                <p>Details About Him will be Shared</p>
            </CardHeader>
            <CardBody className='left_body'>
                <hr></hr>
                <Label for="card_input" className='input_label'>Enter Any Number</Label>
                <Input type="text" id="card_input" className="left_input"></Input>
            </CardBody>
        </Card>
        );
    }
}
export default SecondPage;