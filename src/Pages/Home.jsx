import React,{useContext} from 'react'
import Navigation from '../components/Navigation/Navigation'
import Flex from '../Layout/Flex'
import Products from '../components/Products/Products'
import Items from '../components/Items/Items'
import { Context } from '../store/Store'
const Home = () => {
  return (
   <>
     <Navigation />
      <Flex>
          <Products />
          <Items />
      </Flex>
   </>
  )
}

export default Home