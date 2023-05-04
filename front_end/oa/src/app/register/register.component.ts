import { Component } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user_name =false
  a=0
  t:string=''
  b=0
  ngOnInit()
  {
    console.log("j")
    axios.post("http://localhost:5000/user_name",{"user_name":"this.a"}).then(res =>{
      console.log(res.data["status"])
    })
  }
  go()
  {
    this.a++;
    this.b=this.a;
    if(this.a==1)
    console.log("dd")
    
  }
  // count=document.getElementsByTagName("input").item(5).value
}
