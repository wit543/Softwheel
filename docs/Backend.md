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
   
   example:
   
           name_th         |         name_en         | photo_sensitive
  -------------------------|-------------------------|-----------------
   กข1                     | rd1                     | t
   กข10                    | rd10                    | t
   กข11                    | rd11                    | t
   กข12(หนองคาย80)         | nongkai80               | t
   กข13                    | rd13                    | t
   กข14                    | rd14                    | t
   กข15                    | rd15                    | t
   กข15                    | rd15                    | t
   กข16                    | rd16                    | t
   กข17                    | rd17                    | t

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

   Example
   
                                              province_th                                             |                                             province_en                                              |                                             district_th                                              |                                             district_en                                              |                                           sub_district_th                                            |                                           sub_district_en                                            |                                           rice_species_th                                            |                                           rice_species_en
   ----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ข่วงเปา                                                                                               | Khuang Pao                                                                                           | กข6                                                                                                  | rd6
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ข่วงเปา                                                                                               | Khuang Pao                                                                                           | ขาวดอกมะลิ105                                                                                         | jasmine105
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ข่วงเปา                                                                                               | Khuang Pao                                                                                           | เหนียวสันป่าตอง                                                                                         | niawsan_pah_tawng
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ดอยแก้ว                                                                                               | Doi Kaeo                                                                                             | กข6                                                                                                  | rd6
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ดอยแก้ว                                                                                               | Doi Kaeo                                                                                             | ขาวดอกมะลิ105                                                                                         | jasmine105
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | ดอยแก้ว                                                                                               | Doi Kaeo                                                                                             | เหนียวสันป่าตอง                                                                                         | niawsan_pah_tawng
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | บ้านแปะ                                                                                               | Ban Pae                                                                                              | สันป่าตอง1                                                                                             | san_pah_tawng1
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | บ้านแปะ                                                                                               | Ban Pae                                                                                              | กข6                                                                                                  | rd6
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | บ้านแปะ                                                                                               | Ban Pae                                                                                              | ขาวดอกมะลิ105                                                                                         | jasmine105
   เชียงใหม่                                                                                            | Chiang Mai                                                                                           | จอมทอง                                                                                               | Chom Thong                                                                                           | บ้านหลวง                                                                                              | Ban Luang                                                                                            | กข6                                                                                                                             | rd6

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
   
   Example
   
                                               province_th                                             |                                             province_en                                              |                                             district_th                                              |                                             district_en                                              |                                           sub_district_th                                            |                                           sub_district_en                                            |                                           rice_species_th                                            |                                           rice_species_en
   ----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | กุดข้าวปุ้น                                                                                              | Kut Khaopun                                                                                          | กาบิน                                                                                                 | Kabin                                                                                                | ปทุมธานี1                                                                                              | pathumthani1
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | กุดข้าวปุ้น                                                                                              | Kut Khaopun                                                                                          | กาบิน                                                                                                 | Kabin                                                                                                | ชัยนาท1                                                                                               | chainat1
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | กุดข้าวปุ้น                                                                                              | Kut Khaopun                                                                                          | ข้าวปุ้น                                                                                                | Khao Pun                                                                                             | ปทุมธานี1                                                                                              | pathumthani1
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | กุดข้าวปุ้น                                                                                              | Kut Khaopun                                                                                          | ข้าวปุ้น                                                                                                | Khao Pun                                                                                             | ชัยนาท1                                                                                               | chainat1
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | แก้งเหนือ                                                                                              | Kaeng Nuea                                                                                           | กข10                                                                                                 | rd10
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | ขามป้อม                                                                                               | Kham Pom                                                                                             | กข33                                                                                                 | rd33
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | ขามป้อม                                                                                               | Kham Pom                                                                                             | กข10                                                                                                 | rd10
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | เขมราฐ                                                                                               | Khemarat                                                                                             | กข33                                                                                                 | rd33
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | เจียด                                                                                                 | Chiat                                                                                                | กข33                                                                                                 | rd33
    อุบลราชธานี                                                                                          | Ubon Ratchathani                                                                                     | เขมราฐ                                                                                               | Khemarat                                                                                             | นาแวง                                                                                                | Na Waeng                                                                                             | กข33                                                                                                 | rd33

