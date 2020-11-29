import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import {smallImage} from '../util';
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";


const GameDetail = (props) => {
  const history = useHistory();
  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    //when you click on the shadow it sets the background back to scroll and changes the link to / to get rid of details
    if(element.classList.contains('shadow')){
      document.body.style.overflow = 'auto';
      history.push('/');
    }
  }

  //Get platform Images
  const getPlatform = (platform) => {
    switch(platform){
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };


    //Data
    const { screen, game, isLoading } = useSelector((state) => state.detail);
    return (
      <>
      {!isLoading && (
      <CardShadow className='shadow' onClick={exitDetailHandler}>
        <Detail layoutId={props.pathId}>
          <Stats>
            <div className="rating">
              <motion.h3 Layout={`title ${props.pathId}`}>{game.name}</motion.h3>
              <p>Rating: {game.rating}</p>
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                    <img
                    alt={data.platform.name}
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                  ></img>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img Layout={`image ${props.pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
            <div className="gallery">
                {screen.results && screen.results.map((screen) => (
                <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} />
                ))}
            </div>
        </Detail>
      </CardShadow>
      )}
      </>
    );
  };

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 5;
    left: 0;
    top: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color:#ff7676;
    }

    &::-webkit-scrollbar-track{
        background-color: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background-color:white;
    position: absolute;
    left:10%;
    color: black;
    z-index: 10;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }

`

const Media = styled(motion.div)`
    margin: 2rem;
    img{
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 2.5rem 0rem;
`
 
export default GameDetail;