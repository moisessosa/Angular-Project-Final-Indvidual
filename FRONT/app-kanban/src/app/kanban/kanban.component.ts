import { Component, OnInit } from '@angular/core';
import { Work } from 'src/shared/work.model';
import { APIService } from 'src/shared/api.service';
@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {
  cards!:Work[];
  paraSaberSiRecuperoWorks(): void {// usar esto para procesar los datos y crear las tarjetas
    
    console.log("en la funcion",this.cards);
   }
   constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getAllCards().subscribe((data) => {
      this.cards=data;
      //console.log(this.cards)
    });
  }
  ngAfterViewInit():void{
   //Após o Angular inicializar suas páginas e páginas filhas. 
   //ngAfterContentInit: Após o Angular pegar um conteúdo externo
   // e inserir no componente: ng-content 
    setTimeout(()=>this.paraSaberSiRecuperoWorks(),1000)
  }
  

}


