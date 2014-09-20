angular.module('nudge', ['ngRoute'])

 .controller('SignInCtrl', function($scope, $routeParams) {
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'signIn.html',
    controller: 'SignInCtrl',
  });

  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});