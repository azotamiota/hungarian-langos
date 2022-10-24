import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Footer, Navbar} from '../../common'
import {basketVisibility} from '../../../actions'

function MainLayout() {
  const dispatch = useDispatch()

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