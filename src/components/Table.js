import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import TestFoods from "../testApi/foods.json";
import "./Table.css";
import { date } from 'yup';

const Table=({tableName})=>{
    const testFoods=TestFoods;
    const [show,setShow]=useState(false);
    const [pickFoods,setpickFoods]=useState([]);
    const [totalPrice,setPrice]=useState(0);
    const [readyTime,setready]=useState(0);
    const [spendTime,setSpend]=useState(Date.now());
    const [isorder,setIsorder]=useState(false);
    
    function handleHide(){setShow(false);};
    function handleShow(){setShow(true);};
    function resetOrder(){setpickFoods([]); setPrice(0);}
    return(
        <span>
         <Button id="tableBtn" size="lg" onClick={handleShow}>{tableName}</Button>

         <Modal size="lg" show={show} onHide={handleHide}>
         <Modal.Header closeButton>
         <Modal.Title><b>{tableName}</b></Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <div className="selectedFoods" style={{float:"left",width:"45%",border:"2px solid",borderRadius:"10px",flex:"1"}}>
           <h2 style={{textAlign:"center"}}>Ordered List</h2>
           <div>
              {pickFoods.map(food=>(
                  <div key={food.id} style={{textAlign:"center"}}>
                  <label>{food.name} / {food.price}원</label><br></br>
                  </div>
              ))}
           </div>
              <div id="total" style={{textAlign:"center",float:"bottom"}}>
                  <b>합계: {totalPrice}원</b>
             </div>
         </div>
         <div className="servingFoods" style={{float:"right",width:"50%",border:"2px solid",borderRadius:"10px"}}>
             <h2 style={{textAlign:"center"}}>Foods</h2>
             <div style={{margin:"8px",textAlign:"center"}}>
             {testFoods.foods.map(food=>(
                 <button key={food.id} style={{backgroundColor:"white",border:"1px solid #C6C6C6"}} onClick={()=>{
                    console.log(pickFoods);
                     setpickFoods(pickFoods.concat({
                         id:food.id,
                         name:food.name,
                         price:food.price
                     }));
                    setPrice(totalPrice+food.price);
                 }}>
                 <img id="foodImg" src={food.foodImgs[0]} alt={food.id}></img><br></br>
                 <b>{food.name}</b><br></br><label>{food.price}원</label>
                 </button>
             ))}
             </div>
         </div>
        </Modal.Body>

        <Modal.Footer>
       <Button variant="secondary" onClick={()=>{resetOrder();handleHide();}}>cancle</Button>
       {isorder?(<></>):(<Button variant="primary" onClick={()=>{
           setSpend(Date.now());
           setIsorder(true);
       }}>Order Complete</Button>)}
       {isorder?(<Button variant="danger" onClick={()=>{
           console.log("고객이 머무른 시간:",(Date.now()-spendTime)/1000,"초");
           setpickFoods([]);
           setPrice(0);
       }}>Pay</Button>):(<></>)}
        </Modal.Footer>
       </Modal>          
          
        </span>
    );
}

export default Table;