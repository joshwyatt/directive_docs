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

function myFriend($interval){
  function link(scope, element, attrs){
    var test;
    var friend;

    function changeText(txt){
      element.text(txt);
    }

    scope.$watch(attrs.myFriend, function(name){
      friend = name;
      changeText(friend);
    });

    scope.$watch(attrs.testAttr, function(txt){
      test = txt;
      changeText(test);
    });

  }

  return {
    link: link
  }
}

function myDialogue(){
  return {
    restrict: 'E',
    transclude: 'true',
    templateUrl: 'my-dialogue.html'
  }
}

angular.module('directives', [])

.directive('myCustomer', myCustomer)
.directive('myTestDirective', myTestDirective)
.directive('myCurrentTime', myCurrentTime)
.directive('myFriend', myFriend)
.directive('myDialogue', myDialogue)

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
