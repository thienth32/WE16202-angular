export class AuthService {
  loggedIn = false;
  constructor() { }
  isAuthenticated(){
    return this.loggedIn;
  }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
