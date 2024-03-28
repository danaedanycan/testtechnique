import { Component, OnInit } from '@angular/core';
import { people } from '../products'; // Assurez-vous que le chemin d'accès est correct.

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: any[] = [];

  ngOnInit(): void {
    this.sortPeople();
  }

  private convertStringToDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(num => parseInt(num, 10));
    return new Date(year, month - 1, day);
  }



  private sortPeople(): void {

    this.people = people.sort((a, b) => {

      if (!a.isTeacher && !b.isTeacher) {
        const houseComparison = a.house.localeCompare(b.house);
        if (houseComparison !== 0) return houseComparison;
        return a.firstName.localeCompare(b.firstName); 
      }
      if (a.isTeacher && b.isTeacher) {
        return this.convertStringToDate(a.arrivalDate).getTime() - this.convertStringToDate(b.arrivalDate).getTime();
      }
      return 0;
    });
  }
}
