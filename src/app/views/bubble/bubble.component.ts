import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit {

  public numbers = [];
  public auxiliaryArray = [];
  public arraySize = 30;
  public sortAnimation = [];
  public items;
  public ANIMATION_SPEED_MS = 10;
  public firstColor = 'white';
  public secondColor = 'red';
  public thirdColor = 'green';
  public timer;

  constructor() {
  }

  ngOnInit(): void {
    this.generateRandom();
  }

  generateRandom() {
    this.numbers.splice(0, this.numbers.length);
    this.sortAnimation.splice(0, this.sortAnimation.length);
    this.items = document.getElementsByClassName('item');
    for (let i = 0; i < this.arraySize; i++) {
      this.numbers[i] = Math.floor(Math.random() * 500 + 1);
    }
    this.auxiliaryArray = this.numbers.slice();
  }

  sort() {
    this.bubbleSort(this.auxiliaryArray);
    this.doAnimated();
  }
  doAnimated() {
    for (let i = 0; i < this.sortAnimation.length; i++) {
      if (i % 3 < 2) {
        const [firstIdx, secondIdx] = this.sortAnimation[i];
        if (i % 3 === 0) {
          this.timer = setTimeout(() => {
            this.items[firstIdx].style.backgroundColor = this.secondColor;
            this.items[secondIdx].style.backgroundColor = this.thirdColor;
          }, i * (1000 / this.ANIMATION_SPEED_MS));
        } else {
          this.timer = setTimeout(() => {
            this.items[firstIdx].style.backgroundColor = this.firstColor;
            this.items[secondIdx].style.backgroundColor = this.firstColor;
          }, i * (1000 / this.ANIMATION_SPEED_MS));
        }
      } else {
        const [firstIdx, secondIdx, thirdIdx, fourthIdx] = this.sortAnimation[i];
        this.timer = setTimeout(() => {
          this.numbers[firstIdx] = secondIdx;
          this.numbers[thirdIdx] = fourthIdx;
        }, i * (1000 / this.ANIMATION_SPEED_MS));
      }
    }
  }

  bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        this.sortAnimation.push([j, j + 1]);
        this.sortAnimation.push([j, j + 1]);
        if (arr[j] > arr[j + 1]) {
          const t = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = t;
        }
        this.sortAnimation.push([j, arr[j], j + 1, arr[j + 1]]);
      }
    }
  }

}
