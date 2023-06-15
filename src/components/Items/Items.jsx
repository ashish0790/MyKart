import React,{useContext, useEffect, useState} from 'react'
import { Context } from '../../store/Store'
import style from './Items.module.css'
const Items = () => {
    const ctx = useContext(Context)

    const [totalItems,setTotalItems] = useState(0)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(function(){
        console.log(ctx.products)
        if(ctx.products.length > 0){
            setTotalItems((ctx.products.map(product=>product.quantity).reduce(function(prev,current){
                return prev+current
            })))

            setTotalPrice((ctx.products.map(product=>product.price).reduce(function(prev,current){
                return prev+current
            })))
        } 
        

       
    },[ctx.products])
  return (
    <div className={style["checkout_wrapper"]}>
        <h2>Item Status</h2>
        <p>Total Items : {totalItems} , Price : {totalPrice}</p>
    </div>
  )
}

export default Items