import React from 'react'
import { Card } from './Card'
export const Main = () =>{
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
            </div>

        </>

    )
}