import axios from "axios";

const CUSTOMER_API_BASE_URL="http://localhost:8080/customers";

class CustomerService{

    listAllCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_API_BASE_URL,customer);
    }

     viewCustomer(customerId){
         return axios.get(CUSTOMER_API_BASE_URL+'/'+customerId);
     }

    updateCustomer(customer){
         return axios.put(CUSTOMER_API_BASE_URL+'/'+customer);
     }

     deleteCustomer(customerId){
         return axios.delete(CUSTOMER_API_BASE_URL+'/'+customerId)
     }
}

export default new CustomerService()