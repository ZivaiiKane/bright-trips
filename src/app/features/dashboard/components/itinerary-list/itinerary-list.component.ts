import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';
import { Itinerary } from '../../models/itinerary';
import { ItineraryService } from '../../services/itinerary.service';

@Component({
  selector: 'app-itinerary-list',
  templateUrl: './itinerary-list.component.html',
  styleUrls: ['./itinerary-list.component.css'],
})
export class ItineraryListComponent implements OnInit, OnDestroy {
  itineraries!: Itinerary[];
  sub!: Subscription;

  constructor(public itineraryService: ItineraryService) {}

  ngOnInit(): void {
    this.sub = this.itineraryService
      .getUserItinerary()
      .subscribe((itineraries) => {
        this.itineraries = itineraries;
        console.log('itineraries:', itineraries);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.itineraries, event.previousIndex, event.currentIndex);
    this.itineraryService.sortitinerary(this.itineraries);
  }
}
