var myApp = angular.module('myApp', []);

myApp.controller('ReportController', ['$scope', '$sce', '$http', '$filter', '$window', function($scope, $sce, $http, $filter, $window) {


    $scope.reportsArr = [];
    $scope.dataReportsArr = [];
    $scope.match_variant = [];
    $scope.filteredArray = [];

    /* load all reports */
    $scope.reportsLoad = function(url) {
        //console.log(config);
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $http.get(url, config)
            .then(function(response) {
                    console.log(response);
                    $scope.reportsArr = response['data']['reportsData'];
                    //console.log($scope.reportsArr);
                    $scope.dataReportsArr = $scope.searchReportsArr;
                },
                function errorCallback(response) {
                    //toasteFun('danger','Error. try again');
                    console.log(response);
                }
            );
    }

    /* report search new start */
    $scope.showNameChanged = function() {
        text = $scope.search_reports; // search keyword

        $scope.filteredArray = []; //need to be return
        $scope.reportsArr // main report array;


        $scope.filteredArray = $filter('filter')($scope.reportsArr, {
            'name': $scope.search_reports
        });

        if ($scope.filteredArray.length == 0) {
            $scope.filteredArray = $filter('filter')($scope.reportsArr, {
                'short_desc': $scope.search_reports
            });
        }

        if ($scope.filteredArray.length <= 0) {
            if (!text || text.length === 0)
                $scope.filteredArray = $scope.reportsArr;
            var searchTerms = text.split(' ');
            searchTerms.forEach(function(term) {
                if (term && term.length) {
                    $scope.filteredArray = $filter('filter')($scope.reportsArr, {
                        'short_desc': term
                    });
                    if ($scope.filteredArray.length == 0) {
                        $scope.filteredArray = $filter('filter')($scope.reportsArr, {
                            'short_desc': $scope.search_reports
                        });
                    }
                }
            });
        }








        // if (!text || text.length === 0)
        //   $scope.filteredArray = $scope.reportsArr;
        // var searchTerms = text.split(' ');
        // searchTerms.forEach(function(term) {
        //   if (term && term.length)
        //     $scope.filteredArray = $filter('filter')($scope.reportsArr, {'name':term});
        // });
    }

    //new searching
    $scope.exactArr = [];
    $scope.matchStartWithArr = [];
    $scope.matchWordInMiddleArr = [];
    $scope.matchArr = [];

    $scope.$watch('search_reports', function(words) {
        $scope.exactArr = [];
        $scope.matchStartWithArr = [];
        $scope.matchWordInMiddleArr = [];
        $scope.matchArr = [];

        // console.log(valArr.length);
        /* your logic here */
        if (words != undefined) {
            var val = words.trim();
            var valArr = val.split(' ');

            if (val.length > 2) {
                var searchString = val.toLowerCase();
                var i = 0;
                //console.log(val.length);
                var pat = val.replace(/ /g, ".*");
                var pattern = new RegExp(pat);
                //console.log(pat);
                // var pattern = new RegExp("data.*colocation");
                //let pattern = /data.*colocation/;
                // console.log(pattern.test('Data Center Colocation Market in EMEA - Industry Outlook & Forecast 2020-2025')); 

                angular.forEach($scope.reportsArr, function(item) {
                    // console.log(pattern.test(item.name.toLowerCase()));

                    /*exact match*/
                    if (item.name.toLowerCase() == searchString) {
                        $scope.exactArr.push(item);
                        // console.log($scope.exactArr);
                        i++;
                    }
                    /*starts with*/
                    else if (item.name.substr(0, val.length).toLowerCase() == searchString) {
                        $scope.matchStartWithArr.push(item);
                        // console.log($scope.matchStartWithArr);
                        i++;
                    } else if (valArr.length > 1 && pattern.test(item.name.toLowerCase())) {
                        $scope.matchWordInMiddleArr.push(item);
                        // console.log(typeof($scope.matchWordInMiddleArr));
                        i++;
                    }
                    /*exact found in any part*/
                    else if (item.name.toLowerCase().indexOf(searchString) !== -1 || item.short_desc.toLowerCase().indexOf(searchString) !== -1) {
                        $scope.matchArr.push(item);
                        // console.log($scope.matchArr);
                        // console.log(searchString);
                        i++;
                    } else {
                        if (i == 0) {
                            $scope.exactArr = [];
                            $scope.matchStartWithArr = [];
                            $scope.matchWordInMiddleArr = [];
                            $scope.matchArr = [];
                            // console.log('searchString');
                        }
                    }
                });

                // console.log($scope.matchWordInMiddleArr);
                if ($scope.matchWordInMiddleArr.length > 1) {
                    $scope.matchWordInMiddleArr.sort(function(a, b) {
                        var firstWord = valArr[0].toLowerCase();
                        var lastWord = valArr[valArr.length - 1].toLowerCase();

                        // var firstStr = b.name.toLowerCase().match("data(.*)africa");
                        var firstStr = b.name.toLowerCase().match(firstWord + "(.*)" + lastWord);
                        var secondStr = a.name.toLowerCase().match(firstWord + "(.*)" + lastWord);
                        // console.lof()
                        // return a.name.length - b.name.length;
                        return secondStr[1].length - firstStr[1].length;
                    });
                    // console.log($scope.matchWordInMiddleArr);
                }

            } else {
                // console.log('test');
                $scope.exactArr = [];
                $scope.matchStartWithArr = [];
                $scope.matchWordInMiddleArr = [];
                $scope.matchArr = [];
            }

        }
        // console.warn('---------------------');
        // console.log('exactArr',$scope.exactArr);
        // console.log('matchStartWithArr',$scope.matchStartWithArr);
        // console.log('matchWordInMiddleArr',$scope.matchWordInMiddleArr);
        // console.log('matchArr',$scope.matchArr);
    }, true);



    $scope.getReportsFullViewFun = function(url, id) {
        $window.location.replace(url + id);
    }


}]);