import React, { Component } from "react";
import "../App.css";
import mainbg from "../41.jpg";
export default class Main extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    console.log("mounted");

    const url = "https://api.randomuser.me/";

      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        loading: null,
        person: data.results[0],
        titleName: data.results[0].name.title,
        fname: data.results[0].name.first,
        lname: data.results[0].name.last,
        country: data.results[0].location.country,
        gender: data.results[0].gender,
        age: data.results[0].dob.age,
        streetNum: data.results[0].location.street.number,
        streetName: data.results[0].location.street.name,
        city: data.results[0].location.city,
        state: data.results[0].location.state,
        postCode: data.results[0].location.postcode,
        description: data.results[0].location.description,
        phone: data.results[0].phone,
        cell: data.results[0].cell,
        email: data.results[0].email,
        picture: data.results[0].picture.large,
      });

  }

  render() {
    return (
      <div>
         <span class="unsupported"> <h1>⚠</h1> <h3> This site  is currently unavailable for larger screens. Please visit using your
        mobile device or wait until the desktop version is released. Sorry for the inconvenience, thank you for your patience.</h3></span>
      <div class="main">
       
        <div className='cover'>

          <div className='display-picture'>
            <img className='dp' src={this.state.picture} />
            <div className='title-name'>{this.state.fname}</div>
          </div>
        </div>

        <div className='main-wrapper'>
          <div className='info-wrapper'>
            <ul>
              <li>
                Full name: {this.state.titleName} {this.state.fname} {this.state.lname}
              </li>
              <li>
                <i class='fa fa-street-view'></i> Lives in <i>{this.state.country}</i>
              </li>
              <li>
                <i class='fa fa-venus'></i> Is a <i>{this.state.gender}</i>
              </li>
              <li>
                <i class='fa fa-clock'></i> Is <i>{this.state.age}</i> years old
              </li>
            </ul>
          </div>

          <div className='info-wrapper'>
            {/* <h4> Address info </h4> */}

            <ul>
              <li>Street: {this.state.streetNum} {this.state.streetName}</li>
              <li>City: {this.state.city} </li>
              <li>State: {this.state.state} </li>
              <li>Post Code: {this.state.postCode} </li>
              <li>Description: {this.state.description} </li>
            </ul>
          </div>

          <div className='info-wrapper'>
            <ul>
              <li>Phone: {this.state.phone}</li>
              <li>Cell: {this.state.cell}</li>
              <li>Email: {this.state.email}</li>
            </ul>
          </div>
          <button
            className='generate'
            onClick={async () => {
              console.log("Buytton clc");
              {
                console.log("mounted");

                const url = "https://api.randomuser.me/";

                const response = await fetch(url);
                const data = await response.json();
                this.setState({
                  loading: null,
                  person: data.results[0],
                  titleName: data.results[0].name.title,
                  fname: data.results[0].name.first,
                  lname: data.results[0].name.last,
                  country: data.results[0].location.country,
                  gender: data.results[0].gender,
                  age: data.results[0].dob.age,
                  streetNum: data.results[0].location.street.number,
                  streetName: data.results[0].location.street.name,
                  city: data.results[0].location.city,
                  state: data.results[0].location.state,
                  postCode: data.results[0].location.postcode,
                  description: data.results[0].location.description,
                  phone: data.results[0].phone,
                  cell: data.results[0].cell,
                  email: data.results[0].email,
                  picture: data.results[0].picture.large,
                });
              }
            }}
          >
            Generate New
          </button>
        </div>
      </div>
      </div>
    );
  }
}
