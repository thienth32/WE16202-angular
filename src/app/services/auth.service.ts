export class AuthService {
  constructor() { }
  isAuthenticated(){
    let token = localStorage.getItem('token');
    if(token != undefined && token.length > 0){
      return true;
    }
    return false;
  }

  login(){
    localStorage.setItem('token', 'da dang nhap');
  }

  logout(){
    localStorage.removeItem('token');
  }
}
