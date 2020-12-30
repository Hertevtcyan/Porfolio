import React from 'react'
import '../Assests/navbar.scss'
import { NavLink } from 'react-router-dom'

export default ()=>{
    return(
        <div>
            <nav className = {'nav_bar'}>
                <ul>
                    <li>
                        <NavLink className = {'nav_link'} exact to = {'/'}><span>Home</span></NavLink>
                    </li>

                    <li>
                        <NavLink className = {'nav_link'} to = {'/about'}><span>About Me</span></NavLink>
                    </li>

                    <li>
                        <NavLink className = {'nav_link'} to = {'/profession'}><span>Portfolio</span></NavLink>
                    </li>

                    <li>
                        <NavLink className = {'nav_link'} to = {'/hobby'}><span>Contact</span></NavLink>
                    </li>
                </ul>
            </nav>
            <h1 className = {'h1_below'}>©2020 Alik Hertevtcyan</h1>
            <h4 className = {'h4_below'}>aleqsan.hertevtcyan.99@mail.ru</h4>
        </div>
    )
}