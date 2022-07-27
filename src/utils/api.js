class Api {
  constructor({ baseURL, method }) {
    this._baseURL = baseURL;
  }

  _checkResponse = (res) => {
    return res.ok ? res.json(): Promise.reject(`Ошибка: ${res.status}`);
  }

  getPicture() {
    return fetch(`${this._baseURL}`, {method: "GET"})
      .then(this._checkResponse)
  }
}

const dogApi = new Api({
  baseURL: 'https://random.dog/woof.json'
})

const catApi = new Api({
  baseURL: 'https://aws.random.cat/meow'
})

const foxApi = new Api({
  baseURL: 'https://randomfox.ca/floof/'
})

export { dogApi, catApi, foxApi };
