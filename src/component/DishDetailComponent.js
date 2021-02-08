import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

class DishDetail extends Component{
    constructor(props) {
        super(props);

    }

    renderComments(comments){
        let commentResponse = "";
        if(comments != null){
            commentResponse = comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-AU',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                )
            })
        }

        if(comments != null){
            return(
                <div>
                    <h4>Comments</h4>
                    {commentResponse}
                </div>
            )
        }else {
            return (
                <div/>
            )
        }

    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.comment}/>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }else {
            return(
                <div/>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div>
                            {this.renderComments(this.props.comments)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default DishDetail;