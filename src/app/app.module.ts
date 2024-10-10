import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvsComponent } from './tvs/tvs.component';
import { AddTvComponent } from './add-tv/add-tv.component';
import { UpdateTvComponent } from './update-tv/update-tv.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TvsComponent,
    AddTvComponent,
    UpdateTvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule  // Ensure RouterModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
