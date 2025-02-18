
export const getImageUrl =(path) => {
    return new URL(`public/images/${path}`, window.location.origin).href;
} ;


