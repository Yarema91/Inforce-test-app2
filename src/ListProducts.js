import React, { useState } from "react"
import AddProd from "./Components/AddProd";
import ProductDetails from "./ProductDetails";

const ListProducts = ({ product }) => {
    // state list date
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                imageUrl: 'some url here',
                name: 'Product1 name',
                count: 4,
                size: {
                    width: 200,
                    height: 200
                },
                weight: '200g',
                comments: [Comment, Comment]
            },
            {
                id: 2,
                imageUrl: 'some url here',
                name: 'Product2 name',
                count: 6,
                size: {
                    width: 200,
                    height: 200
                },
                weight: '200g',
                comments: [Comment, Comment]
            }
        ]
    )

    //modal new prodact open
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);


    //create newprod
    const handleChange = (e) => {
        console.log(e.currentTarget.value);
        this.setProduct(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        console.log('submit');
        e.preventDefault();
        ProductDetails.addProd(product)
    }

    const addProd = (product) => {
        console.log('addNewProd');
        if(product) {
        const newProd = {
            id: Math.random(),
            imageUrl: this.value,
            name: this.value,
            count: this.value,
            size: { width: this.value, height: this.value },
            weight: this.value,
            comments: []
        }
        this.setProducts([...products, newProd])
        }
        }





    return (
        <div>
            <h1>ListProducts</h1>
            <ul products={products}>{products.map(product => (
                <li>
                    {/* <ProductDetails product={product} key={product.id} /> */}
                    <div key={product.id}>
                        <span >id: {product.id}</span>,
                        <span>imageUrl: {product.imageUrl}</span>,
                        <span> name: {product.name}</span>,
                        <span> count: {product.count}</span>,
                        <span>size:  width: {product.size.width}, height: {product.size.height} </span>,
                        <span>  weight: {product.weight}</span>,
                        <span>  comments: {product.comments}</span>
                    </div>
                </li>

            ))}
            </ul>

            <button className='clickMe' onClick={() => Toggle()}>New Product</button>

            <AddProd
                show={modal}
                close={Toggle}
                add={addProd}
                title='Create new product'>

                <form action="create-form" onSubmit={handleSubmit}>
                    <div>
                        <span>Add photo</span>
                        <input
                            className='input'
                            type="text"
                            text='name'
                            placeholder='url'
                            // value={this.value}
                            onChange={handleChange}
                        />
                    </div>
                    <div><span>Name</span>
                        <input
                            className='input'
                            type="text" text='name'
                            placeholder='name'
                            // value={this.value}
                            onChange={handleChange}
                        />
                    </div>

                    <div><span>Count</span>
                        <input
                            type="number"
                            className='input'
                            text='name'
                            placeholder='count'
                            // value={this.AddProd.product.value}
                            onChange={handleChange}
                        />
                    </div>

                    <div><span>Size</span>
                        <input
                            type="number"
                            className='input'
                            text='name'
                            placeholder='width'
                            // value={this.AddProd.product.value}
                            onChange={handleChange}
                        />
                        <input type="number"
                            className='input'
                            text='name'
                            placeholder='height'
                            // value={this.AddProd.product.value}
                            onChange={handleChange}
                        />
                    </div>

                    <div><span> Weight</span>
                        <input
                            type="number"
                            className='input'
                            text='name'
                            placeholder='weight'
                            // value={this.AddProd.product.value}
                            onChange={handleChange}
                        />
                    </div>
                </form>

            </AddProd>
        </div>
    )
}

export default ListProducts
