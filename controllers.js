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

function ControllerTwo(){
  var vm = this;

  vm.war = {
    question: "What is the opposite of war?",
    answer: "Fucking is the opposite of war."
  };

  vm.peace = {
    question: "What is the opposite of peace?",
    answer: "There is no opposite to peace."
  };
}

function ControllerThree(){
  var vm = this;

  vm.format = 'M/d/yy h:mm:ss a';

  vm.friends = ['Liz', 'Drew', 'Bonnie', 'Rachael', 'Mark'];
  vm.friend = 'Ray';
}

angular.module('controllers', ['directives'])

.controller('ControllerOne', ControllerOne)
.controller('ControllerTwo', ControllerTwo)
.controller('ControllerThree', ControllerThree)