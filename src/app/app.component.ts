import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  selctedIndex: number;
  tempArray = [];
  art = [{
    id: 1, prop: "bed-01", cost: 300, quantity: 2
  }, {
    id: 2, prop: "bed-02", cost: 800, quantity: 2
  }, {
    id: 3, prop: "bed-03", cost: 900, quantity: 2
  },
  {
    id: 4, prop: "bed-04", cost: 1000, quantity: 2
  },
  {
    id: 5, prop: "bed-05", cost: 1100, quantity: 2
  },
  {
    id: 6, prop: "bed-06", cost: 1200, quantity: 2
  }]

  higlightRow(i) {
    this.returnTotalCost();
    this.selctedIndex = i
    this.tempArray.push(this.art[i])
    if (this.tempArray && this.tempArray.length > 0) {
      this.tempArray = this.tempArray.filter((tempBeds) => tempBeds.id === this.art[i].id)

    }
    console.log(this.tempArray)
  }

  returnTotalCost() {
    if (this.art && this.art.length > 0) {
      let total: number;
      total = this.art.map((arr) => arr.quantity * arr.cost).reduce((prev, curr) => prev + curr, 0)
      console.log(total)
    }
  }
  selectedBedTempArrray = [];
  setSelected(event, i) {
    if (event.target.checked) {
      this.selectedBedTempArrray.push(this.art[i]);
    } else {
      this.selectedBedTempArrray = this.selectedBedTempArrray.filter((rec) => rec.id !== this.art[i].id)
    }
    console.log(this.selectedBedTempArrray)
  }

}
