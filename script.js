let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.80864189674227, lng: 12.6817286182912 },
        zoom: 12,
        mapId: 'ee380a4be3009b8d',
    });

    const markers = [

        [

            "Crime Scene",

            41.768306757886705,

            12.729030460186411,

            'crime-scene.png',

            38,

            31,

        ],

        [

            "Bloody knife",

            41.820122391173946,

            12.627505211618406,

            'murder.png',

            40,

            53,

        ],

        [

            'Saw',

            41.807934246073835,

            12.691214008538598,

            'murderer.png',

            50,

            60.7,

        ],

        [

            'Jonh',

            41.83611098424196,

            12.580697676847535,
            'murderer(1).png',

            50,

            60.7,

        ],

        [

            'Edward',

            41.86459633606453,

            12.741692374983785,

            'murderer(2).png',

            50,

            60.7,

        ],

        [

            'Revolver',

            41.75286116966029,

            12.54207424570321,

            'revolver.png',

            38,

            38,

        ],

    ]


    for (let i = 0; i < markers.length; i++) {

        const currMarker = markers[i];


        const marker = new google.maps.Marker({

            position: { lat: currMarker[1], lng: currMarker[2] },

            map,

            title: currMarker[0],

            icon: {

                url: currMarker[3],

                scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),

            },

            animation: google.maps.Animation.DROP,

        });


        const infowindow = new google.maps.InfoWindow({

            content: currMarker[0],

        });


        marker.addListener('click', () => {

            infowindow.open(map, marker);

        });

    }
}

marker.setMap(map);


