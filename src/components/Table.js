import React from 'react'
import ItemService from '../service/ItemService';
import Modal from './Modal';
import './table.css';
// import m
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";


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
            search:"",
            sortedField:["",""]
        }

        this.handleClick = this.handleClick.bind(this);
        this.setSortedField = this.setSortedField.bind(this);
    }

    handleClick(items) {  // switch the value of the showModal state
        this.setState({
          showModal: true,
          current:items
        });
      }

    setSortedField = async (column_name) => {
      let direction = "ascending";
      console.log("HELLOOOO",column_name)
      if (this.state.sortedField[0] == column_name && this.state.sortedField[1] === 'ascending'){
        direction = "descending"
      }
      await this.setState({sortedField:[column_name,direction]})

      this.afterSortedFieldSelected();
    }

    afterSortedFieldSelected(){

      console.log("HELLOOOO inside other function",this.state.sortedField[0])
      let sortedProducts = [...this.state.items]

      console.log(sortedProducts);

      let column_name = this.state.sortedField[0];
      let direction = this.state.sortedField[1];
      
        
        sortedProducts.sort((a,b) => {
          console.log("Helloooo000000")
          if(a[column_name] < b[column_name]){
            return direction == 'ascending'? -1: 1;
          }
          if(a[column_name] > b[column_name]){
            return direction == 'ascending'? 1: -1;
          }
          return 0;
        });
      
      this.setState({items:sortedProducts})
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
    }

    render (){
        return(
            <div>
                {this.state.showModal && <Modal openModal = {this.state.showModal} selectedItem = {this.state.current} setOpenModal= {this.setOpenModal} title = {'Update Item'}/>}
                {this.state.deleteModal && <ModalDelete code = {this.state.current.code} deleteModal = {this.state.deleteModal} setDeleteModal = {this.setDeleteModal} />}
                <label className="search" >
                    Search by Product Name:
                    <input id="search" type="text" onChange={this.handleSearch} />
                </label>
                
                <h4 className='text-center'>List Of Items</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th> <button className='button' type='button' onClick={() => this.setSortedField('code')}>Code<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('prod_name')}>Name<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('description')}>Description<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('price')}>Price<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('quantity_available')}>Quantity<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('reviews')}>Reviews<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th><button className='button' type='button' onClick={() => this.setSortedField('category')}>Category<AiOutlineArrowUp/><AiOutlineArrowDown/></button></th>
                            <th> <div className='colm-name'>Update</div></th>
                            <th> <div className='colm-name'>Delete</div></th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.items.filter((items) => 
                            {if(this.state.search == "") 
                            {
                              return items
                            }
                            else if (items.prod_name.toLowerCase().includes(this.state.search.toLowerCase())){
                                return items
                            }
                          
                          }).map((items) => 

                                <tr key = {items.code}>
                                    <td>{items.code}</td>
                                    <td>{items.prod_name}</td>
                                    <td>{items.description}</td>
                                    <td>{items.price}</td>
                                    <td>{items.quantity_available}</td>
                                    <td>{items.reviews}</td>
                                    <td>{items.cat_name}</td>
                                    
                                    <td><button onClick={() => this.handleClick(items)}  className='button' >Update 
                                      
                                    </button></td>  
                                    <td><button className='button'
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