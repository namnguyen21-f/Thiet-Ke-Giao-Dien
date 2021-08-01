import React from 'react';
import './index.css';

export default class PageNotFound extends React.Component{
    constructor(props){
        super();
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="NFPage">
                <div class="number">404</div>
                <div class="text"><span>Ooops...</span></div>
            </div>
        )
    }
}