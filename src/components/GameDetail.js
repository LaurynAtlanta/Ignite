import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
    //Data
    const { screen, game } = useSelector((state) => state.detail);
    return (
      <CardShadow>
        <Detail>
          <div className="stats">
            <div className="rating">
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
            </div>
            <div className="info">
              <h3>Platforms</h3>
              <div className="platforms">
                {game.platform && game.platforms.map((data) => (
                  <h3 key={data.platform.id}>{data.platform.name}</h3>
                ))}
              </div>
            </div>
          </div>
          <div className="media">
            <img src={game.background_image} alt={game.background_image} />
          </div>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <div className="description">
            <p>{game.description_raw}</p>
          </div>
          <div className="gallery">
            {screen.results && screen.results.map((screen) => (
              <img src={screen.image} key={screen.id} alt={screen.image} />
            ))}
          </div>
        </Detail>
      </CardShadow>
    );
  };

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
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
    padding: 2rem 10rem;
    background-color:white;
    position: absolute;
    left:10%;
    color: black;
    img{
        width: 100%;
    }
`

 
export default GameDetail;