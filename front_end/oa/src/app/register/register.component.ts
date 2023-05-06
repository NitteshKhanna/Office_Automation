import { Component } from '@angular/core';
import axios, { Axios } from 'axios'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  arr
  usernamecheck=""
  count=0
  inp=[-1,-1,-1,-1,-1,-1,-1]
  details=false
  ngOnInit()
  {
    
  }
  username()
  {
    var entered=(<HTMLInputElement>document.getElementById("i6")).value
    axios.post("http://localhost:5000/user_name",{"username":entered}).then(res =>{
      var status=res.status
      if (status==404)
      console.log("Available")
      if (status==200)
      console.log("Taken")
    })
  }
    test(n:number)
    {

      console.log(this.inp)
      var sum=0,name="i"+n
      
        this.inp[n]=0;
      
      
      this.inp.forEach( (value)=>{sum+=value;})
      if(sum ==0)
      {
        this.details=true
        document.getElementById("submit").style.background="#4CAF50";
        console.log("changed")
      }
      else
      {
        this.details=false;
        document.getElementById("submit").style.background="#b8ceb9";
      }
    }
  
}