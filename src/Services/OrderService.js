import axios from 'axios'

const ORDERS_API_URL="http://localhost:8080/orders"; 

class OrderService {
  
    viewOrderDetails(){
      return axios.get(ORDERS_API_URL);
    }
    addOrder(orderDetailsId){
      return axios.post(ORDERS_API_URL,orderDetailsId)
    }
    // updateOrder(orderDetails,orderDetailsId,){
    //   return axios.put(ORDERS_API_URL+orderDetailsId,orderDetails)
    // }

    updateOrder(orderDetailsId){
      return axios.put(ORDERS_API_URL,orderDetailsId)
    }

    deleteOrder(orderDetailsId){
      return axios.delete(ORDERS_API_URL+'/'+orderDetailsId)
    }
    
    viewOrderByBook(bookId){
      return axios.get(`${ORDERS_API_URL}`,bookId)
    }

  }


export default new OrderService();