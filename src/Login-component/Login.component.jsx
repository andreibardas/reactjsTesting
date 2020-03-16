import React from "react";
import "./Login.styles.scss";


// o componenta poate fi fie functie fie clasa (se spune ca componentele functii au o performanta mai buna)
// de obicei gasesti clase atunci cand ai state-uri
class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({firstName: event.target.value});
      }
      handleChange2(event) {
        this.setState({lastName: event.target.value});
      }
    
      handleSubmit(event) {
        alert('This name was submitted: ' +this.state.firstName +" " +this.state.lastName);
        event.preventDefault();
      }


  render() {

    return (
      // a se observa diferenta intre JSX si HTML la proprietati precum className (JSX) in loc de classname(HTML)
      <div className="Login">
        {/* la fel si cu submit */}
        {/* btw, unde vezi {} inseamna ca inauntru e javascript */}
        <form className="Form" onSubmit={this.handleSubmit}>
          <label>
            First Name:
    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange1}/>
          </label>

          <label>
            Last Name:
    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange2}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default Login;