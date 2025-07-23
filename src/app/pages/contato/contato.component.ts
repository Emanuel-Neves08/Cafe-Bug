import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  contatoForm!: FormGroup;

  
  private serviceID = 'service_wh7fqdf';
  private templateID = 'template_h04pqdi';
  private userID = 'JMDk1ABXJouRg2g8K'; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      motivoContato: ['', Validators.required],
      melhorFormaContato: ['email', Validators.required],
      mensagem: ['', Validators.required],
      aceitaTermos: [false, Validators.requiredTrue],
      aceitaUsoDados: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contatoForm.invalid) {
      this.contatoForm.markAllAsTouched();
      return;
    }

    const formValue = this.contatoForm.value;

    const templateParams = {
      nome: formValue.nome,
      email: formValue.email,
      telefone: formValue.telefone || 'Não informado',
      motivoContato: formValue.motivoContato,
      melhorFormaContato: formValue.melhorFormaContato,
      mensagem: formValue.mensagem
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.userID)
      .then(() => {
        alert('E-mail enviado com sucesso!');
        this.contatoForm.reset();
        this.router.navigateByUrl('/');
      }, (error) => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar e-mail, tente novamente mais tarde.');
      });
  }

  cancelar() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/');
  }
}
