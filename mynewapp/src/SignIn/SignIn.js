import React, { Component } from 'react';
import 'tachyons';
import './SignInForm.css'

class SignIn extends Component {
  render(){
  return (
    <div>
    <main class="pa4 black-80">
  <form class="measure center">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f4 fw6 ph0 mh0">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent  w-100" type="email" name="email-address"  id="email-address" />
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent  w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div class="">
      <input class="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" type="submit" value="Sign in" />
    </div>

  </form>
</main>
</div>
      );
    }
  }

  export default SignIn;
