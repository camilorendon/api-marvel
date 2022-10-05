import React from 'react'

export const Main = () =>{
    return(
        <div className='header'>
            <div className='bg'>
                <img src='./Images/bg.png' alt=''/>
            </div>
            <div className='search-bar'>
                <img src='./Images/logo-marvel.png' alt='logo'/>
                <input type="search" placeholder='search Here' className='search'/>
            </div>
        </div>
    )
}