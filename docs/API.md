# :fire::fire::fire: API documentation :fire::fire::fire:
:closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book:<br>
:closed_book: Document for frontend:closed_book:<br>
:closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book::closed_book:

## Big picture

  128.199.192.241 <br>
  |-api/ <br>
  |&nbsp;&nbsp;|- [rices](#rices)/ <br>
  |&nbsp;&nbsp;|-[provinces](#provinces)/ <br>
  |&nbsp;&nbsp;|-[districts](#districts)/ <br>
  |&nbsp;&nbsp;|-[sub-districts](#sub-districts)/ <br>
  |&nbsp;&nbsp;|-[mehthods](#methods)/ <br>
  |&nbsp;&nbsp;|-[locations](locations)/ <br>
  |&nbsp;&nbsp;|-[photo-sensitivities](#photo-sensitivitys)/ <br>
  |&nbsp;&nbsp;|-[havesting-date](#havesting-date)/ <br>
  |&nbsp;&nbsp;|-[planting-date](#planting-date)/ <br>
  |&nbsp;&nbsp;|-[season](#season)/ <br>
  |-[home](#home)

## Rice
- /api/rice/
```JSON
  rices:[
    {
      name:"rd15",
      photo_sensitive:true
    },
    {
      name:"rd15",
      photo_sensitive:true
    },
    {
      name:"rd15",
      photo_sensitive:true
    },
    {
      name:"rd15",
      photo_sensitive:false
    },
    {
      name:"rd15",
      photo_sensitive:true
    }
  ]
```
- /api/rices/?name=rd1
```JSON
  name="rd1",
  detail="good for consumming",
  photo_sensitive:false
```
- /api/rices/?provinces=bangkok&provinces=chatuchak&sub-districts=bangken
```JSON
    rices:[
      {
        name:"rd15",
        photo_sensitive:true
      },
      {
        name:"rd15",
        photo_sensitive:true
      }
    ]
  }
```
- /api/rices/?provinces=bangkok&provinces=chatuchak
```json
    rices:[
      {
        name:"rd15",
        photo_sensitive:true
      },
      {
        name:"rd15",
        photo_sensitive:true
      },
      {
        name:"rd17",
        photo_sensitive:false
      },
      {
        name:"rd15",
        photo_sensitive:true
      },
    ]
```
## Provinces
- /api/provinces
```JSON
  provinces:[
    {name:"bangkok"},
    {name:"bangkok"},
    {name:"bangkok"},
    {name:"bangkok"},
    {name:"bangkok"},
  ]
```
- /api/province?rice=rd1
```JSON
  provinces:[
    {name:"bangkok"},
    {name:"bangkok"},
    {name:"bangkok"},
  ]
```
## Districts
- /api/districts
```JSON
  districts:[
    {name:"chatuchak"},
    {name:"chatuchak"},
    {name:"chatuchak"},
    {name:"chatuchak"},
  ]
```
- /api/districts?province=bangkok
```JSON
  districts:[
    {name:"chatuchak"},
    {name:"chatuchakhatuchak"},
    {name:"chatuchak"},
  ]
```
- /api/districts?rice=rd1
```JSON
  districts:[
    {name:"chatuchak"},
    {name:"chatuchak"},
  ]
```
- /api/districts?province=bangkok&rice=rd1
```JSON
  districts:[
    {name:"chatuchak"},
    {name:"chatuchak"},
    ]
```
  
## Sub Districts
- /api/sub-districts/
```JSON
   sub_districts:[
    {name:"แก้งเหนือ"},
    {name:"เขมราฐ"}
   ]
```
- /api/sub-districts/?province=bangkok
```JSON
   sub_districts:[
    {name:"แก้งเหนือ"},
    {name:"เขมราฐ"}
   ]
```
- /api/sub-districts/?province=bangkok&district=chatcuckat
```JSON
   sub_districts:[
    {name:"แก้งเหนือ"},
    {name:"เขมราฐ"}
   ]
```
- /api/sub-districts/?province=bangkok&district=chatcukat&rice=rd15
```JSON
   sub_districts:[
    {name:"แก้งเหนือ"},
    {name:"เขมราฐ"}
   ]
```
- /api/sub-districts/?rice=rd15
```JSON
   sub_districts:[
    {name:"แก้งเหนือ"},
    {name:"เขมราฐ"}
   ]
```
## Methods
- /api/methods/
````JSON
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
````
- /api/methods/?rice=rd15
```JSON
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
```
- /api/methods/?province=bangkok
```JSON
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
```
- /api/methods/?province=bangkok&district=chatucak
```JSON
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
```
## Locations
- /api/locations/
```JSON
  locations:[
    {
      province:"bangkok",
      distrcit:"chatuchak",
      sub_district:"bangkain",
      lad:4.45,
      lng:14.45
    },
    {
      province:"bangkok",
      distrcit:"chatuchak",
      sub_district:"bangkain",
      lad:4.45,
      lng:14.45
    }
  ]
```
- /api/locations/?provincr=Bangkok&district=chatuchak&sub_district=bangkain
```JSON
      province:"bangkok",
      distrcit:"chatuchak",
      sub_district:"bangkain",
      lad:4.45,
      lng:14.45
```
## Havesting Date
## Planting Date
## Season
## home
  ![home](./images/home.png)
