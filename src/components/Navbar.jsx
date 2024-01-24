import styled from "styled-components";
import './BurguerStyle.css'
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <NavContainer>
                <h2>Navbar <span>Responsive</span></h2>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <a onClick={() => {setClicked(false)}} href="/">Home</a>
                    <a onClick={() => {setClicked(false)}} href="/">Shop</a>
                    <a onClick={() => {setClicked(false)}} href="/">About</a>
                    <a onClick={() => {setClicked(false)}} href="/">Contact</a>
                    <a onClick={() => {setClicked(false)}} href="/">Blog</a>
                </div>
                <div className="burger">
                    <Hamburger color="#FFF" rounded onToggle={toggled => {
                        if (toggled) {
                            setClicked(true)
                        } else {
                            setClicked(false)
                        }
                }}  />
                </div>
                <div className={`initial ${clicked ? 'active' : ''}`}></div>
            </NavContainer>
        </>
    )
}

export default Navbar;

const NavContainer = styled.nav`
 h2{
    color: #FFF;
    font-weight: 400;
    span{
        font-weight: bold;
    }
 }
 padding: .4rem;
 background-color: #333;
 display: flex;
 align-items: center;
 justify-content: space-between;
 a{
    color: #FFF;
    text-decoration: none;
    margin-right: 1rem;
 }
`