function ControllerOne(){
  var vm = this;

  vm.rohan = {
    name: 'Rohan',
    address: '1334 Moon'
  };
  vm.josh = {
    name: 'Josh',
    address: 'Cali'
  };
}

angular.module('controllers', ['directives'])

.controller('ControllerOne', ControllerOne)