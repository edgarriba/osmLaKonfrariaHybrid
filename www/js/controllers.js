angular.module('controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  /*$scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.login = function() {
  	console.log('Doing login', $scope.loginData);
  };*/

  console.log('AppCtrl');
})

.controller('MapCtrl', [ '$scope', function($scope) {
    $scope.map = {
    	tiles: {
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      },
		center: {
	        lat: 41.413219,
	        lng: 1.9686877,
	        zoom: 15
        },
        markers: {
            sample1: {
                group: 'group1',
                lat: 41.4135495815537,
                lng: 1.96671903133392,
                label: {
                    message: "sample1",
                    options: {
                        noHide: true
                    }
                }
            },
            sample2: {
                group: 'group1',
                lat: 41.4133202661423,
                lng: 1.96570515632629,
                label: {
                    message: "sample2",
                    options: {
                        noHide: true
                    }
                }
            },
            sample3: {
                group: 'group2',
                lat: 41.4120368895115,
                lng: 1.97112858295441,
                label: {
                    message: "sample3",
                    options: {
                        noHide: true
                    }
                }
            },
            sample4: {
                group: 'group2',
                lat: 41.4108701614814,
                lng: 1.97119295597076,
                label: {
                    message: "sample4",
                    options: {
                        noHide: true
                    }
                }
            },
        },
        layers: {
            /*overlays: {
                northTaiwan: {
                    name: "North cities",
                    type: "markercluster",
                    visible: true
                },
                southTaiwan: {
                    name: "South cities",
                    type: "markercluster",
                    visible: true
                }
            }*/
        },
      	defaults: {
      		tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
			maxZoom: 18,
            zoomControlPosition: 'bottomleft'
      	},
      	events: {
			map: {
				enable: ['context'],
				logic: 'emit'
			}
		}
    }

    $scope.initLocation = function() {
    	console.log('initLocation');
    	$scope.map.center = {
	        lat: 41.413219,
	        lng: 1.9686877,
	        zoom: 15
        };
    }

    $scope.clientSideList = [
	    { text: "OSM", value: "osm" },
	    { text: "ArcGIS", value: "arcgis" },
	];

	$scope.data = {
    	clientSide: 'osm'
  	};

  	$scope.setTile = function(itemValue) {
  		var url;
  		if (itemValue == 'osm') {
  			url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  		} else if (itemValue == 'arcgis') {
    		url='http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  		} else {
  			url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  		}
  		$scope.map.tiles.url = url;
  	}

    $scope.locate = function() {
    	console.log('autoDiscover');
    	alert("TODO: Find Location");
    	/*$scope.map.center.autoDiscover=true;
    	$scope.map.center.zoom=18;*/
    }

}]);