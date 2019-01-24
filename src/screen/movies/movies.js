import React, { Component } from "react";
import CardMovie from "../../component/card-movie/card-movie";
import Axios from "axios";

export default class Movies extends Component {
    state={
        movies : []
    }
  getData = () => {
    Axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=651925d45022d1ae658063b443c99784&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(res => {
        console.log(res.data.results)
        this.setState({
            movies : res.data.results
        })
        console.log(this.state.movies,'>>>>')
        
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount(){
      this.getData()
     
  }
  render() {
    return (
      <div>
        {this.state.movies.map((value, index)=>{
            return <CardMovie data={value} />
        })}
        
      </div>
    );
  }
}
