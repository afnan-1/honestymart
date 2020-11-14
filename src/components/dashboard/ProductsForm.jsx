import React from 'react'
import { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'



function ProductsForm(props) {
    const initialFieldValues = {
        title: '',
        desc: '',
        price: '',
        oldprice: '',
        }
    const [file,setFile]=useState(null)
    // const [file1,setFile1]=useState(null)
    // const [file2,setFile2]=useState(null)
    // const [file3,setFile3]=useState(null)
    const [values, setValues] = useState(initialFieldValues)
    useEffect(()=>{
        if(props.currentId=='')
        setValues({
            ...initialFieldValues
        })
        else
       
        setValues({
            ...props.products[props.currentId]
        })

    },[props.currentId,props.products])
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleFormSubmit=(e)=>{
        e.preventDefault();
        props.addOrEdit(values,file)

    }
    return (
        <form autoComplete='off' onSubmit={handleFormSubmit}>

            <div className="form-group input-group">
                <div className="input-group-text">
                    <li className="fas fa-user">
                    </li>
                </div>
                <input type="text"
                    onChange={handleInputChange} className="form-control" placeholder="title" name="title" id="" value={values.title} />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <li className="fas fa-user">

                            </li>
                        </div>
                    </div>
                    <input type="text"
                        onChange={handleInputChange} className="form-control" placeholder="description" name="desc" id="" value={values.desc} />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <li className="fas fa-user">

                            </li>
                        </div>
                    </div>
                    <input type="text"
                        onChange={handleInputChange} className="form-control" placeholder="description" name="price" id="" value={values.price} />
                </div>

            </div>
            <div className="form-group">
            <input type="text"
                        onChange={handleInputChange} className="form-control" name="oldprice" placeholder="description" value={values.oldprice} />
            </div>
            <h3>Main image</h3>
            <input type="file" onChange={(e)=> setFile(e.target.files[0])}/>
            {/* <h3>extra image 1</h3>
            <input type="file" onChange={(e)=> setFile1(e.target.files[0])}/>
            <h3>extra image 2</h3>
            <input type="file" onChange={(e)=> setFile2(e.target.files[0])}/>
            <h3>extra image 3</h3>
            <input type="file" onChange={(e)=> setFile3(e.target.files[0])}/> */}
            <div className="form-group">
                <input type="submit" value={props.currentId==''?'Save':'Update'} className="btn btn-primary btn-block" />
            </div>


        </form>
    )
}

export default ProductsForm
