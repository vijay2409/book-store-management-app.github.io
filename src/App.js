import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListBookComponent from './BookComponents/ListBookComponent';
import HeaderComponent from './BookComponents/HeaderComponent';
import FooterComponent from './BookComponents/FooterComponent';
import AddBookComponent from './BookComponents/AddBookComponent';
import UpdateBookComponent from './BookComponents/UpdateBookComponent';
import { Col, Container, Row } from 'reactstrap';
import Mains from './BookComponents/Mains';
import ContactUs from './Mains/ContactUs';
import PrivacyPolicy from './Mains/PrivacyPolicy';
import Payments from './Mains/Payments';
import Shipping from './Mains/Shipping';
import About from './Mains/About';
import Return from './Mains/Return';
import AddCustomer from './CustomerComponent/AddCustomer';
import UpdateCustomer from './CustomerComponent/UpdateCustomer';
import ListCustomer from './CustomerComponent/ListCustomer';
import AddOrder from './OrderComponent/AddOrder';
import UpdateOrder from './OrderComponent/UpdateOrder';
import OrderDetails from './OrderComponent/OrderDetails';
import ViewOrderByBook from './OrderComponent/ViewOrderByBook';
import ListUser from './UserComponent/ListUser';
import AddUser from './UserComponent/AddUser';
import ViewUser from './UserComponent/ViewUser';
import UpdateUser from './UserComponent/UpdateUser';
import ListReviewComponent from './ReviewComponent/ListReviewComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Container>
            <Row>
              <Col md={12}>
                <Switch>
                  <Route path='/' exact component={Mains}></Route>
                  <Route path='/getallbooks' component={ListBookComponent} exact ></Route>
                  <Route path='/addbook' component={AddBookComponent} exact></Route>
                  <Route path='/updatebook/:bookId' component={UpdateBookComponent} exact></Route>
                  <Route path='/contactus' component={ContactUs} exact></Route>
                  <Route path='/privacy' component={PrivacyPolicy} exact></Route>
                  <Route path='/payment' component={Payments} exact></Route>
                  <Route path='/shipping' component={Shipping} exact></Route>
                  <Route path='/about' component={About} exact></Route>
                  <Route path='/return' component={Return} exact></Route>
                  {/* customer service layer */}
                  <Route path='/addcustomer' component={AddCustomer} exact></Route>
                  <Route path='/listallcustomer' component={ListCustomer} exact />
                  <Route path='/updatecustomer' component={UpdateCustomer} exact></Route>
                  {/* order service layer */}
                  <Route path='/viewOrderDetails' exact component={OrderDetails}></Route>
                  <Route path='/addOrder' exact component={AddOrder}></Route>
                  <Route path='/updateOrder/:orderDetailsId' exact component={UpdateOrder}></Route>
                  <Route path='/viewOrderByBook/:bookId' exact component={ViewOrderByBook}></Route>
                  {/* user service layer */}
                  <Route path="/allusers" component={ListUser}></Route>
                  <Route path="/add-users/:id" component={AddUser} ></Route>
                  <Route path="/view-user/:id" component={ViewUser}></Route>
                  <Route path="" component={UpdateUser}></Route>
                  {/* review service layer */}
                  <Route path='/allreview' component={ListReviewComponent} exact></Route>
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;