import React, { Component } from 'react';
import {render} from 'react-dom'
import './css/style.css';
import './css/assets/css/font-awesome.css';
import Basket from './bask';
import MenuItem from './menItem';
import chiken from './image/chiken.jpg';
import meatinThai from './image/meatinThai.jpg';
import pasta from './image/pasta.jpg';
import briol from './image/briol.jpg';
import ratat from './image/ratat.png';
import food from './image/food.jpg';
import redwine from './image/redwine.jpg';

class Menu extends Component {
    constructor(props){
    super(props);
    this.state = {
          dishItems: [{id: 0, name: "Chicken", image: chiken, price: 2500},
              {id: 1, name: "Pasta",  image: pasta, price: 1600},
              {id: 2, name: "meat in Thai", image: meatinThai, price: 2200},
              {id: 3, name: "Briol", image: briol, price: 1150}
            ],
        isNewdishAdded: false
    }
    this.onAddToBasketClicked = this.onAddToBasketClicked.bind(this);
};

onAddToBasketClicked(curdish) {
    if(curdish !== undefined) {
        this.setState({isNewdishAdded: true});
        var dishInBasket = this.state.dishInBasket;
        var toAdddish = curdish.id, isdishExists = false;
        
        for(var curP = 0; curP < this.state.dishInBasket.length; curP++) {
            if(this.state.dishInBasket[curP].id === toAdddish) {
                isdishExists = true;
                break;
            }
        }
        if(isdishExists === false) {
            dishInBasket.push({id: curdish.id, name: curdish.name, image: curdish.image, price: curdish.price, 
                count: 1});
            function filterdish(dish) {
                return dish.id !== 'noId';
            }
            var basket = dishInBasket.filter(filterdish);
            this.setState({
                dishInBasket: basket
            });
        }	
    }
}
renderBasketComponent() {
    if(this.state.isNewdishAdded) {
        return(
            this.state.dishInBasket.map((basketPiz) => {
                return<Basket id={basketPiz.id}
                              name={basketPiz.name}
                              image={basketPiz.image}
                              price={basketPiz.price}
                              count={basketPiz.count}
                              removedish={this.removedish}
                              incAmount={this.incAmount}
                              decAmount={this.decAmount} />
            })						
        );
    }
}
removedish = (dishId) => {
    this.setState({ dishInBasket: this.state.dishInBasket.filter((tekPiz) => tekPiz.id !== dishId) });
}
incAmount = (dishId) => {
    var newdishCount = this.state.dishInBasket;
    for(var curP = 0; curP < this.state.dishInBasket.length; curP++) {
        if(this.state.dishInBasket[curP].id === dishId) {
            this.state.dishInBasket[curP].count++;
            newdishCount = this.state.dishInBasket;
        }
    }
    this.setState({dishInBasket: newdishCount});
}
decAmount = (dishId) => {
    var newdishCount = this.state.dishInBasket;
    for(var curP = 0; curP < this.state.dishInBasket.length; curP++) {
        if(this.state.dishInBasket[curP].id === dishId) {
            if(this.state.dishInBasket[curP].count > 1) {
                this.state.dishInBasket[curP].count--;
                newdishCount = this.state.dishInBasket;
            }
        }
    }
    this.setState({dishInBasket: newdishCount});
}


  render() {
    let dishItems = this.state.dishItems.map((dish) => {
        return <dishItems dish={dish} key={dish.id} id={dish.id} onAddToBasketClicked={this.onAddToBasketClicked}/>
    })
    return (
        <div>
        <img className='pic-in-menu' src={redwine}/>
        <div className="row-menu">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                             Menu
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                    <thead className='menutit'>
                                        <tr className='menutitle'>
                                            <th>Dish</th>
                                            <th>Price</th>
                                            <th>Image</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="menulist">
                                            <td>Chicken</td>
                                            <td>2200</td>
                                            <td className='pic-and'><img className='menupic' src={chiken}/>
                                            <button className='assem btn btn-primary-delete' onClick='onAddToBasketClicked'> add </button></td>
                                        </tr>
                                        <tr className="menulist">
                                            <td>Pasta</td>
                                            <td>1700</td>
                                            <td><img className='menupic ' src={pasta}/>
                                            <button className='assem btn btn-primary-delete'> add </button></td>
                                        </tr>
                                        <tr className="menulist">
                                            <td>Briol</td>
                                            <td>1300</td>
                                            <td><img className='menupic' src={briol}/>
                                            <button className='assem btn btn-primary-delete'> add </button></td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
                <div>{dishItems}</div>
           </div>
    );
}
}
export default Menu;














