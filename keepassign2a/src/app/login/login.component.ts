import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from './loginuser';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup:FormGroup;
  errMessage;
  constructor(private routerService: RouterService, private authService:AuthenticationService) { }

  ngOnInit() {
    this.formGroup=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.minLength(5)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),

    });
  }

  loginSubmit() {   
    //判断输入,但是有个疑问，html规定写了才能点击submit
    // if (this.formGroup.value.email && this.formGroup.value.email.errors) {
    //   this.errMessage = 'username has error!';
    // }
    // if (this.formGroup.value.password && this.formGroup.value.password.error) {
    //   console.log("pass"+this.formGroup.value.password.error);
    //   this.errMessage += ' password has error!';
    // }
    //与http验证用户登录,对象可以直接解析json对象
    //用户验证登录然后把token存本地，守卫通过判断token来控制路由
    const loginUser=new LoginUser(this.formGroup.value.email,this.formGroup.value.password);
    this.authService.authenticateUser(loginUser).subscribe(
      res=>{
        console.log(res);
        this.authService.setBearerToken(res['accessToken']);
        this.routerService.routeToDashboard();
      },
      error=>{
        console.log(error);
        
      }
    );
    
  }

}
