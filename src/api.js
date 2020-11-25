const base_url = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month<10){ //makes it return ex: 08 instead of 8
        return `0${month}`;
    } else{
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDay() ;
    if(day<10){ //makes it return ex: 08 instead of 8
        return `0${day}`;
    } else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}- ${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}- ${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}- ${currentDay}`;


const popular_games = `games?dates=${lastyear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => {
    return(
        `${base_url}${popular_games}`
    )
}