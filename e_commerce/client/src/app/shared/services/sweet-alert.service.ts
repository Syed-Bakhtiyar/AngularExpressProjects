import { Injectable } from '@angular/core';
import * as _sweetAlert from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';


@Injectable()
export class SweetAlertService {

  sweetAlert: SweetAlert;

  constructor() {
    this.sweetAlert = _sweetAlert as any;
  }

  showDialog(title: string, message: string, type: string) {
    this.sweetAlert(title, message, type);
  }

  getSweetAlert() {
    return this.sweetAlert;
  }

}
