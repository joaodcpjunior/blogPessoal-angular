import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserDTO } from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  entrar(userDTO: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>("http://localhost:8080/api/v1/usuario/autenticar", userDTO)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>("http://localhost:8080/api/v1/usuario/salvar", user)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/api/v1/usuario/${id}`, this.token)
  }
  
  logado() {
    let ok = false

    if(environment.token != '') {
      ok = true
    }

    return ok
  }
}
