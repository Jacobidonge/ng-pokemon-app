import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  message: string = 'vous êtes deconnecté. (jacob/jacob)';
  name: string;
  password:string;
  auth: AuthService;

constructor(
  public authService: AuthService,
  private router: Router
){ }

ngOnInit() {
  this.auth = this.authService;
}
setMessage(){
  if(this.auth.isLoggedIn){
    this.message = 'vous êtes connecté.';
  }else{
    this.message = 'Identifiant ou mot de passe incorrect.'
  }

}

login(){
  this.message = 'tentative de connexion en cours...';
  this.auth.login(this.name,this.password)
  .subscribe((isLoggedIn: boolean) =>{
    this.setMessage();
    if(isLoggedIn){
      this.router.navigate(['/pokemons']);
    }else{
      this.password ='';
      this.router.navigate(['/login']);
    }
    
  })
}

logout(){
  this.auth.logout();
  this.message = 'vous êtes deconnecté.';
}

}
