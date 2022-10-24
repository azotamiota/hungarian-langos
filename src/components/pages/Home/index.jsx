import React from 'react'
import {Hero , Location, OpeningHours, Separator} from '../../../components/common'
import Products from "../../layouts/Products";


function index() {
  return (
    <>
      <Hero />
      <Separator />
      <Products />
      <Location />
      <OpeningHours />
    </>
  )
}

export default index