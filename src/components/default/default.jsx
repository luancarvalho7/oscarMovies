import { Card } from "../card/card"

export function Default({ data }) {

    
    return (
        <>
            {data.map( currentMovie => <Card 
            poster={currentMovie.Poster}
            title={currentMovie.Title}
            duration={currentMovie.Runtime}
            gender={currentMovie.Genre}
            director={currentMovie.Director}
            date={currentMovie.Released}
            score={currentMovie.imdbRating}
            key={currentMovie.imdbID}
            />)}
        </>
    )
}