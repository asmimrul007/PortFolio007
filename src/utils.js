/*
export const getImageUrl =(path) => {
    return new URL(`public/images/${path}`, window.location.origin).href;
} ; 
*/


export const getImageUrl =(path) => {
    return `/images/${path}`;
} ;

