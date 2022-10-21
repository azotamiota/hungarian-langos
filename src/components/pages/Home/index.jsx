import React from 'react'
import {Hero , Location, Separator} from '../../../components/common'
import Products from "../../layouts/Products";


function index() {
  return (
    <>
      <Hero />
      <Separator />
      <Products />
      <Location />
    </>
  )
}

export default index