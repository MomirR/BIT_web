class Show {
    //.name .image.original .summary
    constructor(name, poster, description) {
        this.name = name;
        this.poster = poster;
        this.description = description;
    }
}

const fetchShows = () => {
    const url = 'http://api.tvmaze.com/shows';
    return fetch(url)
        .then((data) => data.json())
        .then((data) => data.slice(0, 50))
}

const fetchSingleShow = (id) => {
    const url = "http://api.tvmaze.com/shows/" + id + "?embed[]=seasons&embed[]=cast";

    return fetch(url)
        .then((data) => data.json())
}

const fetchQuery = (q) => {
    const url = `http://api.tvmaze.com/singlesearch/shows?q=${q}`
    fetch(url)
        .then((data) => data.json())
        .then((data) => console.log(data))


}

export {
    fetchShows,
    fetchSingleShow,
    fetchQuery
}
