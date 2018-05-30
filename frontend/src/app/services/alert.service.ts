import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AlertService {

  constructor(private flashMessage: FlashMessagesService) { }

  private show(message: any, cssClass: string, timeout: number) {
    this.flashMessage.show(message, {cssClass: cssClass, timeout: timeout});
  }

  primary(message, timeout = 3000) {
    return this.show(message, 'alert-primary', timeout);
  }

  success(message, timeout = 3000) {
    return this.show(message, 'alert-success', timeout);
  }

  error(message, timeout = 3000) {
    return this.show(message, 'alert-danger', timeout);
  }
}
