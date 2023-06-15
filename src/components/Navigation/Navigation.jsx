import React from 'react'
import style from './Navigation.module.css'
import { NavLink as Link } from 'react-router-dom'
import {HiOutlineHome,HiShoppingCart, HiBuildingOffice2} from 'react-icons/hi2'
const Navigation = () => {
  return (
    <nav className={style['nav']}>
    <h2 className={style["title"]}>My Kart</h2>
      <ul className={style["nav__menu"]}>
        <li><Link to={'/'} className={({isActive})=> isActive ?  `${style["nav__menu_link"]} ${style["active"]}` : style["nav__menu_link"]}><HiOutlineHome />Home</Link></li>
        <li><Link to={'/checkout'} className={({isActive})=> isActive ?  `${style["nav__menu_link"]} ${style["active"]}` : style["nav__menu_link"]}><HiShoppingCart /> Checkout</Link></li>
        <li><Link to={'/officedevices'} className={({isActive})=> isActive ?  `${style["nav__menu_link"]} ${style["active"]}` : style["nav__menu_link"]}><HiBuildingOffice2 /> Office Devices</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation