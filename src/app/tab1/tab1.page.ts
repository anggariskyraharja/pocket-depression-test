import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  q1: number = 0;
  q2: number = 0;
  q3: number = 0;
  q4: number = 0;
  q5: number = 0;
  q6: number = 0;
  q7: number = 0;
  q8a: number = 0;
  q8b: number = 0;
  q9: number = 0;
  q10a: number = 0;
  q10b: number = 0;
  score: number = 0;
  classification: string = 'No Depression';

  checks() {
    this.score = 0;
    this.score = this.q1 + this.q2 + this.q3 + this.q6 + this.q7 + this.q9;
    if (this.q4 > this.q5){
      this.score = this.score + this.q4;
    } else {
      this.score = this.score + this.q5;
    }
    if (this.q8a > this.q8b){
      this.score = this.score + this.q8a;
    } else {
      this.score = this.score + this.q8b;
    }
    if (this.q10a > this.q10b){
      this.score = this.score + this.q10a;
    } else {
      this.score = this.score + this.q10b;
    }
    this.score = this.score;
    if (this.score < 20){
      this.classification = "No Depression";
    } else if (this.score < 25){
      this.classification = "Mild Depression";
    } else if (this.score < 30){
      this.classification = "Moderate Depression";
    } else {
      this.classification = "Severe Depression"
    }
  }

  check1(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q1 = b;
    this.checks();
  }
  check2(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q2 = b;
    this.checks();
  }
  check3(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q3 = b;
    this.checks();
  }
  check4(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q4 = b;
    this.checks();
  }
  check5(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q5 = b;
    this.checks();
  }
  check6(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q6 = b;
    this.checks();
  }
  check7(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q7 = b;
    this.checks();
  }
  check8a(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q8a = b;
    this.checks();
  }
  check8b(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q8b = b;
    this.checks();
  }
  check9(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q9 = b;
    this.checks();
  }
  check10a(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q10a = b;
    this.checks();
  }
  check10b(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    } else if (a == "5"){
      var b = 4;
    } else if (a == "6"){
      var b = 5;
    }
    this.q10b = b;
    this.checks();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Missing Value',
      message: 'Please input all the required values!',
      buttons: ['Okay']
    });
    await alert.present();
  }

  constructor(public alertController: AlertController) {
  }

}
