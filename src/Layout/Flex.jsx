import React from 'react'
import style from './Flex.module.css'

const Flex = ({children}) => {
  return (
    <section className={style["flex"]}>{children}</section>
  )
}

export default Flex