import React from 'react';
import { Datagrid, DatagridBody, List, TextField } from 'react-admin';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Textfield from '@material-ui/core/TextField';
import Formlabel from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
//import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
//import TableRow from '@material-ui/core/TableRow';

export default class AttendanceList extends React.Component {

    getInitialState() {
        return {
            //myComponent.setProps({ data: someData2 });
            
            att: jsonResponse.data
        }
    }

    componentDidMount() {
        var th = this;
        
        this.setState({att : jsonResponse.data});
        // this.serverRequest =
        //     axios.get(this.props.source)
        //         .then(function(result) {
        //             th.setState({
        //                 concerts: result.data.concerts
        //             });
        //         })

        //this.setProps(jsonResponse.data);
    }

    render(){
        return (
            <div>
                <h1>Concerts!</h1>
{/* 
                {JSON.stringify(jsonResponse.data) }
        <MyDatagrid {...jsonResponse.data}>
            <Textfield source="24032019" />
        </MyDatagrid> */}

<Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        24-March-2019
                    </TableCell>
                    <TableCell />
                </TableRow>
            </TableHead>
            <TableBody>
                {jsonResponse.data.map(segment => (
                    <TableRow key={segment.id}>
                        <TableCell><Checkbox 
            /></TableCell>
                        <TableCell>{segment.name}</TableCell>
                        <TableCell>
                            {segment.status}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
   


               
            </div>
        )

    }
}

// const MyDatagridRow = ({ record, resource, id, onToggleItem, children, selected, basePath }) => (
//     <div>    console.log( JSON.stringify(record));
//     <TableRow key={id}>
//         {/* first column: selection checkbox */}
//         <TableCell padding="none">
//             {record.selectable && <Checkbox
//                 // checked={selected}
//                 // onClick={() => onToggleItem(id)}
//             />}
//         </TableCell>
//         {/* data columns based on children */}
//         {React.Children.map(children, field => (
//              <TableCell > {/* key={`$ {id}-${field.props.source}`}
//                  {React.cloneElement(field, {
//                     record,
//                     basePath,
//                     resource,
//                 })} */}
//             </TableCell>
//         ))}
//     </TableRow>
//     </div>
// )

// const MyDatagridBody = props => <DatagridBody {...props} row={<MyDatagridRow />} />;
// const MyDatagrid = props => <Datagrid {...props} body={<MyDatagridBody />} > {JSON.stringify(props.data)}</Datagrid>;

// const AttendanceList = props => (
//     <List {...props}>
//         <MyDatagrid>
//             <Textfield source="24032019" />
//             ...
//         </MyDatagrid>
//     </List>
// )

const jsonResponse = {"data": [
    {
      "id":3,
      "name":"John",
      "status":"Present"
    },
    {
      "id":4,
      "name":"abc",
      "status":"Present"
    },
    {
      "id":"",
      "name":"def",
      "status":""
    },
    {
      "id":6,
      "name":"ghi",
      "status":"Present"
    },
    {
      "id":"",
      "name":"jklm",
      "status":""
    },
    {
      "id":"",
      "name":"nop",
      "status":""
    },
    {
      "id":99,
      "name":"qrs",
      "status":"CL"
    },
    {
      "id":95,
      "name":"tuv",
      "status":"Absent"
    },
    {
      "id":"",
      "name":"wxyz",
      "status":""
    },
    ]};


