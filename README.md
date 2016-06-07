# WorkshopAngularJs
WorkshopAngularJs

AngularJS extends HTML with ng-directives.

The ng-app directive defines an AngularJS application.

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

The ng-bind directive binds application data to the HTML view.

AngularJS expressions are written inside double braces: {{ expression }} or is the same way as the ng-bind directive

The ng-app directive defines the application, the ng-controller directive defines the controller.

AngularJS Module
var app = angular.module('myApp', []);

AngularJS Controller
app.controller('myCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

Expressions:
{{ expression }}
ng-bind="expression"
If you remove the ng-app directive, HTML will display the expression as it is
