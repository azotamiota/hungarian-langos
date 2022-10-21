import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Footer, Navbar} from '../../common'
import {basketVisibility} from '../../../actions'

function MainLayout() {
  const dispatch = useDispatch()
  const isBasketVisible = useSelector(store => store.isBasketVisible)
  return (
    <>
      <Navbar />
      <div onClick={() => dispatch(basketVisibility(false))}>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default MainLayout