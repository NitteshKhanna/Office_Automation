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
  stboolean=false
  user_nameboolean
  
  ngOnInit()
  {
    document.getElementById("form").addEventListener('submit', (event) =>{
      if (!(this.stboolean && this.user_nameboolean))
        {
          event.preventDefault();
        }
      
    })
  }
  
  username()
  {
 
    var entered=(<HTMLInputElement>document.getElementById("i6")).value
 
    if (entered=="")
    {
      this.usernamecheck=""
      return
    }
 
 
    axios.post("http://localhost:5000/user_name",{"username":entered}).then(res =>{
 
    var status=res.status
 
    if (status==202)
      {
        this.usernamecheck="Available"
        document.getElementById("usernamecheck").style.color="green";
        this.user_nameboolean=true
      }
 
    if (status==200)
      {
        this.usernamecheck="Taken";
        this.user_nameboolean=false;
        document.getElementById("usernamecheck").style.color="red";
      }
 
    })
  }
  
  
  password()
  {
    
    var password=(<HTMLInputElement>document.getElementById("i7")).value
    let strength=(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)? 2 : 0) + (password.length>=8?3:0) + (/[A-Z]/.test(password)? 1:0) + (/[a-z]/.test(password)?1:0) + (/\d/.test(password)?1:0)

    if(strength>6)
    {
      this.strength="Strong";
      document.getElementById("st1").style.background="#5fff03";
      document.getElementById("st2").style.background="#5fff03";
      document.getElementById("st3").style.background="#5fff03";
      this.stboolean=true;
    }
 
    else if (strength>4)
    {
      this.strength="Ok"
      this.stboolean=false;
      document.getElementById("st1").style.background="#ffee00";
      document.getElementById("st2").style.background="#ffee00";
      document.getElementById("st3").style.background="#c9e6e4";
    }
 
    else if (password.length==0)
    {
      this.strength="";
      this.stboolean=false;
      document.getElementById("st1").style.background="#c9e6e4";
      document.getElementById("st2").style.background="#c9e6e4";
      document.getElementById("st3").style.background="#c9e6e4";
    }
 
    else
    {
      this.strength="Weak";
      this.stboolean=false;
      document.getElementById("st1").style.background="#ff0000";
      document.getElementById("st2").style.background="#c9e6e4";
      document.getElementById("st3").style.background="#c9e6e4";
    }
 
  }

  check(n:number)
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