import { Component } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  register = {
    name: '',
    email: '',
    password: '',
  }

  widthImg = 100;
  box= {
    width: 100,
    height: 200,
    background: 'red',
  }

  aProducts : IProduct[] = [ { name: 'Model 1', rank: 565, image: './assets/images/1.jpg', category: 'all', }, { name: 'Model 2', rank: 356, image: './assets/images/2.jpg' }, { name: 'Model 3', rank: 34, image: './assets/images/3.jpg' }, { name: 'Model 4', rank: 23, image: './assets/images/4.jpg' }, { name: 'Model 5', rank: 34, image: './assets/images/5.jpg' }, { name: 'Model 6', rank: 3434, image: './assets/images/6.jpg' } ]
  vInvalid : string = 'invalid';
  color: string = 'verde';

  aEmojis : string[] = [ '😂' ,'🐦', '🐳','🌮', '💚']
  aNewName : string = '';

  title = 'my-store';
  age = 18;
  name = 'Molina';
  btnDisable = true;
  img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWQT140C43jTAHoRp84leGvbHKDlhabHuvg&usqp=CAU"

  vObj = {
    a: "one",
    b: 2,
    c: true,
    d: "https://th.bing.com/th/id/OIF.F9s3onLV0ck6cce3Z3ypHg?pid=ImgDet&rs=1",
    x: "",
    y: 10,
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

  onScroll(event : Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName= (e : Event) => {
    const element = e.target as HTMLInputElement;
    console.log(element.value);

    this.vObj = {
      ...this.vObj,
      a: element.value
    }
  }

  addName() {
    this.aEmojis.push(this.aNewName);
    this.aNewName = '';
  }
  mDeleteElement(pIndex: number) {
    this.aEmojis.splice(pIndex, 1);
  }

  onRegister() {
  }
}
