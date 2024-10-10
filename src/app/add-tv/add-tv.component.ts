import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvService } from '../services/tv.service';
import { Tv } from '../model/tv.model';


@Component({
  selector: 'app-add-tv',
  templateUrl: './add-tv.component.html',
  
})
export class AddTvComponent implements OnInit {
  [x: string]: any;
  newTv = new Tv();
  
  message? :String ;

  constructor(private tvService:TvService){}
  ngOnInit(): void {
    
  }
  addTv(){
    console.log(this.newTv);
    this.tvService.addTv(this.newTv);
    this.message = "done ";
    
    }
}
