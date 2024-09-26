import { Component, OnInit } from '@angular/core';
import { Root } from '../../interfaces/hero.model';
import { SuperheroDataService } from '../../services/superhero-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  allHeroes!: Root[];

  constructor(private superHeroData: SuperheroDataService) {}

  ngOnInit(): void {
    this.getAllHerores();
  }

  getAllHerores() {
    this.superHeroData.getAllHeroes().subscribe((data) => {
      if (data) {
        this.allHeroes = data;
        console.log(this.allHeroes);
      }
    });
  }
}
