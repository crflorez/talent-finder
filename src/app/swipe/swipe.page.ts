import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, NgZone } from '@angular/core';
import { Gesture, GestureController, IonCard, Platform } from '@ionic/angular';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})

export class SwipePage implements AfterViewInit {

  people = [
    {
      name: 'Lio',
      img: 'https://brainfactorygraphicsengine.files.wordpress.com/2013/07/shutterstock-1.jpg',
      power: 0

    },
    {
      name: 'Ron',
      img: 'http://www.adweek.com/files/imagecache/node-blog/totinos-stock-08-2014.jpg',
      power: 0
    },
    {
      name: 'Soyla',
      img: '',
      power: 0
    }
  ];

  @ViewChildren(IonCard, {read: ElementRef}) cards: QueryList<ElementRef>;
  longPressActive = false;

  constructor(private gestureCtrl: GestureController, private zone: NgZone, private plt:Platform) { }

  ngAfterViewInit(){
    const cardArray = this.cards.toArray();

    //this.useLongPress(cardArray);
    this.useTinderSwipe(cardArray);

  }

  useLongPress(cardArray){
    for (let i = 0; i < cardArray.length ; i++){
      const card = cardArray[i];
      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'long-press',
        onStart: ev => {
          this.longPressActive = true;
          this.increasePower(i);
        },
        onEnd: ev => {
          this.longPressActive = false;
        }

      });

      gesture.enable(true);
    }
  }
increasePower(i){
    setTimeout(() => {
      if (this.longPressActive){
        this.zone.run(() => {
          this.people[i].power++;
          this.increasePower(i);
        })
      }
    }, 200)
  }

  useTinderSwipe(cardArray){
    for (let i = 0; i < cardArray.length ; i++){
      const card = cardArray[i];

      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: ev => {

        },
        onMove : ev => {
          card.nativeElement.style.transfor = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10} deg)`;
          this.setCardColor(ev.deltaX, card.nativeElement);
        },
        onEnd: ev => {
          card.nativeElement.style.transition = '3.5s ease-out';

          if (ev.deltaX > 150){
            card.nativeElement.style.transform = `translateX(${+this.plt.width() * 2} px) rotate(${ev.deltaX / 2}deg)`;
          }else if (ev.deltaX < -150){
            card.nativeElement.style.transform = `translateX(-${+this.plt.width() * 2} px) rotate(${ev.deltaX / 2}deg)`;
          }else {
            card.nativeElement.style.transform = '';
          }
        }

      });

      gesture.enable(true);
    }
  }


  setCardColor(x, element){
    let color = '';
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min,2);

    if (x < 0){
      color = '#FF' + hexCode + hexCode;
    }
    else{
      color = '#' + hexCode + 'FF' + hexCode;
    }

    element.style.background = color;

  }
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof padding === 'undefined' || padding === null ? (padding = 2) : padding;

    while (hex.length < padding){
      hex = '0' + hex;
    }

    return hex;
  }

}