import React,{useState} from 'react';
import orderj from "../testApi/orders.json";
import "./Cook.css";
import OrderCardforChef from "../components/OrderCardforChef";

function Cook(){
  const [orders,setOrders]=useState(orderj.orders);

    return(
        <div id="cookPage">
           <div id="cookContent">
             {orders.map(order=>(
               <OrderCardforChef key={Math.random()} orderNum={order.orderNum} foods={order.foods} type={order.type}></OrderCardforChef>
             ))}
           </div>
        </div>
    );

}

export default Cook;