import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Col from './Col';
import axios from 'axios';
import AddProduct from './AddProduct';
const getProductData=()=>
    axios.get('/getdata')
    .then((res)=>res.data)

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            productData:null
        }
    }
    
    UNSAFE_componentWillMount() {
        if(this.state.productData===null){
            getProductData().then((res)=>{
                this.setState({
                    productData:res
                });
            })
            
        }
    }
    addData=(item)=>{
            this.setState({
                productData: item
            });
    }
  printData =()=>{
      if(this.state.productData !== null){
          return(
               this.state.productData.map((value,key)=>{
             return(
                 <Col key={key} name={value.product_name} price={value.product_price} image={value.image}/>  
             )
          })
          )
         
              
      }
                     
  }
    render() {
        
        return (
            <div>
                <Nav/>
                <AddProduct 
                addData={(item)=>this.addData(item)}
                productData={this.state.productData}/>
                <div className="container">
                    <div className ="row">
                       {this.printData()}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;