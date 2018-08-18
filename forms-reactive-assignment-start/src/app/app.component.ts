import { OnInit, Component } from '../../node_modules/@angular/core';
import { FormGroup, FormControl, Validators } from '../../node_modules/@angular/forms';
import { Observable } from '../../node_modules/rxjs';
import { resolve } from 'path';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'project': new FormControl(null, [Validators.required], this.asyncForbiddenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('stable')
    });
  }

  forbiddenProjectName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Test') {
      return { 'forbiddenProjectName': true };
    }
    return null;
  }

  asyncForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'forbiddenProjectName': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm);
  }

}
