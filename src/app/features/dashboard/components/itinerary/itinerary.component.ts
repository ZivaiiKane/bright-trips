import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { Trip } from '../../models/itinerary';
import { MatDialog } from '@angular/material/dialog';
import { TripDialogComponent } from 'src/app/features/dialogs/trip-dialog/trip-dialog.component';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css'],
})
export class ItineraryComponent {
  @Input() itinerary: any;

  constructor(
    private itineraryService: ItineraryService,
    private dialog: MatDialog
  ) {}

  tripDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.itinerary.trips,
      event.previousIndex,
      event.currentIndex
    );
    this.itineraryService.updateTrips(this.itinerary.id, this.itinerary.trips);
  }

  openDialog(trip?: Trip, indx?: number): void {
    const newTrip = { tag: 'green' };
    const dialogRef = this.dialog.open(TripDialogComponent, {
      width: '400px',
      data: trip
        ? { trip: { ...trip }, isNew: false, tripId: this.itinerary.id, indx }
        : {
            trip: { ...newTrip, start: new Date(), end: new Date() },
            isNew: true,
          },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.isNew) {
          this.itineraryService.updateTrips(this.itinerary.id, [
            ...this.itinerary.trips,

            result.trip,
            // {
            //   ...result.trip,
            //   start: result.trip.start.toDate(),
            //   end: result.trip.end.toDate(),
            //   cost: result.trip.cost,
            // },
          ]);
        } else {
          const update = this.itinerary.trips;

          update.splice(result.indx, 1, result.trip);
          this.itineraryService.updateTrips(
            this.itinerary.id,
            this.itinerary.trips
          );
        }
      }
    });
  }

  handleDelete() {
    this.itineraryService.deleteItinerary(this.itinerary.id);
  }
}
