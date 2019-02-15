const API_URL = 'http://localhost:3000';

class LoginService {
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

  onLogin(email, password) {
    return fetch(`${API_URL}/auth`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkStatus)
      .then(this._parseJson)
      .catch(this._serverError);
  }
}

export const loginService = new LoginService();
