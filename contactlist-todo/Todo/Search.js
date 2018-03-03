import React, {Component} from 'react';
import '../css/style.css';
 
class Search extends Component {
    render() {
        return(
            <div className="container-fluid">
            <div className='ui search'>
            <div className="ui icon input">
              <input className="prompt-to" type="text" placeholder="Search..." />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
            </div>
          </div>
        );
    }
}

export default Search;