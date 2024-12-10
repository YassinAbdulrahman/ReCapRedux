import { ALLMOVIES } from "../types/moviesType";

export const movieReducer = (state = {movies:[] , pagecount:0} , action)=>{
    switch(action.type){
        case ALLMOVIES:
            return {movies: action.payload , pageCount:action.pages }
            default:
                return state
    }
}