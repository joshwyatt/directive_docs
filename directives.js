function myCustomer(){
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-iso.html'
  };
}

angular.module('directives', [])

.directive('myCustomer', myCustomer)
