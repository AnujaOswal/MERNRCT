import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthApi from '../utils/AuthApi';
import Register from '../AuthPages/RegisterScreen/Register';
import Login from '../AuthPages/loginScreen/Login';
import { Main } from '../MainHomeScreen/Main';

function Routes() {
  const authApi = useContext(AuthApi);
  return (
    <Switch>
      <RouteRegisteration
        path="/signin"
        component={Login}
        auth={authApi.auth}
      />
      <RouteRegisteration
        path="/signup"
        component={Register}
        auth={authApi.auth}
      />
      <RouteProtected
        path="/home"
        component={Main}
        auth={authApi.auth}
      />
    </Switch>
  );
}

const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

const RouteProtected = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;




// import { Switch, Route, Redirect } from "react-router-dom"; 
// import Login from '../AuthPages/loginScreen/Login';
// import Register from '../AuthPages/RegisterScreen/Register';
// import {Main} from '../MainHomeScreen/Main';
// import AuthApi from '../utils/AuthApi';

// function Routes(){
//     const authApi =React.useContext(AuthApi);
//     return(
//         <Switch>
//             <RouteRegisteration path="/signin" component={Login} auth={authApi.auth}/>
//             <RouteRegisteration path="/signup" component={Register} auth={authApi.auth} /> 
//             <RouteProtected path="/home" component=
//             {
//                 () => <Main auth={false} />
//             } />  
//         </Switch>
//     )
// }

// const RouteRegisteration = ({ auth,component: Component, ...rest})=> {
//     return ( 
//         <Route 
//             {...rest}
//              render = {props =>
//                  !auth ? <Component {...props} /> : <Redirect to ="/home"/>
//                  } 
//         />
//     );
// };

// const RouteProtected = ({ auth,component: Component, ...rest})=> {

//     return ( <Route 
//     {...rest}
//      render = {props =>
//         !auth ?  <Component {...props} /> : <Redirect to="/signin"/> 
//     } 
//     />
//     );
// };

// export default Routes;