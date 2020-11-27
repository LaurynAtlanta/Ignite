import React,{useEffect} from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = (props) => {
    //load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
      dispatch(loadDetail(props.id));
    };

    return (  
        <StyledGame onClick={loadDetailHandler}>
            <h3>{props.name}</h3>
            <p>{props.released}</p>
            <img src={props.image} alt={props.name}/>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;
    img{
        width: 100%;
        height: 35vh;
        object-fit: cover;
    }

`
export default Game;