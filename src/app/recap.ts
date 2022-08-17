const usernabe: string = 'nicobytes';

const sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 2);

class Person {
  private age: number;
  private name: string;

  constructor(age: number, name: string) {
    this.age = 0;
    this.name = '';
  }

  public getAge(): number {
    return this.age;
  }
}

const ins_nico = new Person(15, 'Molina');

const vName = ins_nico.getAge();

class Person2 {

  constructor(private age: number, private name: string) {}

  public getAge(): number {
    return this.age;
  }
}

const ins_nico2 = new Person2(15, 'Molina');

const vName2 = ins_nico2.getAge();
