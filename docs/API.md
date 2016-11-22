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
- :white_check_mark: /api/rice/
```JSON
  rices:[
        {
      "name_th":"กข-แม่โจ้2",
      "name_en":"rd_maejo2",
      "photo_sensitive":true
    },
    {
      "name_th":"กข1",
      "name_en":"rd1",
      "photo_sensitive":true
    },
    {
      "name_th":"กข10",
      "name_en":"rd10",
      "photo_sensitive":true
    },
    {
      "name_th":"กข11",
      "name_en":"rd11",
      "photo_sensitive":true
    },
    {
      "name_th":"กข12(หนองคาย80)",
      "name_en":"nongkai80",
      "photo_sensitive":true
    },
    {
      "name_th":"กข13",
      "name_en":"rd13",
      "photo_sensitive":true
    },
    {
      "name_th":"กข14",
      "name_en":"rd14",
      "photo_sensitive":true
    }
  ]
```
- :white_check_mark: /api/rices/?name=rd1
```JSON
  "name_th":"กข-แม่โจ้2",
  "name_en":"rd_maejo2",
  photo_sensitive:false
```
- :white_check_mark: /api/rices/?name=argarewgfare (doesn't exist)
```JSON
  "error": "doesn't exist"
```
- /api/rices/?provinces=bangkok&district=chatuchak&sub_districts=bangken
```JSON
    rices:[
       {
        "name_th":"กข-แม่โจ้2",
        "name_en":"rd_maejo2",
        "photo_sensitive":true
      },
      {
        "name_th":"กข1",
        "name_en":"rd1",
        "photo_sensitive":true
      },
      {
        "name_th":"กข10",
        "name_en":"rd10",
        "photo_sensitive":true
      },
      {
        "name_th":"กข11",
        "name_en":"rd11",
        "photo_sensitive":true
      },
      {
        "name_th":"กข12(หนองคาย80)",
        "name_en":"nongkai80",
        "photo_sensitive":true
      },
      {
        "name_th":"กข13",
        "name_en":"rd13",
        "photo_sensitive":true
      },
      {
        "name_th":"กข14",
        "name_en":"rd14",
        "photo_sensitive":true
      }
    ]
```
- /api/rices/?provinces=bangkok&district=chatuchak
```JSON
      rices:[
      {
        "name_th":"กข-แม่โจ้2",
        "name_en":"rd_maejo2",
        "photo_sensitive":true
      },
      {
        "name_th":"กข1",
        "name_en":"rd1",
        "photo_sensitive":true
      },
      {
        "name_th":"กข10",
        "name_en":"rd10",
        "photo_sensitive":true
      },
      {
        "name_th":"กข11",
        "name_en":"rd11",
        "photo_sensitive":true
      },
      {
        "name_th":"กข12(หนองคาย80)",
        "name_en":"nongkai80",
        "photo_sensitive":true
      },
      {
        "name_th":"กข13",
        "name_en":"rd13",
        "photo_sensitive":true
      },
      {
        "name_th":"กข14",
        "name_en":"rd14",
        "photo_sensitive":true
      }
    ]
```
## Provinces
- /api/provinces
```JSON
{
"provinces": [
{
"province_th": "สุพรรณบุรี                                                                                          "
},
{
"province_th": "เชียงใหม่                                                                                           "
},
{
"province_th": "สุรินทร์                                                                                            "
},
{
"province_th": "อุบลราชธานี                                                                                         "
}
]
}
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
- /api/locations/?province=Bangkok&district=chatuchak&sub_district=bangkain
```JSON
      province:"bangkok",
      distrcit:"chatuchak",
      sub_district:"bangkain",
      lad:4.45,
      lng:14.45
```
## Havesting Date
- /api/havesting-date/
```JSON
  error:"not input"
```
- /api/havesting-date/?planting_date=15/5/16&province=Bangkok&district=chatuchak&sub_district=bangkern&growing_method=dry&rice=rd15
```JSON
  date:15/6/15
```
## Planting Date
- /api/planting-date/
```JSON
  error:"not input"
```
- /api/planting-date/?havesting_date=15/5/16&province=Bangkok&district=chatuchak&sub_district=bangkern&growing_method=dry&rice=rd15
```JSON
  date:15/6/15
```
## Season
## home
  ![home](./images/home.png)
