import React from 'react'
import { useState,useEffect } from 'react'
import Loading from './Loading'

const Tour = () => {
    const [loading,setLoading]=useState('true')

{loading && <Loading/>}
return(
    <>
    <h1>Hello</h1>
    </>
)
}

export default Tour
