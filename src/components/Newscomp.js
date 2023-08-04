import React, { useEffect,useState} from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const  Newscomp = (props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(0)
 
  const updateNews = async() =>{
    // let url=`https://gnews.io/api/v4/search?q=example&country=${props.country}&category=${props.category}&apikey=31b0d34637a78ac885b15cd02139c2bd`
    let url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&max=100&country=${props.country}&apikey=31b0d34637a78ac885b15cd02139c2bd`
    // fetchng api;
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json(); 
    // console.log(parseddata)
    setArticles(parseddata.articles)
    setTotalResults(parseddata.totalResults)
    setLoading(false)
  }
  useEffect(()=>{
    document.title = `News Monkey -${props.category}`;
    updateNews();
  }, [props.category, props.country, props.ps]);
const fetchMoreData =async()=>{
    // let url=`https://gnews.io/api/v4/search?q=example&country=${props.country}&category=${props.category}&apikey=31b0d34637a78ac885b15cd02139c2bd`
    let url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&max=100&country=${props.country}&apikey=31b0d34637a78ac885b15cd02139c2bd`
    // fetchng api;
    // setState({ loading: true });
    setLoading(true)
    let data = await fetch(url);
    let parseddata = await data.json();
    // console.log(parseddata)
    setArticles((prevArticles) => [...prevArticles, ...parseddata.articles])
    setTotalResults(parseddata.totalResults)
    setLoading(false)
    setPage(page+1)
  }
  
    const {mode,altermode}=props;
    const stylingbody={
      color:mode,
      backgroundColor:altermode,
    }
    return (
      <>
      <div style={stylingbody}>
        <h1 className="text-center">
          <b>{props.category} highlights</b>
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
          {
            articles.length > 0 &&
            articles.map((element) => (
              <div className="col-md-4 my-5" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageurl={element.image}
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
        </InfiniteScroll>
        <div className="container d-flex justify-content-evenly">
        </div>
      
      </div>
      </>
    );
}
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
