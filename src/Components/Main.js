import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'
export const Main = () =>{
    const [url]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2d2373c73fc966fcce10e5cbe510cd8&hash=4b5dc4489764b1e2ba104ecf0e073651")
    const [item,setItem]=useState();
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results)
        }
        fetch();
    },[url])
    return(
        <>

            <div className='header'>
                <div className='bg'>
                    <img src='./Images/marvel.png' alt=''/>
                </div>
                <div className='search-bar'>
                    <img src='./Images/logo.jpg' alt='logo'/>
                    <input type="search" placeholder='search Here' className='search'/>
                </div>
            </div>
            <div className='content'>
                <Card/>
                {
                    (!item) ?<p>Not Found</p> : <Card data = {item}/>
                }
            </div>

        </>

    )
}