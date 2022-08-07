import { Route, Switch, Redirect } from 'react-router-dom';

import MutualFunds from './Components/InnovestWebsite/Screens/Mawazna/AdsApproval'
import FundDetail from './Components/InnovestWebsite/Screens/Mawazna/AdsApprovalDetails';
import AllUsers from './Components/Customers/AllUsers';

import Signin from '../src/Components/Customers/Signin';
import RiderRegistration from './Components/RiderRegistration';

import AllRiders from './Components/Customers/AllRiders';
import RentedProducts from './Components/Customers/RentedProducts';
import RentedProductDetails from './Components/Customers/RentedProductDetails';
import AssignedProduct from './Components/Customers/AssignedProducts';
import AssignedProductsDetail from './Components/Customers/AssignedProductDetails';
import DeliveredProducts from './Components/Customers/DeliveredProducts';
import ReturnPickupProducts from './Components/Customers/ReturnPickupProducts';
import ReturnPickupProductsDetails from './Components/Customers/ReturnPickupProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Signin} />
        <Route path='/login'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/riderRegistration' component={RiderRegistration} />
        <Route exact path='/adsApproval' component={MutualFunds} />
        <Route exact path='/adsApprovalDetails' component={FundDetail} />
        <Route exact path='/allUsers' component={AllUsers} />
        <Route exact path='/allRiders' component={AllRiders} />
        <Route exact path='/rentedProducts' component={RentedProducts} />
        <Route exact path='/rentedProductDetails' component={RentedProductDetails} />
        <Route exact path='/allAssignedProducts' component={AssignedProduct} />
        <Route exact path='/assignedProductsDetails' component={AssignedProductsDetail} />
        <Route exact path='/deliveredProducts' component={DeliveredProducts} />
        <Route exact path='/returnPickupProducts' component={ReturnPickupProducts} />
        <Route exact path='/returnPickupProductsDetails' component={ReturnPickupProductsDetails} />
      </Switch>
    </div>
  );
}

export default App;
