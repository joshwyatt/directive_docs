function testController(){
  var vm = this;
  vm.test = 'One Two One Two'
}

angular.module('controllers', [])

.controller('testController', testController)