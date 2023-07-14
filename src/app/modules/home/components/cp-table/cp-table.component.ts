import { Component, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent {

  @Input() endereco!: Endereco;

}
