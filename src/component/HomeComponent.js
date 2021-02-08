import React,{Component} from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

function RenderCard({item}){
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>
                    {item.name}
                </CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

class Home extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.props.dish}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.props.promotion}/>
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={this.props.leader}/>
                    </div>
                </div>

            </div>
        );
    }

}
export default Home;