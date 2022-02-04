import { FormGroup, FormControl } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  onSubmitPf(){

  }

  pFCrud = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    password: new FormControl(''),
    autorization: new FormControl(''),
  })

  faArrowLeft =  faArrowLeft;

  pF = false;
  pJ = false;

  showFormPerson(){
    this.pF = true;
  }

  showFormJudicial(){
    this.pJ = true;
  }

  backButton(){
    this.pF =false;
    this.pJ =false;
  }


  constructor() { }


  ngOnInit(): void {
  }

}
