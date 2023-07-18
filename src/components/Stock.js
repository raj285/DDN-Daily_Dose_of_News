import React, { Component } from "react";
// import PropTypes from "prop-typnpes";
// basically i will need a container left and right;
export default class Stock extends Component {
  constructor(){
    super();
    this.state={
      top_gainers:[],
      top_losers:[],
      most_actively_traded:[]
    }
  }
  async componentDidMount(){
//.slice(0, 5); used here for 5 rows;
    let url="https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=ARM73OL3ODVX0ZU8";
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(data);
    this.setState({top_gainers:parsedData.top_gainers.slice(0, 5)})
    this.setState({top_losers:parsedData.top_losers.slice(0, 5)})
    this.setState({most_actively_traded:parsedData.most_actively_traded.slice(0, 5)})
  }
  
  render() {
    const {altermode,mode}=this.props;
    const stylingbody={
      color:mode,
      backgroundColor:altermode,
    }
    return (
      <div style={stylingbody}>
        <div className="container text-center" >
          <div className="row align-items-start" >
            <div className="col mx-2">
                <h5>Top Gainers</h5>
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.top_gainers.map((element)=>{
                  return <tr key={element.ticker}>
                          <th scope="row">1</th>
                          <td>{element.ticker}</td>
                          <td>{element.change_amount}</td>
                          <td>{element.change_percentage}</td>
                  </tr>
                })}
                </tbody>
                </table>
            </div>
            <div className="col mx-2">
                <h5>Top Loosers</h5>
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.top_losers.map((element)=>{
                  return <tr key={element.ticker}>
                          <th scope="row">1</th>
                          <td>{element.ticker}</td>
                          <td>{element.change_amount}</td>
                          <td>{element.change_percentage}</td>
                  </tr>
                })}
                </tbody>
                </table>
            </div>
            <div className="col mx-2">
                <h5>Most Traded</h5>
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.most_actively_traded.map((element)=>{
                  return <tr key={element.ticker}>
                          <th scope="row">1</th>
                          <td>{element.ticker}</td>
                          <td>{element.change_amount}</td>
                          <td>{element.change_percentage}</td>
                  </tr>
                })}
                </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
