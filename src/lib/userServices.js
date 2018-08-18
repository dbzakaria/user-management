const baseUrl = process.env.REACT_APP_BASE_URL

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
    console.log(type);
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



// export const getUsers = () => {
//     return fetch(baseUrl + '/herd/' + numberOfDays, {
//         'method': 'GET'
//     }).then(res => res.json())
//     .catch(error => {
//         console.log(error)
//     });
// }
//
// export const getStock = () => {
//   let numberOfDays = getNumberOfDays();
//   return fetch(baseUrl + '/stock/' + numberOfDays, {
//       'method': 'GET'
//   }).then(res => res.json())
//   .catch(error => {
//       console.log(error)
//   });
// }
//
// export const placeOrder = (order) => {
//   let numberOfDays = getNumberOfDays();
//   return fetch(baseUrl + '/order/' + numberOfDays, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(order)
//   })
//     .catch(handleError)
//     .then(checkStatus)
//     .then(parseJSON);
// }
//
// const parseJSON = (response) => {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   return response;
// };
//
// const handleError = (error) => {
//   error.response = {
//     status: 0,
//     statusText:
//       "Cannot connect. Please make sure you are connected to internet."
//   };
//   throw error;
// };
//
// const checkStatus = (response) => {
//   if (response.status >= 200 && response.status < 300) {
//
//     return response.json().then(json => {
//       return Promise.resolve({
//         code: response.status,
//         statusText: response.statusText,
//         body: json
//       });
//     });
//   }
//
//   return response.text().then(json => {
//     let body = JSON.parse(json)
//     return Promise.reject({
//       code: response.status,
//       statusText: response.statusText,
//       body: body
//     });
//   });
// };
