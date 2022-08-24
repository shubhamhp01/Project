import React from 'react'
import { makeRenderer } from 'react-table';
import ItemService from '../service/ItemService';
import ModalFunctional from './ModalFunctional';
import Modal from './Modal';
import './ItemComponent.css';

import ModalDelete from './ModalDelete';

class ItemsComponent extends React.Component{

    constructor(props)
    {
        super(props)

        this.state = {
            showModal:false,
            items:[],
            current:{},
            deleteModal:false,
            search:""
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(items) {  // switch the value of the showModal state
        this.setState({
          showModal: true,
          current:items
        });
      }

    handleSearch = (event) => {
        this.setState({search: event.target.value});
        
    }

     setOpenModal = (x) => {
          this.setState({showModal:x});
      }

    componentDidMount(){
        // const x = ItemService.getItems()
        ItemService.getItems('items').then((response)=> {
            this.setState({items:response.data})
        })
    }

    setDeleteModal = (x) => {
        this.setState({deleteModal:x});
    }
    
    removeItem(items){
        console.log("HELOO INSIDE REMOVE",items.code)
        this.setState({deleteModal:true,current:items});
        // window.location.reload();
        
        
    }

    render (){
        return(
            <div>
                {this.state.showModal && <Modal openModal = {this.state.showModal} selectedItem = {this.state.current} setOpenModal= {this.setOpenModal} title = {'Update Item'}/>}
                {this.state.deleteModal && <ModalDelete code = {this.state.current.code} deleteModal = {this.state.deleteModal} setDeleteModal = {this.setDeleteModal} />}
                <label htmlFor="search" >
                    Search by Task:
                    <input id="search" type="text" onChange={this.handleSearch} />
                </label>
                
                <h4 className='text-center'>List Of Items</h4>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Code</td>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Image</td>
                            <td>Reviews</td>
                            <td>Category</td>
                            <td>Update</td>
                            <td>Delete</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.map((items) => 
                                
                                <tr key = {items.code}>
                                    <td>{items.code}</td>
                                    <td>{items.prod_name}</td>
                                    <td>{items.description}</td>
                                    <td>{items.price}</td>
                                    <td>{items.quantity_available}</td>
                                    <td>{items.image_path}</td>
                                    
                                    <td>{items.reviews}</td>
                                    <td>{items.cat_name}</td>
                                    
                                    <td><button onClick={() => this.handleClick(items)} className='Center'>Update 

                                    </button></td>
                                    <td><button className='close'
                                    onClick={() => this.removeItem(items)}>x</button></td>
                                </tr>
                            )
                        }

                    </tbody>

                </table>
            </div>
        )
    }
}

export default ItemsComponent