import React, { useState,useContext } from 'react'
import {HiCurrencyDollar} from 'react-icons/hi2'
import { Context } from '../../store/Store'
import style from './Cards.module.css'
const Cards = ({id,title,description,quantity,amount}) => {
    const [quan,setQuan] = useState(0)
    const [price,setPrice] = useState(amount)
    const ctx = useContext(Context)


    const descreaseQuantity = function(e){
        e.preventDefault()
        if(quan <= quantity && quan > 0){
            setQuan(quan-1)
            ctx.decreaseQuantity(id,amount)
        }

        else{
            alert("Quantity should not negative")
        }
    }
    const increaseQuantity = function(e){
        e.preventDefault()
        if(quan >=0 && quan < quantity){
            setPrice(amount)
            if(quan < 1){
                ctx.addProduct({
                    id:id,
                    quantity:quan+1,
                    price : price
                })
            }

            else{
                setPrice(quan*price)
                ctx.increaseQuantity(id,quantity,amount)
            }
            
            setQuan(quan+1)
        }

        else{
            alert(`Only ${quantity} available of product ${title}`)
        }
    }


  return (
    <div className={style["card"]}>
        <div className={style["header"]}>
            <p>{title}</p>
        </div>

        <div className={style["body"]}>
            <p className={style["description"]}>{description}</p>

            <div className={style["qp_wrapper"]}>
                <p>Quantity : {quantity}</p>
                <p><HiCurrencyDollar style={{fontSize:"1.2rem"}}/> {amount}</p>
            </div>
        </div>

        <div className={style["action_wrapper"]}>
            <button type='button' className={style["btn"]} onClick={descreaseQuantity}>-</button>
            <p>{quan}</p>
            <button type='button' className={style["btn"]} onClick={increaseQuantity}>+</button>
        </div>
    </div>
  )
}

export default Cards