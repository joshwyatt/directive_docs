function myCustomer(){
  return {
    templateUrl: 'my-customer.html'
  };
}

angular.module('directives', [])

.directive('myCustomer', myCustomer)
