import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-store';
  age = 18;
  name = 'Molina';
  btnDisable = true;
  img = "https://th.bing.com/th/id/OIF.F9s3onLV0ck6cce3Z3ypHg?pid=ImgDet&rs=1"

  vObj = {
    a: "one",
    b: 2,
    c: true,
    d: "https://th.bing.com/th/id/OIF.F9s3onLV0ck6cce3Z3ypHg?pid=ImgDet&rs=1"
  }

  toogleButton() {
    this.btnDisable = !this.btnDisable;
  }

  mIncreaseAge(){
    this.vObj= {
      ...this.vObj,
      b: this.vObj.b + 1
    }
  }
}
