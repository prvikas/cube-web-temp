

import React from 'react';
import { Admin, Resource, EditGuesser, ListGuesser, CreateGuesser, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//import dataProvider from './dataProvider'
import UserIcon from '@material-ui/icons/People';
import authProvider from './authProvider';
//import sagas from './sagas';
import themeReducer from './themeReducer';
//import UserList from './UserList';
import HamaliMaster from './Masters/Hamali/HamaliMaster';
import NotFound from './PageNotFound';
import customRoutes from './CustomRoutes';
import employee from './Masters/Employee';
import EmployeeEdit from './Masters/Employee/EmployeeEdit';
import EmployeeCreate from './Masters/Employee/EmployeeCreate';
import { Login, Layout } from './layout';
import englishMessages from './i18n/en';
import { BrowserRouter, Route } from 'react-router-dom'

import simpleRestProvider from 'ra-data-simple-rest';
import EmployeeList from './Masters/Employee/EmployeeList';

const i18nProvider = locale => {
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }

    // Always fallback on english
    return englishMessages;
};

const httpClient = (url, options = {}) => {
    
   // options.method = 'PUT';
   //console.log(options.method);
    console.log(url);
    //{ mode: 'no-cors' }
    if (!options.headers) {
        // options.headers = new Headers({ Accept: 'application/json' });
        // options.mode = 'no-cors';
       // options.mode = 'no-cors';
       // options.method = 'GET';
        // options.headers= new Headers ({
        //     'Content-Type': 'application/x-www-form-urlencoded'
        //   });
    }
    // var i = 0;
    // if ((i = url.indexOf('?')) >= 0) {
    //     url = url.substring(0, i);
    // }
        //console.log(options.headers);
        // if (queryString) {
        //   return _mapUrlParams(queryString);
        // } 

    // if (!options.headers) {
    //     options.headers = new Headers({ Accept: 'application/json' });
    // }
    
    // options.user = {
    //     authenticated: true,
    //     token: 'SRTRDFVESGNJYTUKTYTHRG'
    // }
    // console.log(options);
    //options.method = 'GET';
    //console.log(options.method);
    // add your own headers here
    // options.headers.set('X-Custom-Header', 'foobar');


     //options.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // // options.headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // options.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     //options.headers.set("Access-Control-Allow-Headers", "x-requested-with, x-requested-by");
    //options.headers.set('Access-Control-Expose-Headers', 'Content-Range');

    // console.log('response');
    // console.log(fetchUtils.fetchJson(url, { mode: 'no-cors' }));

    console.log(options);
    console.log(url);
    return fetchUtils.fetchJson(url, options); //options
}


//const dataProvider = jsonServerProvider('https://cube-service.herokuapp.com/api');//http://jsonplaceholder.typicode.com  catchAll={NotFound} 
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com'); 
// const dataProvider = simpleRestProvider('https://cors-anywhere.herokuapp.com/https://cube-service.herokuapp.com/api', httpClient)
const dataProvider = simpleRestProvider('https://cube-service.herokuapp.com/api',httpClient ); 

//const dataProvider = simpleRestProvider('https://cube-service.herokuapp.com/api', httpClient)
const App = (env) => (
   
//  <Admin locale="en" title='vikas' customRoutes={customRoutes} customReducers={{ theme: themeReducer }}
//  authProvider={authProvider} loginPage={Login} dataProvider={dataProvider} i18nProvider={i18nProvider} appLayout={Layout}>
//     <Resource title="Hamali" name="User" options={{ label: 'Hamalis' }} list={ListGuesser} create={EditGuesser} icon={UserIcon}/>
//     {/* <Resource title="Masters" name="master" options={{ label: 'Masters' }} />edit={EditGuesser}
//     <Resource title="Masters" name="department" options={{ label: 'Departments' }} list={ListGuesser} /> */}
//     {/* <Resource title="Attendance" name="comments" options={{ label: 'Attendance' }} /> */}
// </Admin>

// customRoutes={customRoutes} dataProvider={dataProvider}
<Admin locale="en" title='vikas' customReducers={{ theme: themeReducer }} dataProvider={dataProvider}
   loginPage={Login}  i18nProvider={i18nProvider} appLayout={Layout}>
     <Resource title="Employee" name="employee" options={{ label: 'Employee' }} list={EmployeeList} edit={EmployeeEdit} create={EmployeeCreate} icon={UserIcon}/>

     <Resource title="Designation" name="designation" options={{ label: 'Designation' }} icon={UserIcon}/>
 {/* <Resource name="employee" options={{ label: 'Employee' }} {...employee} />, */}
</Admin>
);

export default App;
 

{/* <Admin
title="Vikas..."
dataProvider={dataProvider}
customReducers={{ theme: themeReducer }}
//customSagas={sagas}
customRoutes={customRoutes}
authProvider={authProvider}
//dashboard={Dashboard}
loginPage={Login}
appLayout={Layout}
locale="en"
//i18nProvider={i18nProvider}
>
 <Resource name="customers" {...visitors} />
<Resource
    name="commands"
    {...orders}
    options={{ label: 'Orders' }}
/>  <Resource name="invoices" {...invoices} />
<Resource name="products" {...products} />
<Resource name="categories" {...categories} />
<Resource name="reviews" {...reviews} /> 
<Resource title="Hamali" name="Users" options={{ label: 'Hamalis' }} list={HamaliMaster} edit={EditGuesser} icon={UserIcon}/>
</Admin> */}