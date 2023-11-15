'use strict';

let imagen; 

let widgetCloudinary = cloudinary.createUploadWidget({
    cloudName: 'din5lexdv',
    uploadPreset: 'sararepo'
}, (err, result)=> {
    if (!err && result && result.event ==='success'){
        console.log('Imgane subida', result.info);
        imagen.src=result.info.secure_url; 
    }
}); 

function AbrirCloudinary(pIdInputImagen){
    imagen= document.getElementById(pIdInputImagen);
    widgetCloudinary.open(); 
}
