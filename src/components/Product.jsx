import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
export const Product=()=>{
    const [product,setProduct]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        if(id){
            // console.log("id",id);
            fetch(`http://localhost:8080/products/${id}`)
            .then((r)=>r.json())
            .then((d)=>setProduct(d))
            .catch((error)=>{console.log(error)});
            
        }
    },[id]);
    return (
        <div>
            {Object.keys(product).length === 0 ?<h3>Product does not exist</h3>:
            <div>
           <h3> Product Detail:</h3>
           <p> id :{product.id} </p>
           <p>Name :{product.name}</p> 
           <p>Price :{product.price}</p>
           </div>
        }
        </div>
    );
};