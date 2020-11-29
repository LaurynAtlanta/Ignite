//Media Resize

export const smallImage = (imagePath, size) => {
    //find an image ( whatever has this path) and replace with new sized path
    //first is for screenshots, other is for games
    const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace('media/screenshots', 
                        `media/resize/${size}/-/screenshots`) 
    : imagePath.replace('/media/games', 
                        `/media/resize/${size}/-/games/`)
    return image;
}