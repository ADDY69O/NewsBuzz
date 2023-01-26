import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  // document.title = ` ${this.capitalizeFirstLetter(
  //   props.category
  // )} - NewsMonkey`;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updatehandle = async () => {
    // let lol = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=035b67e8657b49d3b3da845bbc3a0114&page=${this.state.page}&pagesize=${props.pageSize}`;
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let prasedData = await data.json();
    props.setProgress(70);
    console.log(prasedData);
    setarticles(prasedData.articles);
    settotalResults(prasedData.totalResults);
    setloading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updatehandle();
    // eslint-disable-next-line
  }, []);

  // const handlenext = async () => {
  //   setpage(page + 1);
  //   updatehandle();
  // };
  // const handleprev = async () => {
  //   setpage(page - 1);
  //   updatehandle();
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pagesize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let prasedData = await data.json();
    setarticles(articles.concat(prasedData.articles));
    settotalResults(prasedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "90px 0 30px  0 " }}>
        {capitalizeFirstLetter(props.category)} Top Headlines
      </h1>
      {loading && <Spinner />}
      {/* {this.state.articles.length === this.state.totalResults} )?
          {this.setState({ loading: false })}: {this.setState({ loading: false })} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : " "}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    butt={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    Source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
