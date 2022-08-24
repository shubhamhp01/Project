import React, {useState,useEffect} from 'react'
import Modal  from './Modal'
import Button from "@material-ui/core/Button";
import Table from './Table'
import './table.css'

export default function Navbar(props) {
    // let navigate = useNavigate();
    const [openModal,setOpenModal] = useState(false);

    const logout = () =>{
        localStorage.removeItem("userid")
        window.location.reload();
    }

  return (
    <>  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.propDict.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Button variant="outlined" color="secondary" 
              onClick={() => setOpenModal(true)}>
                Add new Item
            </Button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
                </ul>
                <form>
                    <button className='button' type='Submit' onClick={() => logout()}> Logout</button>
                </form>
            </div>
        </div>
    </nav>
    
    {openModal && <Modal setOpenModal = {setOpenModal} openModal = {openModal} title = {'Add Item'} />}

    <Table/>
    {/* <ItemsComponent/> */}
</>
  )
}
