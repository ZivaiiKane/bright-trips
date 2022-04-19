import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap, map } from 'rxjs';
import { Itinerary, Trip } from '../models/itinerary';

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  // Create an itinerary in the db
  async createItinerary(data: Itinerary) {
    const user = await this.afAuth.currentUser;
    const today = new Date();

    if (!user) {
      return;
    }

    return this.db.collection('itinerary').add({
      ...data,
      uid: user.uid,
      trips: [
        {
          description: 'Your trip description...',
          tag: 'purple',
          start: today,
          end: today,
          cost: 0.0,
        },
      ],
    });
  }

  // Remove an itinerary from db
  deleteItinerary(itineraryId: string) {
    return this.db.collection('itinerary').doc(itineraryId).delete();
  }

  // Update a trip in an itinerary
  updateTrips(itineraryId: string, trips: Trip[]) {
    return this.db.collection('itinerary').doc(itineraryId).update({ trips });
  }

  // Remove an indivdual trip from the itinerary
  removeTrip(itineraryId: string, trip: Trip) {
    return this.db
      .collection('itinerary')
      .doc(itineraryId)
      .update({
        trips: firebase.firestore.FieldValue.arrayRemove(trip),
      });
  }

  // Get all of the users itinerary
  getUserItinerary() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Itinerary>('itinerary', (ref) =>
              ref.where('uid', '==', user.uid).orderBy('priority')
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  // Sort itinerary based on priority using batch sort
  sortitinerary(itinerary: Itinerary[]) {
    const db = firebase.firestore();
    const batch = db.batch();
    const refs = itinerary.map((i) => db.collection('itinerary').doc(i.id));

    refs.forEach((ref, indx) => batch.update(ref, { priority: indx }));

    batch.commit();
  }
}
