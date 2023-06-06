export class Movie
{
    id  = 0
    title = ""
    year = 2020
    director = ""
    duration = 0
    actors = []

    constructor(title, year, director, duration, actors)
    {
        this.id = getNextId()
        this.title = title
        this.year = year
        this.director = director
        this.duration = duration
        this.actors = actors
    }
}

export const movies = []

function getNextId()
{
    let max = 0
    for(let movies of movies)
    {
        if(movies.id > max)
        {
            max = movies.id
        }
    }
}

