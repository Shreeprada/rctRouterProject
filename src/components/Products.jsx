import React,{useState,useEffect} from "react";
import {Link,Outlet,Navigate,useNavigate} from 'react-router-dom';
import { Product } from "./Product";
export const Products=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const list=async ()=>{
            let r=await fetch("http://localhost:8080/products");
            let d=await r.json();
            // console.log(d);
            setProducts(d);
        };
        list();
    },[]);
    const navigate=useNavigate();
    const productpage=(id)=>{
        console.log(id);
        navigate(`/products/${id}`);
    }
    return(
        <div>
           <h2>Products</h2>
           <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
         {products.map((item)=>(
            <div style={{borderRadius:"5px",border:"1px solid grey",cursor:"pointer"}} onClick={()=>productpage(item.id)}>   
                <img src={item.image} style={{width:"100%",height:"60%"}}/>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                
            </div>
                ))}
             </div>  
               
               <div style={{marginTop:"30px",border:"1px solid pink"}}>
                <Outlet/>
                </div>
               
        </div>
    );
};