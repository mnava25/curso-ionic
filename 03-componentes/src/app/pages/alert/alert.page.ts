import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      backdropDismiss: false,
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      // buttons: ['Cancel', 'Open Modal', 'Delete']
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo'
          // handler: () => {
          //   this.handlerMessage = 'Alert canceled';
          // },
        },
        {
          text: 'OK',
          role: 'confirm',
          // handler: () => {
          //   this.handlerMessage = 'Alert confirmed';
          // },
        },
      ],
    });

    await alert.present();

    //const { role } = await alert.onDidDismiss();
    //this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      inputs: [
        {
          placeholder: 'Name',
          name: 'name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          name: 'nickname',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          name: 'age',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          name: 'about-me',
          placeholder: 'A little about yourself',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm cancel');
          }
        },
        {
          text: 'Ok',
          handler: ( data: any ) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
