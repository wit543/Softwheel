#Backend

## Requirment
 - node 6.x up
 - internet
 
## Get started

 clone the project
```
 git clone https://github.com/wit543/Softwheel.git
```
 get inside the backend folder
```
 Softwheel
  |-backend <== here
  |-docs
  |-expertSystem
  
  cd Softwheel/backend/
```
 install requirment
 ```javascript
  npm install
 ```
 contract [@wit543]() for config.json
 move json file to backend directory
 ```
 Softwheel
  |-backend 
  | |-api_routes
  | |-public
  | |-util
  | |-view_routes
  | |-index.js
  | |-package.json
  | |-config.json <== herre
  |-docs
  |-expertSystem
```
 run projet
 ```
  npm start
 ```

## Database
 table
 - rices
   
                                      Table "public.rices"
       Column      |         Type          | Modifiers | Storage  | Stats target | Description
  -----------------|-----------------------|-----------|----------|--------------|-------------
   name_th         | character varying(80) |           | extended |              |
   name_en         | character varying(80) |           | extended |              |
   photo_sensitive | boolean               |           | plain    |              |
   
 - rices_by_location_napun 
   
                          Table "public.rices_by_location_napee"
       Column      |      Type      | Modifiers | Storage  | Stats target | Description
  -----------------|----------------|-----------|----------|--------------|-------------
   province_th     | character(100) |           | extended |              |
   province_en     | character(100) |           | extended |              |
   district_th     | character(100) |           | extended |              |
   district_en     | character(100) |           | extended |              |
   sub_district_th | character(100) |           | extended |              |
   sub_district_en | character(100) |           | extended |              |
   rice_species_th | character(100) |           | extended |              |
   rice_species_en | character(100) |           | extended |              |

 - rices_by_location_napee
 
                          Table "public.rices_by_location_napun"
       Column      |      Type      | Modifiers | Storage  | Stats target | Description
  -----------------|----------------|-----------|----------|--------------|-------------
   province_th     | character(100) |           | extended |              |
   province_en     | character(100) |           | extended |              |
   district_th     | character(100) |           | extended |              |
   district_en     | character(100) |           | extended |              |
   sub_district_th | character(100) |           | extended |              |
   sub_district_en | character(100) |           | extended |              |
   rice_species_th | character(100) |           | extended |              |
   rice_species_en | character(100) |           | extended |              |
