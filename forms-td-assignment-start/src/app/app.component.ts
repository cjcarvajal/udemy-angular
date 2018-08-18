import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedSubscription: string;
  inputEmail = '';
  submitted = false;

  ngOnInit(): void {
    this.selectedSubscription = 'advanced';
  }

  onSubmit(form: HTMLFormElement) {
    this.submitted = true;
    this.inputEmail = form.value.email;
    console.log(form);
  }
}
