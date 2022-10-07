import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import axios from 'axios'
export const Main = () =>{
    const [url]=useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a")
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