function myCustomer(){
  return {
    restrict: 'E',
    scope: {
      customerInfo: '=info'
    },
    templateUrl: 'my-customer-iso.html'
  };
}

function myTestDirective(){
  return {
    restrict: 'E',
    scope:{
      dialogue: '='
    },
    templateUrl: 'my-test-iso.html'
  };
}

function myCurrentTime($interval, dateFilter){

  function link(scope, element, attrs){
    
    var format,
        timeoutId;
    
    function updateTime(){
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value){
      format = value;
      updateTime();
    });

    element.on('$destroy', function(){
      $interval.cancel(timeoutId);
    });

    timeoutId = $interval(function(){
      updateTime(); //update DOM
    }, 1000);
  }

  return {
    link: link
  };
}

function allMyFriends($interval){

  function link(scope, element, attrs){
    var ticker,
        friend;

    function showFriend(){
      element.text(friend);
    }

    scope.$watch(attrs.allMyFriends, function(name){
      friend = name;
      showFriend();
    })

    ticker = $interval(function(){
      showFriend();
    }, 1000);

    element.on('destroy', function(){
      $interval.cancel(ticker);
    });
  }

  return {
    link: link
  };
}



angular.module('directives', [])

.directive('myCustomer', myCustomer)
.directive('myTestDirective', myTestDirective)
.directive('myCurrentTime', myCurrentTime)
.directive('allMyFriends', allMyFriends)

// function allMyFriends($interval){


//   function link(scope, element, attrs){
//     var friend,
//         ticker

//     function showFriend(){
//       element.text(friend);
//     }

//     scope.$watch(attrs.allMyFriends, function(list){
//       friend = list;
//       showFriend();
//     });

//     element.on('$destroy', function(){
//       $interval.cancel(ticker);
//     });

//     ticker = $interval(function(){
//       showFriend();
//     }, 1000);
//   }


//   return {
//     link: link
//   };
// }
