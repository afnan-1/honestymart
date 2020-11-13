import { light } from '@material-ui/core/styles/createPalette'
import { LocalHospital } from '@material-ui/icons'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getProducts } from '../../store/action';
import { useEffect } from 'react'
import firebase from '../../firebase' 
import ProductsDATA from './ProductsDATA';
function Admin(props) {
    const [file, setfile] = useState(null)
    const [productsTitle, setproductsTitle] = useState('')
    const [productsDesc, setproductsDesc] = useState('')
    const [productsPrice, setproductsPrice] = useState('')
    const [productsOldPrice, setproductsOldPrice] = useState('')
    const [productsTitleImg, setproductsTitleImg] = useState('')
    const [productsKey, setProductsKey] = useState('')
    const [uploadProgress,setUploadProgress]= useState('')


    // const uploadFile=()=>{
    //     console.log(file.name);
    //     var ref = firebase.storage().ref().child(`images/${file.name}`).put(file);
    //     ref.on('state_changed', function(snapshot){
    //         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         // console.log('Upload is ' + progress.toFixed(0) + '% done');
    //         setUploadProgress(progress)
    //         switch (snapshot.state) {
    //           case firebase.storage.TaskState.PAUSED: // or 'paused'
    //             console.log('Upload is paused');
    //             break;
    //           case firebase.storage.TaskState.RUNNING: // or 'running'
    //             console.log('Upload is running');
    //             break;
    //         }
    //       }, function(error) {
    //         // Handle unsuccessful uploads
    //       }, function() {
    //         // Handle successful uploads on complete
    //         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //         ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //           console.log('File available at', downloadURL);
              
    //         //   setProductsKey(`${productsTitle+productsPrice}`)
    //         //   console.log("key",productsKey)
    //         let key = firebase.database().ref('products').push().key

    //           let productsData={
    //             productsTitle:productsTitle,
    //             productsDesc:productsDesc,
    //             productsPrice:productsPrice,
    //             productsOldPrice:productsOldPrice,
    //             productsTitleImg:downloadURL,
    //             productsKey:key,
    //             edit:false,
    //             data:'afnan'
    //         }
    //         // console.log(productsData);
    //           firebase.database().ref(`products/${productsData.productsKey}`).set(productsData)
    //         });
    //       });



 

    // }  
    
    // useEffect(() => {
    //    props.getProducts();
    //    console.log(props.productsData)
    // }, [])
       
    
    
    
    return (
        <div style={{backgroundColor:'white'}}>
            {/* <div>
            <h2>Upload files</h2>
            <input type="text" placeholder="title" onChange={(e)=> setproductsTitle(e.target.value)} />
            <input type="text" placeholder="description" onChange={(e)=> setproductsDesc(e.target.value)} />
            <input type="text" placeholder="price" onChange={(e)=> setproductsPrice(e.target.value)} />
            <input type="text" placeholder="oldprice" onChange={(e)=> setproductsOldPrice(e.target.value)} />
            <h2>{uploadProgress}</h2>
            <input type="file" onChange={(e)=> setfile(e.target.files[0])}/>
            <button onClick={uploadFile} > upload</button> */}
        {/* </div> */}

    {/* <h2>{props.productsData}</h2> */}


        <ProductsDATA />
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     productsData: state.productsData
// })

// const mapDispatchToProps = (dispatch) => ({
//     getProducts: () => dispatch(getProducts()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Admin);
export default Admin
