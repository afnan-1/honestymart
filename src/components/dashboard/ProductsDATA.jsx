import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import firebase from '../../firebase'
import { getProducts, editProduct } from '../../store/action';
import ProductsForm from './ProductsForm';

function ProductsDATA(props) {
    const [img,setImg] = useState([])
    const [uploadProgress,setUploadProgress]= useState('')
    const [currentId, setCurrentId] = useState('')
    const [products, setProducts] = useState([])
    const [imgEdit,setimgEdit] = useState('')
    useEffect(() => {

        firebase.database().ref('/').on('value', snapshot => {
            if (snapshot.val() != null)
                for (const key in snapshot.val()) {
                    setProducts(snapshot.val()[key])
                }
               
        })
       
       
    }, [])
    const addOrEdit = (obj,file,file1,file2,file3) => {
        let key = firebase.database().ref('/products').push().key
        if (currentId == ''){
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
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            //   console.log('File available at', downloadURL);
              firebase.database().ref('/').child(`products/${key}`).push({...obj,img:downloadURL})
            //   setimgEdit(downloadURL)
            });
          });
          var ref = firebase.storage().ref().child(`images/${file1.name}`).put(file1);
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
                // console.log('File available at', downloadURL);
                firebase.database().ref('/').child(`products/${key}`).push(downloadURL)
                // setImg1(downloadURL)
              });
            });
            var ref = firebase.storage().ref().child(`images/${file2.name}`).put(file2);
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
                //   console.log('File available at', downloadURL);
                const img2={
                    img2:downloadURL
                }
                  firebase.database().ref('/').child(`products/${key}`).push(downloadURL)
                //   setImg2(downloadURL)
                });
              });
              var ref = firebase.storage().ref().child(`images/${file3.name}`).put(file3);
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
                    // console.log('File available at', downloadURL);
                    // setImg3(downloadURL)
                    // console.log(img1,img2);
                    firebase.database().ref('/').child(`products/${key}`).push({img3:downloadURL})
                    
                  });
                });
        
        }
        else
        // firebase.database().ref('/').child(`products/${currentId}`).set({...obj,img:imgEdit,img1:img1,img2:img2,img3:img3})
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
        <div className="container">
            <h1 className="display-4 text-center">
                Products register
                </h1>
            <div className="row">
                <div className="col-md-5">
                    <ProductsForm {...({ addOrEdit, currentId, products })} />
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

    </div>
)
}
const mapStateToProps = (state) => ({
    pdata: state.pdata,
    // jadu:state
    // edit:state.edit
})

const mapDispatchToProps = (dispatch) => ({
    getProducts: () => dispatch(getProducts()),
    // editProduct: (key) => dispatch(editProduct(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDATA);
// export default ProductsDATA
