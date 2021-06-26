import React, { useState } from "react"
import AddProd from "./Components/AddProd"
import EditProd from './Components/EditProd'
import ListProducts from "./ListProducts"
// import DeleteProd from "./Components/DeleteProd"

const ProductDetails = ({ products, id }) => {

    //product 
    const [product, setProduct] = useState(
            {
                imageUrl: '',
                name: '',
                count: '',
                size: {
                    width: '',
                    height: ''
                },
                weight: '',
                comments: [Comment, Comment]
            }
    )

    

    //modal edit
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);

    return (
        <div  >
            {/* <div  key={product.id}>
                    <span >id: {product.id}</span>,
                    <span>imageUrl: {product.imageUrl}</span>,
                    <span> name: {product.name}</span>,
                    <span> count: {product.count}</span>,
                    <span>size:  width: {product.size.width}, height: {product.size.height} </span>,
                    <span>  weight: {product.weight}</span>,
                    <span>  comments: {product.comments}</span>
            </div> */}
            {/* <h1>Details</h1> */}
                    
            <button className='clickMe' onClick={() => Toggle()}>Edit</button>
            <EditProd
                show={modal}
                close={Toggle}
                title='Edit description and properties'>

                    this modal edit ptoduct

                {/* <form action="create-form">  
                    <span>Name</span>
                    <input 
                    type="text" 
                    name='name' 
                    text='name' 
                    placeholder='name'
                    />
                </form> */}
            </EditProd>
            

            <AddProd>
            {/* <form action="create-form" onSubmit={handleSubmit}>
                    <div>
                        <span>Add photo</span>
                        <input
                            className='input'
                            type="text"
                            text='name'
                            placeholder='url'
                        />
                    </div>
                    <div><span>Name</span>
                        <input
                            className='input'
                            type="text" text='name'
                            placeholder='name'
                            // value={product.value}
                            onChange={handleChange}
                        />
                    </div>

                    <div><span>Count</span>
                        <input type="number" className='input' text='name' placeholder='count' /></div>

                    <div><span>Size</span>
                        <input type="number" className='input' text='name' placeholder='width' />
                        <input type="number" className='input' text='name' placeholder='height' /></div>

                    <div><span> Weight</span>
                        <input type="number" className='input' text='name' placeholder='weight' /></div>
                </form> */}
            </AddProd>
        </div>
    )
}

export default ProductDetails
