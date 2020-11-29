import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import {Link} from 'react-router-dom';
import {smallImage} from '../util';


const Game = (props) => {
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        //When you click on a game, the background is now not scrollable and the details are loaded
    document.body.style.overflow = 'hidden';
      dispatch(loadDetail(props.id));
    };

    return (  
        <StyledGame onClick={loadDetailHandler}>
            <Link to={`/game/${props.id}`}>
                <h3>{props.name}</h3>
                <p>{props.released}</p>
                <img src={smallImage(props.image, 640)} alt={props.name}/>
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden; //makes the image curve with radius
        img{
            width: 100%;
            height: 35vh;
            object-fit: cover;
        }

`
export default Game;