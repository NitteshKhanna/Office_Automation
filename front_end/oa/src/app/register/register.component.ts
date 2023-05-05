import { Component } from '@angular/core';
import axios from 'axios'
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
    axios.get("http://localhost:5000/user_name").then(res => {
      console.log(res.data)
      this.arr=res.data
    })
  }
  username()
  {
    var entered=(<HTMLInputElement>document.getElementById("i6")).value
    for (var i=0; i<this.arr.length;i++)
    {
      if(entered.length>0)
      {
        if(entered==this.arr[i][0])
        {
          console.log("true");
          this.usernamecheck="Taken";
          document.getElementById("usernamecheck").style.color="red";
          break;
        }
        else
        {
          console.log("false");
          this.usernamecheck="Available";
          document.getElementById("usernamecheck").style.color="green";
        }
      }
    }
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