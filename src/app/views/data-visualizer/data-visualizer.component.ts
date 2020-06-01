import {Component, OnInit} from '@angular/core';
import {MergeSortService} from '../../services/mergeSort.service';

@Component({
  selector: 'app-data-visualizer',
  templateUrl: './data-visualizer.component.html',
  styleUrls: ['./data-visualizer.component.scss']
})
export class DataVisualizerComponent implements OnInit {

  public numbers = [];
  public arraySize = 30;
  // public comAnimation = [];
  // public sortAnimation = [];
  // public comparing: [boolean];
  // public sorting: [boolean];

  constructor(private mergeService: MergeSortService) {
  }

  ngOnInit(): void { this.generateRandom(); }

  generateRandom() {
    this.numbers.splice(0, this.numbers.length - 1);
    for (let i = 0; i < this.arraySize; i++) {
      this.numbers[i] = Math.floor(Math.random() * 500 + 1);
      // this.comparing[i] = false;
      // this.sorting[i] = false;
    }
  }

  sort() {
    const e = document.getElementById('type');
    // @ts-ignore
    const selected = e.options[e.selectedIndex].value;
    if (selected === 'merge') {
      this.mergeSort(this.numbers, 0, this.numbers.length - 1);
    }
  }
  mergeSort(arr: any, start: number, end: number) {
    const low = start;
    const high = end;
    if (low >= high) {
      return arr;
    }
    const mid = Math.floor((start + end) / 2);
    this.mergeSort(arr, start, mid);
    this.mergeSort(arr, mid + 1, end);
    this.merge(arr, low, mid, high);
  }

  merge(arr: any, low: number, mid: number, high: number) {
    let i;
    let j = low;
    for (i = mid + 1; i <= high; i++) {
      while (arr[j] <= arr[i] && j < i) {
        j++;

        // this.comAnimation.push(i, j);
        // this.animationHandler();
      }
      if (j === i) {
        return arr;
      }
      const t = arr[i];
      for (let k = i; k > j; k--) {
        arr[k] = arr[k - 1];
        // this.sortAnimation.push(k, k - 1);
        // this.animationHandler();
      }
      arr[j] = t;
    }
    return arr;
  }
  // animationHandler() {
  //   this.sortAnimation.splice(0, this.sortAnimation.length - 2);
  //   this.comAnimation.splice(0, this.comAnimation.length - 2);
  // }
  //
  // detect(num) {
  //   for (let i; i < this.comAnimation.length; i++) {
  //     if (num === this.comparing[i]) {
  //       this.comparing[i] = true;
  //       break;
  //     }
  //   }
  //   for (let j; j < this.sortAnimation.length; j++) {
  //     if (num === this.sorting[j]) {
  //       this.sorting[j] = true;
  //       break;
  //     }
  //   }
  // }

}
