import React from 'react'
import axios from 'axios';

import {useEffect, useState} from "react";

function Products() {

const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect (()=> {
  axios.get("https://ec-course-api.hexschool.io/v2/api/hex-project/products/all")
  .then((response)=> {
    console.log(response.data.products);
    // setProducts(response.data.products);
    // setLoading(false);
  })
  .catch((error)=> {
    console.error("error fetching products");
  //   setLoading(false);
   })
})



  return (
    <div>
      I'm products



    </div>
  )
}

export default Products
