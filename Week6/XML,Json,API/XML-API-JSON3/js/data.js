let dataArray = [];
let userRep = [];

class User {
    constructor(username, img) {
        this.username = username;
        this.img = img;
    }
}

class UserRepository {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const preparingTheRequest = (searchStr) => {
    if (!searchStr) {
        return alert("Input is empty");
    }
    const url = 'https://api.github.com/search/users?q=' + searchStr;
    return fetch(url)
        .then((data) => data.json())
        .then((data) => {
            for (let i = 0; i < data.items.length && i < 6; i++) {
                dataArray[i] = new User(data.items[i].login, data.items[i].avatar_url);
            }
            return dataArray;
        })
}

const getRepositories = (username) => {
    const urlRepository = "https://api.github.com/users/" + username + "/repos";

    return fetch(urlRepository)
        .then((data) => data.json())
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                userRep[i] = new UserRepository(data[i].name, data[i].description)
            }
            return userRep;
        })
}
export {
    preparingTheRequest,
    dataArray,
    getRepositories
}

