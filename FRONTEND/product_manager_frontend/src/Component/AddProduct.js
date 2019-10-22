import React, { Component } from 'react';
import axios from 'axios';
const AddProductData=(product_name,product_price,image)=>
( axios.post('/add',{product_name,product_price,image})
    .then((resp)=>resp.data))

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            product_name:"",
            product_price:"",
            image:""
        }
    }
    isChange=(event)=>{
        var name=event.target.name,
            value=event.target.value; 
            this.setState({
                [name]:value
            });      
    }
    AddClick=()=>{
        console.log(JSON.stringify(this.state));
        var {product_name,product_price,image}=this.state;
        var datatemp=[];
        var item={};
        item.product_name=product_name;
        item.product_price=product_price;
        item.image=image;
        datatemp = this.props.productData;
        console.log(datatemp);
        
         if(item.product_name !== ''){
            datatemp.push(item)
        }
        console.log(datatemp);
        
        this.props.addData(datatemp)
        AddProductData(product_name,product_price,image).then((resp)=>{
            console.log(resp);
            
        })
    }
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <form >
                  <div className="form-group">
                    <label htmlFor="product_name">Tên sản phẩm</label>
                    <input onChange={(event)=>this.isChange(event)}type="text" className="form-control" name="product_name" id="product_name" aria-describedby="product_name" placeholder="Nhập tên sản phẩm" />
                    <small id="product_name" className="form-text text-muted">Nhập text</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="product_price">Giá sản phẩm</label>
                    <input onChange={(event)=>this.isChange(event)}type="text" className="form-control" name="product_price" id="product_price" aria-describedby="product_price" placeholder="Nhập giá sản phẩm" />
                    <small id="product_price" className="form-text text-muted">Nhập text</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Ảnh sản phẩm</label>
                    <input onChange={(event)=>this.isChange(event)}type="text" className="form-control" name="image" id="image" aria-describedby="image" placeholder="Nhập ảnh sản phẩm" />
                    <small id="image" className="form-text text-muted">link ảnh</small>
                  </div>
                  <button onClick={()=>this.AddClick()}type="reset" className="btn btn-info">Thêm mới</button>
                </form>
              </div>
            </div>
          </div>
          
        );
    }
}

export default AddProduct;