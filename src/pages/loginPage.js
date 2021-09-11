//package
import React, { Fragment } from 'react';
import Typical from 'react-typical';

//GoogleComponent
import { GoogleLogin, GoogleLogout } from 'react-google-login';

class loginPage extends React.Component {
  state = {
    loginBtn: true,
    isSigned: true,
    profile: '',
  };

  clientid = '883733627109-upebgi6d8e68k58vbh5ggvc4rnf60ujp.apps.googleusercontent.com';

  successLogin = (resp) => {
    this.setState({
      profile: resp.profileObj,
      loginBtn: false,
      isSigned: false,
      isOut: false,
    });
  };

  failureLogin = (resp) => {
    console.log('Err: ', resp);
  };

  successLogout = () => {
    this.setState({
      loginBtn: true,
      isSigned: true,
      isOut: true,
    });
  };

  render() {
    return (
      <Fragment>
        <section className="mt-3">
          <div className="container">
            {this.state.isSigned ? (
              <div className="container">
                <h1 className="text-center">Welcome to MHealthBank</h1>
                <br />
                <p className="text-center">Sign In with your Google Account</p>
                <br />
              </div>
            ) : (
              <div className="container">
                <h1>Dashboard</h1>
                <div className="container d-flex justify-content-center">
                  <img className="rounded-circle" src={this.state.profile.imageUrl} alt="pict" />
                </div>
                <Typical className="text-center mt-4 display-5" steps={['Hi,', 700, this.state.profile.name, 900]} />
                <h4 className="text-center mt-4">Your email is: {this.state.profile.email}</h4>
              </div>
            )}
            <div className="container d-flex justify-content-center mt-3">
              {this.state.loginBtn ? (
                <GoogleLogin clientId={this.clientid} buttonText="Sign In" onSuccess={this.successLogin} onFailure={this.failureLogin} cookiePolicy={'single_host_origin'} />
              ) : (
                <GoogleLogout clientId={this.clientid} buttonText="Sign Out" onLogoutSuccess={this.successLogout} />
              )}
            </div>
            <br />
            {this.state.isOut ? <p className="text-success text-center">You have been logged out from your account</p> : null}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default loginPage;
