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
  |&nbsp;&nbsp;|-[photo-sensitivitys](#photo-sensitivitys)/ <br>
  |&nbsp;&nbsp;|-[havesting-date](#havesting-date)/ <br>
  |&nbsp;&nbsp;|-[planting-date](#planting-date)/ <br>
  |&nbsp;&nbsp;|-[season](#season)/ <br>
  |-[home](#home)

## Rice
<table>
  <tr>
    <th>Path</th>
    <th>JSON</th>
  </tr>
  <tr>
  <td>
/api/rice/
 </td>
 <td>
      <div class="highlight highlight-json"><pre>
      {
          rices:[
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
          ]
      }
    </pre></div>
    </td>
    </tr>
    
    <tr><td>
/api/rices/?name=rd1
 </td>
 <td>
 <div class="highlight highlight-json"><pre>
    {
      name="rd1"
      detail="good for consumming"
    }
     </pre></div>
 </td>
 </tr>

  <tr><td>
  
  /api/rices/?provinces=bangkok&provinces=chatuchak&sub-districts=bangken
</td><td>
 <div class="highlight highlight-json"><pre>
  {
    rices:[
      {name:"rd15"},
      {name:"rd15"},
    ]
  }
  </pre></div>
</td>
</tr>
<tr><td>
/api/rices/?provinces=bangkok&provinces=chatuchak
</td><td>
 <div class="highlight highlight-json"><pre>
  {
    rices:[
      {name:"rd15"},
      {name:"rd15"},
      {name:"rd15"},
      {name:"rd15"},
    ]
  }
    </pre></div>
</td>
</tr>
</table>
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
```
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
```
- /api/methods/?rice=rd15
``
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
``
- /api/methods/?province=bangkok
``
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
``
- /api/methods/?province=bangkok&district=chatucak
``
  methods:[
    {name:"wet"},
    {name:"dry"}
  ]
``
## Locations
## Photo Sensitivitys
## Havesting Date
## Planting Date
## Season
## home
  ![home](./images/home.png)
