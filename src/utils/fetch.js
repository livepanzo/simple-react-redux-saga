/**
 * Error handler - throw Error to saga
 */
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export const post = (url, body) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify(body),
}).then(handleErrors)
  .then(response => response)

export const put = (url, body) => fetch(url, {
  credentials: 'same-origin',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
}).then(handleErrors)
  .then(response => response)

export const get = url => fetch(url, {
  credentials: 'same-origin',
  method: 'GET',
}).then(handleErrors)
  .then(response => response.json()
  .then(json => json))

export const del = url => fetch(url, {
  credentials: 'same-origin',
  method: 'DELETE',
}).then(handleErrors)
  .then(response => response.json()
  .then(json => json))
