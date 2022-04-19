import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BottomNavbarComponent } from './features/dashboard/components/bottom-navbar/bottom-navbar.component';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MainComponent } from './features/dashboard/pages/main/main.component';
import { NavbarComponent } from './features/dashboard/components/navbar/navbar.component';
import { ImageSliderComponent } from './features/dashboard/components/image-slider/image-slider.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TimelineComponent } from './features/dashboard/pages/timeline/timeline.component';
import { CalendarComponent } from './features/dashboard/pages/calendar/calendar.component';
import { ProfileComponent } from './features/dashboard/pages/profile/profile.component';
import { TripCardComponent } from './features/dashboard/components/trip-card/trip-card.component';
import { ItineraryListComponent } from './features/dashboard/components/itinerary-list/itinerary-list.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { ItineraryComponent } from './features/dashboard/components/itinerary/itinerary.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItineraryDialogComponent } from './features/dialogs/itinerary-dialog/itinerary-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TripDialogComponent } from './features/dialogs/trip-dialog/trip-dialog.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DeleteButtonComponent } from './shared/delete-button/delete-button.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BottomNavbarComponent,
    SignInComponent,
    SignUpComponent,
    MainComponent,
    NavbarComponent,
    ImageSliderComponent,
    TimelineComponent,
    CalendarComponent,
    ProfileComponent,
    TripCardComponent,
    ItineraryListComponent,
    ItineraryComponent,
    ItineraryDialogComponent,
    TripDialogComponent,
    DeleteButtonComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    IvyCarouselModule,
    DragDropModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
