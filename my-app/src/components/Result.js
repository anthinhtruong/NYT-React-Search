import React from 'react';
import helpers from './utils/helpers' 

export default class Results extends React.Component {
    
    getInitialState(){
		return {
			title: "",
			date: "",
			url: "",
			results: []
		}
    }
    componentDidMount(){

    helpers.getSaved()
      .then(function(articleData){
        this.setState({
          newestArticle: articleData.data
        });

      }.bind(this))
    }
    render(){
        return(
            <div className = "container">
                

            </div>
        )
    }
}