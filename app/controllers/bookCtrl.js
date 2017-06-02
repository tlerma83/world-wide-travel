"use strict";

app.controller('BookCtrl', function($scope, DataFactory) {

    DataFactory.getBooks()
      .then((response) => {
        $scope.booksData = response;
    });

});



