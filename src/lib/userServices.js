const baseUrl = process.env.REACT_APP_API_BASE_URL

export const getUsers = () => {
    return fetch(baseUrl)
    .then(res => res.json())
}

export const createUser = (user) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
}

export const sortUsers = (col,type) => {
    return fetch(baseUrl + '?_sort=' + col + '&_order=' + type, {
        'method': 'GET'
    }).then(res => res.json())
    .catch(error => {
        console.log(error)
    });
}

export const deleteUserById = (id) => {
    return fetch(baseUrl + '/' + id ,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
}

export const updateUser = (user) => {
    console.log(baseUrl + '/' + user.id);
    return fetch(baseUrl + '/' + user.id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
}

export const getUserById = (id) => {
    return fetch(baseUrl + '/' + id ,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
}
