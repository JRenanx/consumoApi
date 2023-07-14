import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent {


  constructor(private http: HttpClient) { }

  public endereco !: Endereco;
  public cep: string = '';

  getData(): Observable<any> {
    let url = `https://viacep.com.br/ws/${this.cep}/json/`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  public buscarEndereco() {
    this.getData().subscribe((data) => {
      this.endereco = {
        rua: data['logradouro'],
        bairro: data['bairro'],
        cidade: data['localidade'],
        estado: data['uf'],
        cep: data['cep'],
      };
    });
  }
}