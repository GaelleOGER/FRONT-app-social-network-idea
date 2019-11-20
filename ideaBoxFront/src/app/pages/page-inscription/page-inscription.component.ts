import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProfilModel } from 'src/app/models/ProfilModel';
import { InscriptionService } from 'src/app/services/InscriptionServices';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.css']
})
export class PageInscriptionComponent implements OnInit {
  creationInscriptionForm = this.fb.group({
    _nom: [null, Validators.required],
    _prenom: [null, Validators.required],
    _mail: [null, Validators.required],
    _pseudo: [null, Validators.required],
    _motDePasse: [null, Validators.required]
  });

  hasUnitNumber = false;
  private inscription: ProfilModel;
  constructor(private fb: FormBuilder, private InscriptionService: InscriptionService, private router: Router) { }


  ngOnInit() {
  }

  onSubmit() {
    this.InscriptionService.inscription(this.creationInscriptionForm.value)

  }
}
