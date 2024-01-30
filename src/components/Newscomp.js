import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";
import gs from './jsfile/general.json';
import gssc from './jsfile/science.json';
import gst from './jsfile/technology.json';
import gssp from './jsfile/sports.json';
import gsh from './jsfile/health.json';
import gse from './jsfile/entertainment.json';
import gsb from './jsfile/business.json';
const Newscomp = (props) => {
  // initializing set data
  const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [totalResults, setTotalResults] = useState(0);

useEffect(()=>{
  if(props.category==='general'){
    setArticles(gs.articles);
    }
  else if(props.category==='science'){
    setArticles(gssc.articles);
    }
  else if(props.category==='technology'){
    setArticles(gst.articles);
    }
  else if(props.category==='sports'){
    setArticles(gssp.articles);
    }
  else if(props.category==='health'){
    setArticles(gsh.articles);
    }
  else if(props.category==='entertainment'){
    setArticles(gse.articles);
    }
  else if(props.category==='business'){
    setArticles(gsb.articles);
    }   
},[])
  
  console.log(articles);

  const { mode, altermode } = props;
  const stylingbody = {
    color: mode,
    backgroundColor: altermode,
  };
  return (
    // Cleanup function (optional) runs when component unmounts or before next effect execution
    <>
      <div style={stylingbody}>
        <h1 className="text-center">
          <b>{props.category} highlights</b>
        </h1>
          <div className="container">
            <div className="row">
              {articles.length > 0 &&
                articles.map((element) => (
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
          </div>
        <div className="container d-flex justify-content-evenly"></div>
        <button type="button" className="btn btn-dark mx-5">Previuos</button>
        <button type="button" className="btn btn-dark mx-5">next</button>
      </div>
    </>
  );
  // This JSX content is returned after the above code runs
};
Newscomp.defaultProps = {
  // proptype can also be written
  country: "in", // it's mean by default country is india
  ps: 6,
  category: "general",
};
Newscomp.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
  country: PropTypes.string,
};

export default Newscomp;

// just above randor
/* 
// presa = async () => {
  //   // console.log('pres')
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
  //     page - 1
  //   }&pageSize=${props.ps}`;
  //   // fetchng api;
  //   setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   console.log(parseddata);
  //   setState({
  //     page: page - 1,
  //     loading: false,
  //     articles: parseddata.articles,
  //   });
  // };
  // from news api we can see pagesize(articles in 1 page) and total result
  // nexta = async () => {
  //   // console.log('neata')
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     props.country
  //   }&category=${
  //     props.category
  //   }&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=${
  //     page + 1
  //   }&pageSize=${props.ps}`;
  //   // fetchng api;
  //   // loading will run till this url is hitted and getting fetched
  //   setState({ loading: true });
  //   let data = await fetch(url);
  //   let parseddata = await data.json();

  //   console.log(parseddata);
  //   setState({
  //     page: page + 1,
  //     articles: parseddata.articles,
  //     loading: false,
  //   });
  // };
*/

// <button
//   type="button"
//   disabled={page <= 1}
//   className="btn btn-dark mx-3"
//   onClick={presa}
// >
//   &larr; Prev
// </button>
// <button
//   type="button"
//   disabled={
//     page >=
//     Math.ceil(totalResults / props.ps)
//   }
//   className="btn btn-dark mx-3"
//   onClick={nexta}
// >
//   Next &rarr;
// </button>




  // const updateNews = async () => {
  //   // console.log('cdm');
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=70dc53c6270d49b7a04a54041fc82b0b&page=1&pageSize=${props.ps}`;
  //   // fetchng api;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   let parseddata = await data.json();
  //   // console.log(parseddata)
  //   setArticles(parseddata.articles);
  //   setTotalResults(parseddata.totalResults);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   // This function runs after the JSX content is returned
  //   document.title = `News Monkey -${props.category}`;
  //   updateNews();
  // }, [props.category, props.country, props.ps]);