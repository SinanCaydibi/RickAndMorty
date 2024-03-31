import { Component, Input, OnInit, inject } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Character } from '../model/character';
import { CharacterService } from '../character.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mainboard',
  standalone: true,
  imports: [
    MenubarModule,
    TabMenuModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    CardModule,
    ButtonModule,
    ScrollPanelModule,
    PaginatorModule,
    RatingModule,
    FormsModule,
  ],
  templateUrl: './mainboard.component.html',
  styleUrl: './mainboard.component.css',
})
export class MainboardComponent implements OnInit {
  authService = inject(AuthService);
  characterService = inject(CharacterService);
  actRoute = inject(ActivatedRoute);
  characters: Character[] = [];

  favorichracters: Character[] = [];

  selectPage = 'main';
  pageNumber = 1;
  baseUrl: string = 'https://rickandmortyapi.com/api/character/?';
  selectedFavori: boolean = false;
  selectedSpecies: any;
  selectedGender: any;
  selectedStatus: any;
  selectedName: any;
  species = [
    { name: 'Alien', value: 'alien' },
    { name: 'Human', value: 'human' },
    { name: 'Animal', value: 'animal' },
  ];

  gender = [
    { name: 'Female', value: 'female' },
    { name: 'Male', value: 'male' },
    { name: 'Genderless', value: 'genderless' },
    { name: 'Unknown', value: 'unknown' },
  ];

  status = [
    { name: 'Alive', value: 'alive' },
    { name: 'Dead', value: 'dead' },
    { name: 'Unknown', value: 'unknown' },
  ];

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.characterService.getPageCharacters(this.pageNumber).subscribe({
      next: (characters: any) => {
        this.characters = characters.results;
        console.log(characters);
      },
      error: () => {},
    });
  }

  getFilteredCharacters() {
    let queryParams = '';

    if (this.selectedName) {
      queryParams += `name=${this.selectedName}`;
    }
    if (this.selectedStatus) {
      queryParams += `${queryParams ? '&' : ''}status=${
        this.selectedStatus.value
      }`;
    }
    if (this.selectedGender) {
      queryParams += `${queryParams ? '&' : ''}gender=${
        this.selectedGender.value
      }`;
    }

    let url = `https://rickandmortyapi.com/api/character/?${queryParams}`;
    console.log('Fetching characters from:', url);
    this.characterService.getCharacterByURL(url).subscribe({
      next: (characters: any) => {
        this.characters = characters.results;
        console.log(characters);
      },
      error: () => {},
    });
  }

  onPageChange(event: any) {
    this.pageNumber = event.first;
    this.fetchData();
  }
  getFavorite(item: Character) {
    item.favori = !item.favori;
    if (item.favori) {
      this.favorichracters.push(item); // Favorilere ekle
    } else {
      this.favorichracters = this.favorichracters.filter(
        (fav: any) => fav.id !== item.id
      ); // Favorilerden çıkar
    }
  }

  logout() {
    this.authService.logout();
  }

  favorite(pageName: string) {
    if (pageName == 'favorites') {
      this.selectPage = 'favorites';
    } else {
      this.selectPage = 'main';
    }
  }
}
