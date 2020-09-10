import React, {Component} from "react";
import {Button,Card} from 'react-bootstrap';
import TestFoods from "../testApi/foods.json";
import "./AboutMenu.css";

class AboutMenu extends Component{
   state={
     foods:TestFoods.foods
   };

   render(){
       return(
           <div id="menuPage">
             <br></br>
             <h1 style={{textAlign:"center"}}>Menus</h1>
             <div id="menus" style={{margin:"20px", textAlign:"center"}}>
              {this.state.foods.map(food=>(
                  <span key={food.id} style={{margin:"20px", width:"250px", display:"inline-block",border:"2px solid #C6C6C6", borderRadius:"10px"}}>
                      <img src={food.foodImgs} alt={food.id} style={{width:"200px",height:"200px"}}></img><br></br>
                      <b>{food.name}</b> <br></br>
                      {food.price}원 <br></br>
                      누적판매량: {food.hotpoint} <br></br>
                      누적매출액: {food.ownSales} 
                  </span>
              ))}
              <Button variant="info">메뉴 추가</Button>
             </div>
           </div>
       );
   }
}

export default AboutMenu;