import React from 'react'; 
import { Redirect } from 'react-router';
import {Link, BrowserRouter}  from 'react-router-dom';   
import { Router } from 'react-router';

class SignIn extends React.Component{

  constructor(props) {
       super(props);
                
       this.submit = this.submit.bind(this); 
       this.handleSubmit = this.handleSubmit.bind(this);
    };
 
  submit(){
   
    if($("#firstName").val().length == 0 || $("#password").val().length == 0){
       alert("Fields are empty");
       return;
     }

    var users = getUsers();  

    var isSignedUp = false;

    var mailIsUnique = true;

    if(users.usersBase==null){
        var user = {
           id:1,
           login:$("#firstName").val(),
           password:$("#password").val() 
      };
 
      CurrentUser = user;
      users = [];

      users.usersBase.push(user);
      setUsers(users);


    }
    else{

      var user = {
           id:users.usersBase[users.usersBase.length-1].id+1,
           login:$("#firstName").val(),
           password:$("#password").val()
      };

     users.usersBase.forEach(function(element){
       if(element.login == user.login&& element.password == user.password){ 
          isSignedUp = true;
          CurrentUser = element;  
          }
        });
 
      users.usersBase.forEach(function(element){
       if(element.login == user.login){
           mailIsUnique = false; 
          }
        });

        if(mailIsUnique&&!isSignedUp){
          users.usersBase.push(user);
          CurrentUser = user;
          setUsers(users);
         }
         else if(!mailIsUnique&&!isSignedUp){
          alert("Mail exists already");
         }
      }
  };

   handleSubmit(e) {
        e.preventDefault(); 
      }

  render(){return (<section className = "signUp row">
        <div className="form text-secondary offset-lg-1 col">
                <h4 className="  title row" id="signUpTitle">Sign In</h4>
                <form onSubmit={this.handleSubmit} id="SignIn row">

                      <div className="form-group row">
                          <input type="text" className="form-control col-lg-8" required name="FirstName" autoComplete="given-name" pattern="[a-zA-Z]+" placeholder="User name" defaultValue="admin" id="firstName"/>
                      </div>

                       <div className="form-group  row">
                            <input type="password" className="form-control col-lg-8" name="Password" pattern=".{6,}" required placeholder="Password" defaultValue="123456" id="password"/>
                        </div>

                        <div className="row submitBtnSection">
                             <Link to="/"><button id="submitBtn" onClick={this.submit} className="btn btn-dark btn-lg ">Sign In</button></Link>
                        </div>

                         
                </form>
            </div>

            <div className="signUpInfo signUpMessage col row d-flex justify-content-center">
               
                <img className="img-thumbnail" src="https://denverwebsitedesigns.com/userfiles/649/images/Homepage/thumb1.jpg" alt="img"/>
              
                <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident earum error fugit aut cum, ex, eius alias maxime, iure maiores deleniti neque, sed beatae ad deserunt ullam sit vero dolore.</p>
            </div>

      </section>);
  }
}

module.exports = SignIn;
