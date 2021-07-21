import React from "react";

export default class FetchRandomUser extends React.Component {
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
    });

    //   const personInfo = {
    //       fname: this.state.person.name.first
    //   }

    console.log(this.state.titleName);
  }
  render() {
    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>
            <i class='fa fa-spinner loader'></i>
          </div>
        ) : (
          <div>
            {" "}
            Name: {this.state.fname} {this.state.lname}{" "}
          </div>
        )}
      </div>
    );
  }
}
