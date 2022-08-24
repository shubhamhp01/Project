import React, {useState} from 'react'
import ItemService from '../service/ItemService';

export default function ItemAdd_Update(props){

    const [name, setName] = useState(props.selectedItem.name?"":props.selectedItem.name);
    const [description, setDesc] = useState(props.selectedItem.description?"":props.selectedItem.description);
    const [category, setCategory] = useState(props.selectedItem.category?"":props.selectedItem.category);
    const [price, setPrice] = useState(props.selectedItem.price?0:props.selectedItem.price);
    const [quantity, setQty] = useState(props.selectedItem.quantity?0:props.selectedItem.quantity);

    const AddDataClick = () => {
        // setName(name)
        // setDesc(description)
        // setCategory(category)
        // setPrice(price)
        // setQty(quantity)
        props.stateOfModal(false)

        const propAddItems = {prod_name:name,description:description,price:price,quantity_available:quantity}
        ItemService.setItems(propAddItems)
        
        console.log(name,description,category,price,quantity)
    }
 
 
    
    return(
        <>
            <div>
                <h1>Product Details</h1>
                <div>
                    Name: 
                    <input type="text" value = {name} onChange={(event) => {setName(event.target.value)}}/>
                </div>
                <div className='mb3'>
                Description:
                    <textarea className='form-control' value={description} onChange={(event) => {setDesc(event.target.value)}} rows = "5" ></textarea>  
                </div>
                <div value = {category} onChange={(event) => {setCategory(event.target.value)}}>
                    <input type="radio" value="Watch" name="Category" /> Watch<br></br>
                    <input type="radio" value="Purse" name="Category" /> Purse<br></br>
                    <input type="radio" value="Clothes" name="Category" /> Clothes<br></br>
                    <input type="radio" value="Shoes" name="Category" /> Shoes
                </div>
                <div>
                    Price:
                    <input type="text" value = {price} onChange={(event) => {setPrice(event.target.value)}}/>
                    Quantity:
                    <input type="text" value = {quantity} onChange={(event) => {setQty(event.target.value)}}/>
                </div>
                <br></br>

                <button className='btn btn-primary' onClick={() => AddDataClick}>Add data</button>
            </div>
            
        </>
    )
}

// ReactDOM.render(<ItemAdd_Update />, document.getElementById('root'));