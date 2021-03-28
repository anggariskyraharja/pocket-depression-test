import { ɵDomAdapter } from '@angular/common';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  q1: number = 0;
  q2: number = 0;
  q3: number = 0;
  q4: number = 0;
  q5: number = 0;
  q6: number = 0;
  q7: number = 0;
  q8: number = 0;
  q9: number = 0;
  score: number = 0;
  classification: string = 'Scores ≤4 suggest minimal depression which may not require treatment.';

  checks() {
    this.score = 0;
    this.score = this.q1 + this.q2 + this.q3 + this.q4 + this.q5 + this.q6 + this.q7 + this.q8 + this.q9;
    if (this.score <= 4){
      this.classification = "Scores ≤4 suggest minimal depression which may not require treatment.";
    } else if (this.score <= 9){
      this.classification = "Scores 5-9 suggest mild depression which may require only watchful waiting and repeated PHQ-9 at followup.";
    } else if (this.score <= 14){
      this.classification = "Scores 10-14 suggest moderate depression severity; patients should have a treatment plan ranging form counseling, followup, and/or pharmacotherapy.";
    } else if (this.score <= 19) {
      this.classification = "Scores 15-19 suggest moderately severe depression; patients typically should have immediate initiation of pharmacotherapy and/or psychotherapy."
    } else {
      this.classification = "Scores 20 and greater suggest severe depression; patients typically should have immediate initiation of pharmacotherapy and expedited referral to mental health specialist.";
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
    }
    this.q7 = b;
    this.checks();
  }

  check8(event){
    var a = event.target.value;
    if (a == "1"){
      var b = 0;
    } else if (a == "2"){
      var b = 1;
    } else if (a == "3"){
      var b = 2;
    } else if (a == "4"){
      var b = 3;
    }
    this.q8 = b;
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
    }
    this.q9 = b;
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
