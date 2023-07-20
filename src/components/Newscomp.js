import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";


// const qInTitle = "general"; // Add your search keyword here
// const from = ""; // Add your date here (e.g., "2023-07-20")
// const apiKey = "70dc53c6270d49b7a04a54041fc82b0b"; // Add your News API key here


export default class Newscomp extends Component {
  static defaultProps = {
    // proptype can also be written
    country: "in", // it's mean by default country is india
    ps: 6,
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
    country: PropTypes.string,
  };
  constructor(props) {
    super(props);
    // console.log(`hello i am a constructor from newscomp`)
    // we can change state of card below from here only
    // here we are creating a state
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `News Monkey -${this.props.category}`;
  } // it is a life cycle method , after render it will run
  // 1->constructor ,2-> render,3-> cdm
  //  async will wait(await) till the promise get resolves
  async componentDidMount() {
    // console.log('cdm');
    let proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=1&pageSize=${this.props.ps}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=1&pageSize=${this.props.ps}`;
    // fetchng api;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    // console.log(parseddata)
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
  }
  presa = async () => {
    // console.log('pres')
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
      this.state.page - 1
    }&pageSize=${this.props.ps}`;
    // fetchng api;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({
      page: this.state.page - 1,
      loading: false,
      articles: parseddata.articles,
    });
  };
  // from news api we can see pagesize(articles in 1 page) and total result
  nexta = async () => {
    // console.log('neata')
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
      this.state.page + 1
    }&pageSize=${this.props.ps}`;
    // fetchng api;
    // loading will run till this url is hitted and getting fetched
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();

    console.log(parseddata);
    this.setState({
      page: this.state.page + 1,
      articles: parseddata.articles,
      loading: false,
    });
  };
  render() {
    const {mode,altermode}=this.props;
    const stylingbody={
      color:mode,
      backgroundColor:altermode,
    }
    return (
      <div style={stylingbody}>
      <div  className="container my-3" >
        <h1 className="text-center">
          <b>{this.props.category} highlights</b>
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {/* if loading happening don't show below code  thats y we used loading here*/}
          {!this.state.loading &&
            this.state.articles.length > 0 &&
            this.state.articles.map((element) => (
              <div className="col-md-4 my-5" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.urlToImage}
                  newsUrl={element.url}
                  date={element.publishedAt}
                  publisher={
                    element.author === null ? "Unknown" : element.author
                  }
                  studio={element.source.name}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-evenly">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark mx-3"
            onClick={this.presa}
          >
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.props.ps)
            }
            className="btn btn-dark mx-3"
            onClick={this.nexta}
          >
            Next &rarr;
          </button>
        </div>
      </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";

// export default class Newscomp extends Component {
//   static defaultProps = {
//     // proptype can also be written
//     country: "in", // it's mean by default country is india
//     ps: 6,
//     category: "general",
//   };
//   static propTypes = {
//     category: PropTypes.string,
//     pageSize: PropTypes.number,
//     country: PropTypes.string,
//   };
//   constructor(props) {
//     super(props);
//     // console.log(`hello i am a constructor from newscomp`)
//     // we can change state of card below from here only
//     // here we are creating a state
//     this.state = {
//       articles: [],
//       loading: false,
//       page: 1,
//     };
//     document.title = `News Monkey -${this.props.category}`;
//   } // it is a life cycle method , after render it will run
//   // 1->constructor ,2-> render,3-> cdm
//   //  async will wait(await) till the promise get resolves
//   async componentDidMount() {
//     // console.log('cdm');
//     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=1&pageSize=${this.props.ps}`;
//     // fetchng api;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     // console.log(parseddata)
//     this.setState({
//       articles: parseddata.articles,
//       totalResults: parseddata.totalResults,
//       loading: false,
//     });
//   }
//   presa = async () => {
//     // console.log('pres')
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
//       this.state.page - 1
//     }&pageSize=${this.props.ps}`;
//     // fetchng api;
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     console.log(parseddata);
//     this.setState({
//       page: this.state.page - 1,
//       loading: false,
//       articles: parseddata.articles,
//     });
//   };
//   // from news api we can see pagesize(articles in 1 page) and total result
//   nexta = async () => {
//     // console.log('neata')
//     let url = `https://newsapi.org/v2/top-headlines?country=${
//       this.props.country
//     }&category=${
//       this.props.category
//     }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
//       this.state.page + 1
//     }&pageSize=${this.props.ps}`;
//     // fetchng api;
//     // loading will run till this url is hitted and getting fetched
//     this.setState({ loading: true });
//     let data = await fetch(url);
//     let parseddata = await data.json();

//     console.log(parseddata);
//     this.setState({
//       page: this.state.page + 1,
//       articles: parseddata.articles,
//       loading: false,
//     });
//   };
//   render() {
//     const {mode,altermode}=this.props;
//     const stylingbody={
//       color:mode,
//       backgroundColor:altermode,
//     }
//     return (
//       <div style={stylingbody}>
//       <div  className="container my-3" >
//         <h1 className="text-center">
//           <b>{this.props.category} highlights</b>
//         </h1>
//         {this.state.loading && <Spinner />}
//         <div className="row">
//           {/* if loading happening don't show below code  thats y we used loading here*/}
//           {!this.state.loading &&
//             this.state.articles.length > 0 &&
//             this.state.articles.map((element) => (
//               <div className="col-md-4 my-5" key={element.url}>
//                 <Newsitem
//                   title={element.title}
//                   description={element.description}
//                   imageurl={element.urlToImage}
//                   newsUrl={element.url}
//                   date={element.publishedAt}
//                   publisher={
//                     element.author === null ? "Unknown" : element.author
//                   }
//                   studio={element.source.name}
//                 />
//               </div>
//             ))}
//         </div>
//         <div className="container d-flex justify-content-evenly">
//           <button
//             type="button"
//             disabled={this.state.page <= 1}
//             className="btn btn-dark mx-3"
//             onClick={this.presa}
//           >
//             &larr; Prev
//           </button>
//           <button
//             type="button"
//             disabled={
//               this.state.page >=
//               Math.ceil(this.state.totalResults / this.props.ps)
//             }
//             className="btn btn-dark mx-3"
//             onClick={this.nexta}
//           >
//             Next &rarr;
//           </button>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }
