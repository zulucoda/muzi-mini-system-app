const API_URL = 'http://localhost:3000';

class LoginService {
  _parseJson(response) {
    return response.json();
  }

  onLogin(email, password) {
    return fetch(`${API_URL}/auth`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._parseJson);
  }
}

export const loginService = new LoginService();
