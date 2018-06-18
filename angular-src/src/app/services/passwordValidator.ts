import {FormControl} from "@angular/forms";

export class PasswordValidator {

  static getPasswordValidator() {
    return function pwValidator(control: FormControl): { [s: string]: boolean } {

     
      if (control.value.match(/^123/)) {
        return {invalidPassword: true};
      }

      return null;
    }
  }
}
