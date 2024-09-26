import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { type Root } from '../../interfaces/hero.model';
import { SuperheroDataService } from '../../services/superhero-data.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { pipe, take } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  hero!: Root;
  percentage!: number;
  constructor(
    private superHero: SuperheroDataService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const heroId = +this.router.snapshot.paramMap.get('id')!;
    this.getHeroById(heroId);
  }

  getHeroById(id: number) {
    this.superHero
      .getHeroById(id)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.hero = data;

        this.percentage =
          ((data.powerstats.combat +
            data.powerstats.durability +
            data.powerstats.intelligence +
            data.powerstats.power +
            data.powerstats.speed +
            data.powerstats.strength) /
            600) *
          100;

        this.percentage = Math.round(this.percentage);

        console.log(this.percentage);
      });
  }
}
