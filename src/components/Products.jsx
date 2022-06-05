import React,{useState,useEffect} from "react";
import {Link,Outlet} from 'react-router-dom';
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
    return(
        <div>
            <div style={{margin:"auto",marginTop:"30px",marginBottom:"30px"}}><h2>Products</h2>
                <div style={{margin:"auto",textAlign:"center",marginLeft:"38%"}}>
                    <table style={{border:"1px solid red"}}>
                        
                            <tr>
                                <th>Name</th><th>Price</th><th>More Details</th>
                            </tr>
                      
            {products.map((item)=>(
              <tr>
                   <td>{item.name}</td><td>{item.price}</td> <td><Link to={`/products/${item.id}`}>More Details</Link></td>  </tr>
                ))}
               
                </table>
                </div>
               <div style={{marginTop:"30px"}}>
                <Outlet/>
                </div>
                </div>
        </div>
    );
};