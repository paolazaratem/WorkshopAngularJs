//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module("app", ["ngResource"]);

//con dataResource inyectamos la factoría
app.controller("appController", function ($scope, $http, dataResource) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('api.openweathermap.org/data/2.5/forecast/city?id=5391997&APPID=7203dba51121417aca30ca03dac300be').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
    $scope.datosResource = dataResource.get();
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
