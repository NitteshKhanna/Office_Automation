import { Component } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user_name =false
  user_names
  t:string=''
  b:string
  C=""
  
  ngOnInit()
  {
    console.log("j")
    axios.get("http://localhost:5000/user_name").then(res =>{
      console.log(res.data[0][0])
      this.user_names=res.data
    })
  }
  go()
  {
    for (let i=0;i<this.user_names.length;i++)
    {
      if(this.user_names[i][0]==this.b)
      {
        this.C="already taken";
        document.getElementById("availability").style.color="red";
        break;
      }
      if(this.b=="")
      this.C=""
      else
      {
        this.C="Available"
        document.getElementById("availability").style.color="green";

      }
    }
    
  }
  // count=document.getElementsByTagName("input").item(5).value
}
