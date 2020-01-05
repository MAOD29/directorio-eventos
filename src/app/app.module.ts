import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app/material.module';
import { HeaderComponent } from './components/header/header.component';
import { EventComponent } from './pages/event/event.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortadaComponent } from './components/portada/portada.component';
import { SpotComponent } from './components/spot/spot.component';
import { CardEventComponent } from './components/card-event/card-event.component';
import { BusinessComponent } from './pages/business/business.component';
import { CardBusinessComponent } from './components/card-business/card-business.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    FooterComponent,
    PortadaComponent,
    SpotComponent,
    CardEventComponent,
    BusinessComponent,
    CardBusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
