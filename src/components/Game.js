import React from 'react';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import {Link} from 'react-router-dom';
import {smallImage} from '../util';
import {fadeIn} from '../animations';


const Game = (props) => {
    const id = props.id;
    const stringPathId = id.toString();
    //Load Detail Handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        //When you click on a game, the background is now not scrollable and the details are loaded
    document.body.style.overflow = 'hidden';
      dispatch(loadDetail(props.id));
    };

    return (  
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler} variants = {fadeIn} initial='hidden' animate='show'>
            <Link to={`/game/${props.id}`}>
                <motion.h3 Layout={`title ${stringPathId}`}>{props.name}</motion.h3>
                <p>{props.released}</p>
                <motion.img Layout={`image ${stringPathId}`}src={smallImage(props.image, 640)} alt={props.name}/>
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