import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import {React,useState} from "react";
import ItemService from '../service/ItemService';


export default function ModalDelete({code,deleteModal,setDeleteModal}) {

    const deleteItem = () => {
        ItemService.deleteItems('deleteItem',code);
        setDeleteModal(false);
    }

    return(
        <div stlye={{}}>
            <Dialog open={deleteModal} onClose={() => setDeleteModal(false)}>

                <DialogTitle>Delete Item</DialogTitle>

                <DialogContent>
                    <DialogContentText>Are you Sure you want to delete the Item?</DialogContentText>

                </DialogContent>
                <DialogActions>
                <Button onClick={() => deleteItem()} 
                        color="primary" autoFocus >
                        Delete Item
                    </Button>
                    <Button onClick={() => setDeleteModal(false)} 
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    );
}