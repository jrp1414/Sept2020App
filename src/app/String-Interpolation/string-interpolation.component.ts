import { Component } from "@angular/core";

@Component({
    selector:"app-si",
    templateUrl:"./string-interpolation.component.html"
})
export class StringInterpolationComponent{
//njfdnvjndjvnjdfnvjnfdjv - Back End API
num1=10;
name="Ram";
userFlag=true;
num2:number = 11;
name2:string = "Gopal";
userFlag2:boolean= true;
someValue:any=true;
person:Person = new Person();


constructor() {
    // this.num1 = "10" as number;
    this.someValue = 25;
    this.person.Age=10;
    this.person.Name= "Umar";
    this.person.Address = new Address();
    this.person.Address.AddLine1 = "Pune";
}

GetFullName():string{
return this.name+ " "+this.name2;
}

}

class Person{
 Name:string;
 Age:number;
 Address:Address;
}
class Address{
    AddLine1:string;
}