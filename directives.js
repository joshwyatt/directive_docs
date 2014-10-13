function myCustomer(){
  return {
    template: 'Name: {{ one.customer.name }} Address: {{ one.customer.address }}'
  };
}

angular.module('directives', [])

.directive('myCustomer', myCustomer)
