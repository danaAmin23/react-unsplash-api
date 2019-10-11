import React from 'react';


class SearchBar extends React.Component {

//init state similare to constructor(){ super(props){}}    
state = {term: ''}

onFormSubmit = (event) => {
    console.log("form submitted");

    //prevent form from default behavour of closing instantaneously
    event.preventDefault();

    /**
     * in class objects this references the props obj
     * calls parent onSubmit prop value to child current page
    
    */
    this.props.onSubmit(this.state.term);
}

  




    render() {

        return (<div>
            <form onSubmit = {this.onFormSubmit}>

                <div className="ui search">
                    <div className="ui icon input"><label>Search Images</label>
                        <input className="prompt" value ={this.state.term} type="text" onChange= {e =>this.setState({term: e.target.value})} ></input>
                        <i className="search icon"></i>
                    </div>
                    <div className="results"></div>
                </div>


            </form>

        </div>);
    }



}

export default SearchBar;