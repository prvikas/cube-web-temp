import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, EditButton } from 'react-admin';

const HamaliList = props => (

    <List {...props} title="Hamali Master">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            {/* <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export default HamaliList;