'use strict';

var app = angular.module('timeShareApp');

app.controller('homeCtrl', function($scope, $state){
  console.log("homeCtrl");
});

app.controller('propertiesCtrl', function($scope, $state, Property){
  console.log('propertiesCtrl');

  Property.getProperties()
  .then(dbProperties => {
    console.log(dbProperties);
    $scope.properties = dbProperties.data;
  });

  $scope.deleteProperty = id => {
    Property.delete(id);
    Property.getProperties()
    .then(newProperties => {
      $scope.properties = newProperties.data;
    });
  };

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };
  //$scope.<ARRAY> = [];
});

app.controller('clientsCtrl', function($scope, $state, Client){
  console.log('clientsCtrl');


  Client.getClients()
  .then(dbClients => {
    console.log(dbClients);
    $scope.clients = dbClients.data;
  });

  $scope.deleteClient = id => {
    Client.delete(id);
    Client.getClients()
    .then(newClients => {
      $scope.clients = newClients.data;
    });
  };

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };
  //$scope.<ARRAY> = [];
})

app.controller('databaseCtrl', function($scope, $state, Client, Property){

  Client.getClients()
  .then(dbClients => {
    $scope.clients = dbClients.data;
  });

  Property.getProperties()
  .then(dbProperties => {
    $scope.properties = dbProperties.data;

  });


});

//  CRUD controllers
app.controller('addCtrl', function($scope, Property, Client, $state){

  $scope.createProperty = () => {
    var newProperty = {
      address         :   {
        region    : $scope.newRegion.selected,
        country   : $scope.newCountry,
        city      : $scope.newCity,
        state     : $scope.newState,
        street    : $scope.newStreet,
        zip       : $scope.newZip
      },
      listPrice       :   $scope.listPrice,
      customerRating  :   $scope.newRating.selected,
      marketPrice     :   $scope.marketPrice,
      status          :   $scope.newStatus.selected,
    };

    console.log("controllerNewProperty",newProperty);
    Property.create(newProperty);

  };


  $scope.newRegion = {
    address: [
      'North America',
      'Central America',
      'South America',
      'Europe',
      'Scandanavia',
      'Middle East',
      'Asia'
    ],
    selected: 'North America'
  };

  $scope.newRating = {
    rate: [
      '$',
      '$$',
      '$$$',
      '$$$$',
      '$$$$$',
      '$$$$$$$'

    ],
    selected: '$'
  };

  $scope.newStatus = {
    status: [
      'Listed',
      'Purchased',
      'Low Interest',
      'High Interest',
      'Special Interest'
    ],
    selected: 'Listed'
  };


  // ---  CLIENT --- //


  $scope.createClient = () => {
    var newClient = {
      difficulty  :   $scope.difficulty.selected,
      category    :   $scope.category.selected,
      question    :   $scope.question,
      answer      :   $scope.answer,
    };

    console.log("controllerNewClient",newClient);
    Client.create(newClient);
    $scope.difficulty.selected = "";
    $scope.category.selected = "";
    $scope.question = "";
    $scope.answer = "";
  };
});

app.controller('editPropertiesCtrl', function ($scope, Property, $state, property) {
  console.log("editPropertiesCtrl");

  var data = property;
  console.log('property.data=>\n',property.data);

  $scope.country      = data.address.country;
  $scope.city         = data.address.city;
  $scope.state        = data.address.state;
  $scope.street       = data.address.street;
  $scope.zip          = data.address.zip;
  $scope.listPrice    = data.listPrice;
  $scope.marketPrice  = data.marketPrice;

  $scope.editRegion = {
    address: [
      'North America',
      'Central America',
      'South America',
      'Europe',
      'Scandanavia',
      'Middle East',
      'Asia'
    ],
    selected: `${data.address.region}`
  };

  $scope.editRating = {
    rate: [
      '$',
      '$$',
      '$$$',
      '$$$$',
      '$$$$$',
      '$$$$$$$'

    ],
    selected: `${data.customerRating}`
  };

  $scope.editStatus = {
    status: [
      'Listed',
      'Purchased',
      'Low Interest',
      'High Interest',
      'Special Interest'
    ],
    selected: `${data.status}`
  };

  $scope.submitEdit = () => {
    var newAddress = {
      region       : $scope.editRegion.selected,
      country      : $scope.country,
      city         : $scope.city,
      state        : $scope.state,
      street       : $scope.street,
      zip          : $scope.zip,
    }
    var submitProperty = {
      _id             : data._id,
      address         : newAddress,
      listPrice       : $scope.listPrice,
      customerRating  : $scope.editRating.selected,
      marketPrice     : $scope.marketPrice,
      status          : $scope.editStatus.selected
    }
    console.log("submit Property", submitProperty);

    Property.edit(submitProperty);
    Property.getProperties()
    .then(newProperties => {
      console.log("here are the edited properties\n",newProperties.data);
      //$scope.buttonName = "Change Complete!";
    });
  };
});
