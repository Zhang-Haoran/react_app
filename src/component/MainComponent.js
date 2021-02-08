import React, {Component} from 'react';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import Header from "./HeaderComponent";
import {Redirect, Route, Switch} from "react-router-dom";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import DishDetail from "./DishDetailComponent";
import Contact from "./ContactComponent";

class Main extends Component{
    constructor(props) {
        super(props);
        //从shared folder里获取数据存储状态
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }

    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    {/*Home Page*/}
                    <Route path="/home" component=
                        {()=>
                            <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                                  promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
                                  leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                            />
                        }/>

                    {/*Menu Page*/}
                    <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/>}/>
                    {/*DishDetail page*/}
                    <Route path="/menu/:dishId" component=
                        {({match})=>
                            <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                                        comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
                            />
                        }/>
                    {/*contact us Page*/}
                    <Route path="/contactus" component={Contact}/>
                    {/*the rest direct to home*/}
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }

}
export default Main;