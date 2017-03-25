var app= angular.module('app', ['ngRoute','ngStorage']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'partials/user.html'
  })
  .when('/dashboard', {
    templateUrl:'partials/dashboard.html',
    controller:'dashboardController'
  })
  .when('/create', {
    templateUrl:'partials/create.html'
  })
  .when('/poll/:index', {
    templateUrl:'partials/showSurvey.html',
    controller: 'showSurveyController'
  })

})
