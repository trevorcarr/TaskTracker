import React from 'react'
import Button from './Button'

const Header = () => {

    const onClick = () => {
        console.log('CLICKs')    
    }

    return (
        <header className='header'>
            <h1>Task Trackers</h1>
            <Button color='steelblue' text='Add' onClick={onClick} />
        </header>
    )
}


export default Header
