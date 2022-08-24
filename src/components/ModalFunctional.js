import React, {useEffect, useState} from 'react';
// import Modal from 'react-modal';
import ItemAdd_Update from './ItemAdd&Update';
import "./ModalFunctional.css"
import ItemService from '../service/ItemService';

function ModalFunctional ({closeModal,selectedItem}){

    
    const [name, setName] = useState(selectedItem?selectedItem.prod_name:"");
    const [description, setDesc] = useState(selectedItem?selectedItem.description:"");
    const [category, setCategory] = useState(selectedItem?selectedItem.cat_name:"");
    const [price, setPrice] = useState(selectedItem?selectedItem.price:0);
    const [quantity, setQty] = useState(selectedItem?selectedItem.quantity_available:0);

    const AddDataClick = () => {
        console.log(name,description,category,price,quantity)
        
        const  propItems= {prod_name:name,description:description,price:price,quantity_available:quantity,cat_name:category,image_path:""}
        // props.onButtonClick()
        if(!selectedItem)
        {  
            // FOR INSERTING NEW DATA 
            console.log("INSIDE selecteditem as null")
            ItemService.setItems(propItems)
        }
        else{
            // FOR UPDATE
            propItems.code = selectedItem.code
            console.log(propItems)
            ItemService.updateItems("updateItem",propItems)
        }

        window.location.reload()

    }
    
    return(
        
        <div className='modalBackground'>
            {/* {console.log(selectedItem)} */}
            <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button className="closeBtn" color= "red" type="submit" onClick={() => window.location.reload()}>x</button>
            </div>
            
            <div className='title'>
                <h1>Product Details</h1>
            </div>
                <div>
                    <p>Name:</p> 
                    <input type="text" value = {name} onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <br></br>
                <div className='mb3'>
                Description:
                    <textarea className='form-control' value={description} onChange={(event) => {setDesc(event.target.value)}} rows = "5" ></textarea>  
                </div>
                <br></br>
                <div value = {category} onChange={(event) => {setCategory(event.target.value)}}>
                    <p>Category</p> 
                    {/* {const catname = selectedItem.cat_name} */}
                    {/* checked = {'Shoes' == selectedItem?selectedItem.cat_name:""} */}
                    <input type="radio" value="Watch" name="Category" /> Watch<br></br>
                    <input type="radio" value="Purse" name="Category" /> Purse<br></br>
                    <input type="radio" value="Clothes" name="Category" /> Clothes<br></br>
                    <input type="radio" value="Shoes" name="Category" /> Shoes
                </div>
                <br></br>
                <div>
                    
                    Price:
                    <input type="text" value = {price} onChange={(event) => {setPrice(event.target.value)}}/>
                    Quantity:
                    <input type="text" value = {quantity} onChange={(event) => {setQty(event.target.value)}}/>
                </div>

            <div className='footer'>
                {/* {if(!updateItem)} */}
                <button className='btn btn-primary' onClick={() => AddDataClick()}>Add data</button>
            </div>
            </div>
        </div>
    )

}

export default ModalFunctional