import {Component, OnDestroy, OnInit} from '@angular/core';
import {thistle} from 'color-name';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, OnDestroy {

  public numbers = [];
  public arraySize = 30;
  public sortAnimation = [];
  public items;
  public ANIMATION_SPEED_MS = 10;
  public auxiliaryArray = [];
  public helper = [];
  public timer;

  constructor() {}

  ngOnInit(): void {
    this.generateRandom();
  }

  // create array with random number and prepare two auxiliary array
  generateRandom() {
    this.numbers.splice(0, this.numbers.length);
    this.sortAnimation.splice(0, this.sortAnimation.length);
    this.auxiliaryArray.splice(0, this.sortAnimation.length);
    this.helper.splice(0, this.sortAnimation.length);
    this.items = document.getElementsByClassName('item');
    for (let i = 0; i < this.arraySize; i++) {
      this.numbers[i] = Math.floor(Math.random() * 500 + 1);
    }
  }

  sort() {
    this.auxiliaryArray = this.numbers.slice();
    this.helper = this.numbers.slice();
    this.mergeSort(this.helper, 0, this.helper.length - 1);
    this.doAnimated();
  }

  doAnimated() {
    for (let i = 0; i < this.sortAnimation.length; i++) {
      const [firstIdx, secondIdx] = this.sortAnimation[i];
      if (i % 3 !== 2) {
        if (i % 3 === 0) {
          this.timer = setTimeout(() => {
            this.items[firstIdx].style.backgroundColor = 'red';
            this.items[secondIdx].style.backgroundColor = 'green';
          }, i * (1000 / this.ANIMATION_SPEED_MS));
        } else {
          // revert to initial color
          this.timer = setTimeout(() => {
            this.items[firstIdx].style.backgroundColor = 'white';
            this.items[secondIdx].style.backgroundColor = 'white';
          }, i * (1000 / this.ANIMATION_SPEED_MS));
        }
      } else {
        this.timer = setTimeout(() => {
          this.numbers[firstIdx] = secondIdx;
        }, i * (1000 / this.ANIMATION_SPEED_MS));
      }
    }
  }

  mergeSort(arr: any, startIdx, endIdx) {
    if (startIdx === endIdx) {
      return;
    }
    const mid = Math.floor((startIdx + endIdx) / 2);
    this.mergeSort(arr, startIdx, mid);
    this.mergeSort(arr, mid + 1, endIdx);
    this.merge(arr, startIdx, mid, endIdx);
  }

  merge(arr, start, mid, end) {
    let leftIdx = start;
    let rightIdx = mid + 1;
    let k = start;
    while (leftIdx <= mid && rightIdx <= end) {
      this.sortAnimation.push([leftIdx, rightIdx]);
      this.sortAnimation.push([leftIdx, rightIdx]);
      if (this.auxiliaryArray[leftIdx] <= this.auxiliaryArray[rightIdx]) {
        this.sortAnimation.push([k, this.auxiliaryArray[leftIdx]]);
        arr[k] = this.auxiliaryArray[leftIdx];
        leftIdx++;
      } else {
        this.sortAnimation.push([k, arr[rightIdx]]);
        arr[k] = this.auxiliaryArray[rightIdx];
        rightIdx++;
      }
      k++;
    }
    while (leftIdx <= mid) {
      this.sortAnimation.push([leftIdx, leftIdx]);
      this.sortAnimation.push([leftIdx, leftIdx]);
      this.sortAnimation.push([k, this.auxiliaryArray[leftIdx]]);
      arr[k] = this.auxiliaryArray[leftIdx];
      leftIdx++;
      k++;
    }
    while (rightIdx <= end) {
      this.sortAnimation.push([rightIdx, rightIdx]);
      this.sortAnimation.push([rightIdx, rightIdx]);
      this.sortAnimation.push([k, this.auxiliaryArray[rightIdx]]);
      arr[k] = this.auxiliaryArray[rightIdx];
      rightIdx++;
      k++;
    }
    this.auxiliaryArray = this.helper.slice();
  }

  ngOnDestroy(): void {
    location.reload();
    clearTimeout(this.timer);
  }
}
