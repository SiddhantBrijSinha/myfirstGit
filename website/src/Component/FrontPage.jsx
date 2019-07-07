import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

class FrontPage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return <div>
        <InputGroup>
        <InputGroupAddon addonType='prepend'>@Sid</InputGroupAddon>
        <Input placeholder="Testing"/>
        </InputGroup>
        </div>
    }
}
export default FrontPage;