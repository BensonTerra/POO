export class Movie {
    id = 0;
    title = ""
    year = 2020
    director = null
    duration = 0
    actors = []

    constructor(id, title, year, director, duration, actors) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.actors = actors.split(',');
    }
}