import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
    return (  
        <StyledNav>
            <Logo>
                <img src={logo} alt="Ignite Logo"/>
                <h1>IGNITE</h1>
            </Logo>
            <div className="search">
                <input type="text"/>
                <button>Search</button>
            </div>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        font-size: 1rem;
        padding: 0.5rem;
        border: none;
        margin-top: 0.5rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        border-radius: 10px;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        outline: none;
        font-weight: bold;
        font-family: inherit;
    }

    button{
        font-size: 1rem;
        border: none;
        padding: 0.5rem 1rem;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        background-color: #ff7676;
        color: white;
    }

`
const Logo = styled(motion.div)`
    display: flex;
    justify-content:center;
    padding: 0.5rem;
    cursor: pointer;
    img{
        height: 2rem;
        width: 2rem;
    }
`
export default Nav;