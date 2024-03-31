import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';
import { Character } from '../model/character';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FieldsetModule,DividerModule,ButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  actRoute = inject(ActivatedRoute);
  router = inject(Router);

  characterService = inject(CharacterService);
  declare characterId:number;
  declare character:Character;
  


  ngOnInit() {
    this.fetchCracterDetails();
  
    
  }


  fetchCracterDetails(){

    this.characterId=Number( this.actRoute.snapshot.paramMap.get('id'));
    console.log("character id",this.characterId);
    this.actRoute.paramMap.subscribe(params=>{
      const id = Number( params.get('id'));
      this.characterService.getCharacters(id).subscribe({
        next: (characters: any) => {
          this.character = characters;
          console.log(characters);
        },
        error: () => {},
      });
    

    })
    

  
  }

  backMain(){
    this.router.navigateByUrl("main")
  }




}
