import React from "react" 
import  ReactDOM  from "react-dom"
import  './modal.scss'


const AddProd = ({ show, close, title, children, add }) => {

    
    return ReactDOM.createPortal(
        <>
           <div className={`modalContainer ${show ? "show" : "" }`} onClick={()=> close()}>
               <div className="modal" onClick={(e)=> e.stopPropagation()}>
               <header className="modal_header">
                   <h2 className="modal_header-title"> {title}</h2>
                       <button className="close" onClick={()=> close()}>X</button>
               </header>
               <main className="modal_content">{ children }</main>
               <footer className="modal_footer">


               
                   <button className="modal-close" onClick={()=> close()}>Cancel</button>
                   <button className="submit" onClick={() => add()}>Add</button>
               </footer>
               </div>
           </div>  
               
        </>,
        document.getElementById("modal")
    );
};

export default AddProd
