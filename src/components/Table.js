import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// ,
// tradeDate: '19/07/2000',
// orderType: 'Buy',
// channel: 'TCBS'
// stockSymbol: '1000',
// volumne: '17.6',
// fee : '17.6',
// price: '17.600.000',
// profit: '130.000',
const BasicTable = ({data}) =>{
    return (
        <TableContainer component={Paper}>
            <Table className="table-main" aria-label="simple table">
                <TableHead className="table-header" style={{background: "#000"}}>
                    <TableRow>
                        {data.header.map((header,index) => {
                            if (index ==0){
                                return <TableCell key={header}>{header}</TableCell>
                            }else{
                                return <TableCell align="right" key={header}>{header}</TableCell>
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody className="table-body">
                {data.data.map((row,index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            {index}
                        </TableCell>
                        <TableCell align="right">{row.tradeDate}</TableCell>
                        <TableCell align="right">{row.orderType}</TableCell>
                        <TableCell align="right">{row.channel}</TableCell>
                        <TableCell align="right">{row.stockSymbol}</TableCell>
                        <TableCell align="right">{row.volumne}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.fee}</TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.profit}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
    )
}

export {BasicTable};