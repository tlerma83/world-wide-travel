"use strict";

app.factory("DataFactory", function($q, $http, FBCreds) {

    let getBooks = () => {
    return $q(function(resolve, reject){
        $http.get(`${FBCreds.databaseURL}/guides.json`)
        .then (function(itemsObject){
            let newArray = [];
            for (let books in itemsObject.data) {
                newArray.push(itemsObject.data[books]);
            }
            resolve(newArray);
        })
        .catch(function(error){
            reject(error);
        });
    });
  };
    return {getBooks};
});
