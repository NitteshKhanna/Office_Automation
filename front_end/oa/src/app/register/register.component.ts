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
  pp=0
  strength=""
  ngOnInit()
  {
    
  }
  username()
  {
    console.log("username")
    var entered=(<HTMLInputElement>document.getElementById("i6")).value
    axios.post("http://localhost:5000/user_name",{"username":entered}).then(res =>{
      var status=res.status
      if (status==202)
      {
        console.log("Available")
        this.usernamecheck="Available"
        document.getElementById("usernamecheck").style.color="green";
      }
      if (status==200)
      {
        console.log("Taken")
        this.usernamecheck="Taken"
        document.getElementById("usernamecheck").style.color="red";
      }
    })
  }
  password()
  {
    var password=(<HTMLInputElement>document.getElementById("i7")).value
    
    let strength=(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)? 2 : 0) + (password.length>=8?3:0) + (/[A-Z]/.test(password)? 1:0) + (/[a-z]/.test(password)?1:0) + (/\d/.test(password)?1:0)
    console.log(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)? 2 : 0)
    console.log(password.length>=8?3:1,strength,password)
    if(strength>6)
    this.strength="Strong"
    else if (strength>4)
    this.strength="Ok"
    else if (password.length==0)
    this.strength=""
    else
    this.strength="Weak"
  }

    test(n:number)
    {
      var sum=0,name="i"+n;
      this.inp[n]=0;
      
      
      this.inp.forEach( (value)=>{sum+=value;});
      if(sum ==0)
      {
        this.details=true
        document.getElementById("submit").style.background="#4CAF50";
      }
      else
      {
        this.details=false;
        document.getElementById("submit").style.background="#b8ceb9";
      }
    }
  
}