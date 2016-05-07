'use strict';

var app = angular.module('timeShareApp', [ 'ui.bootstrap', 'ui.router', 'oitozero.ngSweetAlert' ]);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('login', {
    url           : '/login' ,
    templateUrl   : 'html/login.html' ,
    controller    : 'loginCtrl'
  })
  // .state('addProperty', {
  //   url           : '/addProperty' ,
  //   templateUrl   : 'html/addProperty.html' ,
  //   controller    : 'addCtrl'
  // })
  // .state('editProperties', {
  //   url           : '/editProperties/:id' ,
  //   templateUrl   : 'html/editProperties.html' ,
  //   controller    : 'editPropertiesCtrl',
  //   resolve       : {
  //     property : function(Property, $stateParams){
  //
  //       return Property.getPropertyById($stateParams)
  //     }
  //   }
  // })
  // .state('clients', {
  //   url           : '/clients' ,
  //   templateUrl   : 'html/clients.html' ,
  //   controller    : 'clientsCtrl'
  // })
  // .state('database', {
  //   url           : '/database' ,
  //   templateUrl   : 'html/database.html' ,
  //   controller    : 'databaseCtrl'
  // });

  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })


  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
});
