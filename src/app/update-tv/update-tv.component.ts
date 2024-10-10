import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';

@Component({
  selector: 'app-update-tv',
  templateUrl: './update-tv.component.html',
  styles: []
})
export class UpdateTvComponent implements OnInit {
  
  currentTv = new Tv();

  constructor(
    private activatedRoute: ActivatedRoute,
    private tvService: TvService
  ) {}
  ngOnInit() {
    // Retrieve the TV ID from route parameters
    const tvId = this.activatedRoute.snapshot.params['id'];
    if (tvId) {
      this.currentTv = this.tvService.consulterTv(tvId); // Fetch TV details by ID
      console.log(this.currentTv); // Log the TV to ensure the correct TV is fetched
    }
  }
  

  updateTv() {
    this.tvService.updateTv(this.currentTv); // Update the TV details
  }
}
