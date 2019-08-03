export default class Show {
    constructor(name, id) {
        this.name = name;
        this.id = id
    }
}

const fetchShows = () => {
    const url = 'http://api.tvmaze.com/shows';
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.slice(0, 50))
}

const fetchSingleShow = (id) => {
    const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
}

const fetchQuery = (q) => {
    const url = `http://api.tvmaze.com/search/shows?q=:${q}`

    return fetch(url)
        .then((response) => response.json())
        .then((data) => data)
}

export {
    fetchShows,
    fetchSingleShow,
    fetchQuery
}
