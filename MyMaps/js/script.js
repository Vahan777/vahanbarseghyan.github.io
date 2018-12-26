// 'use strict';

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: new google.maps.LatLng(40.18726970514995, 44.515242690354285),
          mapTypeId: 'roadmap',
          styles: [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#008285"
            },
            {
                "saturation": 100
            },
            {
                "lightness": -66
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#CAFCE4"
            },
            {
                "saturation": 85
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#61C273"
            },
            {
                "saturation": 2
            },
            {
                "lightness": -27
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#B0C4C7"
            },
            {
                "saturation": -83
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    }
]
        });

        var iconBase = 'images/';
        var icons = {
          parking: {
            icon: iconBase + 'avatar.png'
          },
          library: {
            icon: iconBase + 'avatar.png'
          },
          info: {
            icon: iconBase + 'avatar.png'
          }
        };

        var features = [
          {
            position: new google.maps.LatLng(40.18726970514995, 44.515242690354285),
            type: 'info'
          }
        ];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      }