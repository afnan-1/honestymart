import React from 'react'
import { useEffect, useState } from 'react';
import firebase from '../../firebase'
import { useStateValue } from '../../StateProvider';
import ProductsForm from './ProductsForm';

function ProductsDATA(props) {
    const [img,setImg] = useState(null)
    const [uploadProgress,setUploadProgress]= useState('')
    const [currentId, setCurrentId] = useState('')
    const [products, setProducts] = useState([])
    const [imgEdit,setimgEdit] = useState('')
    const [{ users}, dispatch] = useStateValue();
    useEffect(() => {
        firebase.database().ref('/').on('value', snapshot => {
            if (snapshot.val() != null)
                for (const key in snapshot.val()) {
                    setProducts(snapshot.val()[key])
                }     
        })
    }, [])
    const upload=(f)=>{
        var ref = firebase.storage().ref().child(`images/${f.name}`).put(f);
        ref.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress.toFixed(0) + '% done');
            setUploadProgress(progress)
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
            // Handle unsuccessful uploads
          }, function() {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                setImg(downloadURL)
            //   dispatch({
            //       type:"PIC",
            //       pic:downloadURL
            //   })
            });
          });
    }
    const addOrEdit = (obj,file) => {     
        if (currentId == ''){
            console.log('pic',img);
        var ref = firebase.storage().ref().child(`images/${file.name}`).put(file);
        ref.on('state_changed', function(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress.toFixed(0) + '% done');
            setUploadProgress(progress)
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
            // Handle unsuccessful uploads
          }, function() {
            console.log('pic',img);
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
              firebase.database().ref('/').child(`products`).push({...obj,img:downloadURL})
            });
          });
        }
        else
        firebase.database().ref('/').child(`products`).set({...obj,img:imgEdit})
        setCurrentId('')
     
}
const deleteProduct = (key) => {
    if (window.confirm('Are you sure you want to delete')) {
        firebase.database().ref('/').child(`products/${key}`).remove()
        setCurrentId('')
    }

}
return (
    <div style={{ backgroundColor: 'white' }} className="jumbotron jumbotron-fluid">
        {console.log('pic',img)}
        <div className="container">
            <h1 className="display-4 text-center">
                Products register
                </h1>
            <div className="row">
                <div className="col-md-5">
                    <ProductsForm {...({ addOrEdit, currentId, products, upload })} />
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>title</th>
                                <th>description</th>
                                <th>old price</th>
                                <th>price</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {console.log(products)} */}
                            {
                                Object.keys(products).map((v, i) => {
                                    return <tr key={i}>
                                        <td>{products[v].title}</td>
                                        <td>{products[v].desc}</td>
                                        <td>{products[v].oldprice}</td>
                                        <td>{products[v].price}</td>
                                        <td>
                                            <button onClick={() => { setCurrentId(v) }} className='btn btn-dark'>Edit</button>
                                            <button onClick={() => deleteProduct(v)} className='btn btn-dark'>Delete</button>

                                        </td>
                                    </tr>

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
<h2>{users?users.email:''}</h2>
    </div>
)
}


export default ProductsDATA;
// export default ProductsDATA
