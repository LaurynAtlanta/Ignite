import React,{useEffect} from 'react';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {useLocation} from 'react-router-dom';

const Home = () => {
    //get current location 
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];

    //Fetch games through dispatch
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(loadGames());
    },[dispatch]); 
    //extracting all items from redux state games
    const {popular, newGames, upcoming} = useSelector((state) => state.games); 


    return (  
        <GameList>
            { pathId && <GameDetail/> } 
            {/* if there is an id when we click on game then display the details for id */}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map((game)=>
                     <Game 
                        name={game.name} 
                        released={game.released} 
                        key={game.id} 
                        id={game.id} 
                        image={game.background_image}/> 
                )}
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map((game)=>
                     <Game 
                        name={game.name} 
                        released={game.released} 
                        key={game.id} 
                        image={game.background_image}/> 
                )}
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map((game)=>
                     <Game 
                        name={game.name} 
                        released={game.released} 
                        key={game.id} 
                        image={game.background_image}/> 
                )}
            </Games>
        </GameList>
    );
}
 

const GameList = styled(motion.div) `
    padding: 0rem 5rem;
    h2{
        padding: 3rem 0rem;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat( auto-fit , minmax(400px, 1fr)); 
    // if it doesnt have  300px available, then jump down expand
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;


`

export default Home;