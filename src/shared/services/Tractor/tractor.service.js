import { API_URL } from '../url';

class TractorService {
  _parseJson(response) {
    return response.json();
  }

  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      throw error;
    }
  }

  _serverError(error) {
    return Promise.reject(`${error}`);
  }

  fetchTractor(token) {
    return fetch(`${API_URL}/tractor`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkStatus)
      .then(this._parseJson)
      .catch(this._serverError);
  }

  saveTractor(token, payload) {
    return fetch(`${API_URL}/tractor`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkStatus)
      .then(this._parseJson)
      .catch(this._serverError);
  }
}

export const tractorService = new TractorService();
