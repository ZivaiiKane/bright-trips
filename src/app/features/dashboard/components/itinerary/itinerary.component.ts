import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
})
export class ItineraryComponent implements OnInit {
  @Input() itinerary: any;

  constructor(private itineraryService: ItineraryService) {}

  tripDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.itinerary.trips,
      event.previousIndex,
      event.currentIndex
    );
    this.itineraryService.updateTrips(this.itinerary.id, this.itinerary.trips);
  }

  ngOnInit(): void {}
}
