import React,{useState,useEffect} from 'react';
import "./Cook.css";
import OrderCardforChef from "../components/OrderCardforChef";
import axios from 'axios';
import io from 'socket.io-client';

function Cook(){
  const [orders,setOrders]=useState([]);
  const socket=io('http://localhost:3002');

  function bringOrders(){
    axios.get('http://localhost:3002/api/forCook').then(res=>{
      setOrders(res.data.order);    
    });
  }

  useEffect(()=>{ //첫 마운트때 딱 한번
    socket.on('aboutOrder',(data)=>{
      window.location.reload();
    })
    socket.on('aboutCook',(data)=>{
      window.location.reload();
    })
    bringOrders();
    return ()=>{
      socket.off('aboutOrder');
      socket.off('aboutCook');
    }
  },[]);
    return(
        <div id="cookPage">
          <div id="cookTitle">
            <b>주문목록 </b>
          </div>
           <div id="cookContent">
             {orders.map(order=>(
               <OrderCardforChef key={Math.random()} orderId={order.orderId} orderTime={order.receiveTime}></OrderCardforChef>
             ))}
           </div>
        </div>
    );

}

export default Cook;