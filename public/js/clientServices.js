'use strict';

var app = angular.module('timeShareApp');

app.service('Client', function($http, $q){

  // this.getClients = category => {
  //   return $http.get('/api/clients', category);
  // };



  this.getClients = () => {
    console.log("get clients");
    return $http.get('/api/clients')
  };

  this.getClientById = client => {
    console.log("ClientById\n", client.id);
    return $http.get(`api/clients/${client.id}`, client);
  };

  this.create = newClient => {
    console.log("Service new client\n", newClient);
    return $http.post('/api/clients', newClient);
  };

  this.delete = id => {
    console.log("Delete this:\n", id);
    return $http.delete(`/api/clients/${id}`);
  };

  this.edit = editedClient => {
    console.log("Edit this:\n",editedClient);
    return $http.put(`/api/clients/${editedClient._id}`, editedCard);
  }
});
