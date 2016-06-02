//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module('app', []);

//con dataResource inyectamos la factoría
app.controller("appController", function ($scope, $http) {
    //hacemos uso de $http para obtener los

    $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=5391997&APPID=7203dba51121417aca30ca03dac300be')
        .then(function(response) {
            //First function handles success
            $scope.datos = response.data;
        }, function(response) {
            //Second function handles error
            $scope.datos = "Something went wrong";
        });

    //datosResource lo tenemos disponible en la vista gracias a $scope
    //$scope.datosResource = dataResource.get();
})


//de esta forma tan sencilla consumimos con $resource en AngularJS
app.factory("dataResource", function ($resource) {
    return $resource("api.openweathermap.org/data/2.5/forecast/city?id=5391997&APPID=7203dba51121417aca30ca03dac300be", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})
