import React,{Component} from "react";
import {Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

class Menu extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>Menu</h3>
                    </div>
                    {/*获取menu信息，diplay*/}
                        <div className="row">
                            {this.props.dishes.map((dish)=>{
                                return(
                                    <div key={dish.id} className="col-12 col-md-5 m-1">

                                        <Card>
                                            <Link to={`/menu/${dish.id}`}>
                                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                                            <CardImgOverlay>
                                                <CardTitle>{dish.name}</CardTitle>
                                            </CardImgOverlay>
                                            </Link>
                                        </Card>

                                    </div>
                                )
                            })}
                        </div>
                </div>
            </div>
        );
    }

}
export default Menu;