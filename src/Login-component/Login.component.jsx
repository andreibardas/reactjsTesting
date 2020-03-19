import React from "react";
import "./Login.styles.scss";
import axios from 'axios';


class Login extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      password: '',
      email: '',
    }
  }

  componentDidMount(){
    
  }


  changeHandler = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  onStoreToken(tokenData) {
    localStorage.setItem("token", tokenData);
  }

  
  submitHandler = (e) => {
    e.preventDefault()

    

    axios.post('https://webdesigns.ro:10000/thecon2/user/login', this.state)
    .then(response =>{
      console.log(response.data[0].token)
      console.log(response)
      this.onStoreToken(response.data[0].token)

      axios.get('https://webdesigns.ro:10000/thecon2/user/all', {headers})
    .then(response => {
      console.log(response)
  })
  .catch(error => {
      console.log(error)
  })

    }).catch(error => {
      console.log(error)
    })

    const headers = {
      'Authorization': localStorage.getItem("token"),
      'validationDate': '25/05/2001',
    }


    
   
  }

  render() {
    const {password, email} = this.state

    return (
      <div className="Login">

        <form className="Form" onSubmit = {this.submitHandler}>

          <label>
            Email:
    <input type="text" name="email" value={email} onChange={this.changeHandler} />
          </label>

          <label>
            Password:
    <input type="text" name="password" value={password} onChange={this.changeHandler} />
          </label>

          <button type="submit" >Submit</button>

        </form>

      </div>
    );
  }
}



export default Login;