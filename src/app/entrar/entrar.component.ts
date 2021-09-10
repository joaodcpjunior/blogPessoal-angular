import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserDTO } from '../model/UserDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UserDTO = new UserDTO()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  entrar() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserDTO) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      console.log("token"+ JSON.stringify(environment.token))
      console.log("senha"+ JSON.stringify(this.userLogin.senha))

      this.router.navigate(["/inicio"])
    }, erro => {
      if(erro.status == 500) {
        alert("Email ou senha estão incorretos")
      }
    })
  }
}
