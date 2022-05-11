import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Belajar Angular - Form Sederhana';
  nama = 'Syahla Sasikirana';
  fungsiTampil(param: string) {
    alert(param)
  }

  fungsiKonsol(evt: string) {
    console.warn(evt)
  }

  getVal(val: string) {
    console.warn(val)
  }
}
