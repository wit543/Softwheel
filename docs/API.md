# :fire::fire::fire: API documentation :fire::fire::fire:

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
  |-home

## Rices
 - /api/rice/
 
    ```JSON
      {
          rices:[
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
            {name:"rd15"},
          ]
      }
    ```
    
 - /api/rices/?name=rd1
 
  ```JSON
    {
      name="rd1"
      detail="good for consumming"
    }
  ```
  
- /api/rices/?provinces=bangkok&provinces=chatuchak&sub-districts=bangken

```JSON
  {
    rices:[
      {name:"rd15"},
      {name:"rd15"},
    ]
  }
```

- /api/rices/?provinces=bangkok&provinces=chatuchak

```JSON
  {
    rices:[
      {name:"rd15"},
      {name:"rd15"},
      {name:"rd15"},
      {name:"rd15"},
    ]
  }
## Provinces
## Districts
## Sub Districts
## Methods
## Locations
## Photo Sensitivitys
## Havesting Date
## Planting Date
## Season
