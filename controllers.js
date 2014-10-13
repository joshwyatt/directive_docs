function ControllerOne(){
  var vm = this;

  vm.customer = {
    name: 'Rohan',
    address: '1334 Moon'
  };
}

angular.module('controllers', ['directives'])

.controller('ControllerOne', ControllerOne)