import { React, useState } from "react";
import ItemService from '../service/ItemService';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

export default function Modal({ selectedItem, setOpenModal, openModal, title }) {

  const [name, setName] = useState(selectedItem ? selectedItem.prod_name : "");
  const [description, setDesc] = useState(selectedItem ? selectedItem.description : "");
  const [category, setCategory] = useState(selectedItem ? selectedItem.cat_name : "");
  const [price, setPrice] = useState(selectedItem ? selectedItem.price : 0);
  const [quantity, setQty] = useState(selectedItem ? selectedItem.quantity_available : 0);


  const addDataClick = () => {
    console.log(name, description, category, price, quantity)

    const propItems = { prod_name: name, description: description, price: price, quantity_available: quantity, cat_name: category, image_path: "" }
    if (!selectedItem) {
      // FOR INSERTING NEW DATA 
      console.log("INSIDE selecteditem as null")
      ItemService.setItems(propItems)
    }
    else {
      // FOR UPDATE
      propItems.code = selectedItem.code
      console.log(propItems)
      ItemService.updateItems("updateItem", propItems)
    }

    window.location.reload()
  }

  return (
    <div stlye={{}}>

      <Dialog open={openModal} onClose={() => setOpenModal(false)}>

        <DialogTitle>{title}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            <div>
              <p>Product Name:</p>
              <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} />
            </div>

            <div className='mb3'>
              Description:
              <textarea className='form-control' value={description} onChange={(event) => { setDesc(event.target.value) }} rows="5" ></textarea>
            </div>

            <div >
              {/* <p>Category</p> 
                    {console.log(category)}
               <label>    <input type="radio" value="Watch" name="Category"  onChange={(event) => { setCategory(event.target.value)}}/> Watch</label> <br></br>
                    <input type="radio" value="Purse" name="Category" checked = {selectedItem.cat_name === 'Purse'} onChange={(event) => {setCategory(event.target.value)}}/> Purse<br></br>
                    <input type="radio" value="Clothes" name="Category" checked = {selectedItem.cat_name === 'Clothes'} onChange={(event) => {setCategory(event.target.value)}}/> Clothes<br></br>
                    
                    <input type="radio" value="Shoes" name="Category" checked = {selectedItem.cat_name === 'Shoes'} onChange={(event) => {setCategory(event.target.value)}}/> Shoes */}
            </div>
            <p>Category</p> 
            <label>
              <input
                name="category"
                type="radio"
                value="Watch"
                checked={category === "Watch"}
                onChange={(event) => {setCategory(event.target.value)}}
              />
              <span>Watch</span>
            </label>
            <br></br>
            <label>
              <input
                name="category"
                type="radio"
                value="Purse"
                checked={category === "Purse"}
                onChange={(event) => {setCategory(event.target.value)}}
              />
              <span>Purse</span>
            </label>
            <br></br>
            <label>
              <input
                name="category"
                type="radio"
                value="Clothes"
                checked={category === "Clothes"}
                onChange={(event) => {setCategory(event.target.value)}}
              />
              <span>Clothes</span>
            </label>
            <br></br>
            <label>
              <input
                name="category"
                type="radio"
                value="Shoes"
                checked={category === "Shoes"}
                onChange={(event) => {setCategory(event.target.value)}}
              />
              <span>Shoes</span>
            </label>
                    
            <p></p>
            <div>
              Price:
              <input type="text" value={price} onChange={(event) => { setPrice(event.target.value) }} />
              
              Quantity:
              <input type="text" value={quantity} onChange={(event) => { setQty(event.target.value) }} />
            </div>
            <br></br>
            <div className='footer'>
              {/* {if(!updateItem)} */}
              <button className='btn btn-primary' onClick={() => addDataClick()}>{title}</button>
            </div>
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}
            color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}