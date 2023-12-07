'use strict';

let queryString2, urlParams2, _id2, PersonaBD2;


const GetUrlAgregaTarjeta = async () => {
    queryString2 = window.location.search;
    urlParams2 = new URLSearchParams(queryString2);
  
    _id2 = urlParams2.get('_id');
  
    location.href = './registrarPagos.html?_id=' + _id2;
    
};