import React from 'react';
import { BasicTable } from '../../components/Table';
import TopBar from '../../components/TopBar';

import './index.css';
const data1 = [
    {
        tradeDate: '19/07/2000',
        orderType: 'Buy',
        channel: 'TCBS-Trade',
        stockSymbol: '1000',
        volumne: '17.6',
        fee : '17.6',
        price: '17.600.000',
        profit: '130.000',
    },
    {
        tradeDate: '19/07/2000',
        orderType: 'Buy',
        channel: 'TCBS-Trade',
        stockSymbol: 'HAH',
        volumne: '1000',
        fee : '17.6',
        price: '17.600.000',
        profit: '130.000',
    }
]
const header = ['No','Trade Date','Order Type' , 'Channel','Stock symbol','Volumne','Price','Fee','Amount','Profit'];
const data = {
    data: data1,
    header: header,
}
export default class Stock extends React.Component{
    constructor(props){
        super();
    }

    componentDidMount(){

    }

    render(){
        return (
            <div className="StockPage">
                <TopBar></TopBar>
                <div className="page-breadcrumb">
                    <div className="row">
                        <div>
                            <h3 className="page-title">Good Morning  <span>Jason!</span></h3>
                            <p className="page-subtitle">Dashboard</p>
                        </div>
                        <div className="optionCustom">
                            <select>
                                <option selected>Create</option>
                                <option>September</option>
                                <option>October</option>
                            </select>
                        </div>    
                    </div>
                </div>
                <div className="table-section">
                    <BasicTable data={data}/>
                </div>
            </div>
        )
    }
}