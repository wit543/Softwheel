irrigation("Chiang_Mai","Chom_Thong").
irrigation("Bangkok","Chatuchak").
photo_sensitive("RD1").
grow_well("Chiang_Mai","Chom_Thong","Khuang_Pao","RD6","IN_SEASON").
grow_well("Chiang_Mai","Chom_Thong","Khuang_Pao","Jasmine105","IN_SEASON").
grow_well("Chiang_Mai","Chom_Thong","Khuang_Pao","RD44","OFF_SEASON").
growing_duration("RD1","GROW1",100).
growing_duration("RD2","GROW1",90).
growing_duration("RD6","indirect_seeding",112).
growing_duration("Jasmine105","indirect_seeding",130).
green("Chiang_Mai",date(2016,5,1),date(2016,10,15)).
history_rainning("TEST").
forecast_rainning("TEST").

can_growing(P1,"indirect_seeding"):-
   history_rainning(P1),
   not(forecast_rainning(P1)).

in_season("Bangkok",5,10).
in_season("Chiang_Mai",4,9).
  
is_in_season(P1,_, PMONTH, SEASON):-
 in_season(P1,START,END),
 between(START,END,PMONTH),
 SEASON = "IN_SEASON";
 SEASON = "OFF_SEASON".

  
recommend(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR, HDAY, HMONTH, HYEAR):-
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  recommend_rice_season(R1,SEASON),
  growing_duration(R1,G1,DURATION),
  DATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  add_date(DATE,DURATION, HDATE),
  is_green(P1,HDATE),
  date_time_value(day,HDATE, HDAY),
  date_time_value(month,HDATE, HMONTH),
  date_time_value(year,HDATE, HYEAR).

recommendP(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  recommend_rice_season(R1,SEASON),
  PLANTINGDATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  harvest_date(R1,G1,PLANTINGDATE,HDAY,HMONTH,HYEAR),
  is_green(P1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).

recommendH(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
  HARVESTINGDATE = date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-),
  planting_date(R1,G1,HARVESTINGDATE,PDAY,PMONTH,PYEAR),
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  recommend_rice_season(R1,SEASON),
  is_green(P1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).

harvest_date(R1,G1,PD1,HDAY, HMONTH, HYEAR):-
  growing_duration(R1,G1,DURATION),
  add_date(PD1,DURATION, HDATE),
  date_time_value(day,HDATE, HDAY),
  date_time_value(month,HDATE, HMONTH),
  date_time_value(year,HDATE, HYEAR).

planting_date(R1,G1,HD1,PDAY,PMONTH,PYEAR):-
  growing_duration(R1,G1,DURATION),
  minus_date(HD1,DURATION, PDATE),
  date_time_value(day,PDATE, PDAY),
  date_time_value(month,PDATE, PMONTH),
  date_time_value(year,PDATE, PYEAR).

recommend_place_rice(P1,A1,T1,R1,SEASON):-
  grow_well(P1,A1,T1,R1,SEASON).

recommend_place_growingmethod(P1,A1, G1):-
  irrigation(P1,A1);
  not(irrigation(P1,A1)),
  can_growing(P1,G1).
  
recommend_rice_season(R1,IN_SEASON):-
  photo_sensitive(R1);
  not(photo_sensitive(R1)),
  IN_SEASON == "IN_SEASON".

is_green(P1, DATE):-
    green(P1,STARTGREEN,ENDGREEN),
    between_date(STARTGREEN,ENDGREEN,DATE).

earlier(DATE1, DATE2) :- 
    date_time_stamp(DATE1, STAMP1),
    date_time_stamp(DATE2, STAMP2),
    STAMP1 < STAMP2.

between_date(START, END, DATE):-
    earlier(START, DATE),
    earlier(DATE, END).

add_date(DATE, NUMDAYS, RES):-
    date_time_stamp(DATE, STAMP1),
	STAMP2 is (STAMP1 + NUMDAYS*86400),
    stamp_date_time(STAMP2, DATE2, 0),
    RES = DATE2.

minus_date(DATE, NUMDAYS, RES):-
    date_time_stamp(DATE, STAMP1),
    STAMP2 is (STAMP1 - NUMDAYS*86400),
    stamp_date_time(STAMP2, DATE2, 0),
    RES = DATE2.

simple(P1,A1,T1,R1,G1,SEASON,STARTDAY,STARTMONTH,ENDDAY,ENDMONTH):-
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_rice_season(R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  green(P1,GSTARTDATE,GENDDATE),
  growing_duration(R1,G1, NUMDAYS),
  minus_date(GSTARTDATE, NUMDAYS , STARTDATE),
  minus_date(GENDDATE, NUMDAYS , ENDDATE),
  date_time_value(day,STARTDATE, STARTDAY),
  date_time_value(month,STARTDATE, STARTMONTH),
  date_time_value(day, ENDDATE, ENDDAY),
  date_time_value(month, ENDDATE, ENDMONTH).
  
recommend_rice_season(R1,IN_SEASON):-
  photo_sensitive(R1);
  not(photo_sensitive(R1)),
  IN_SEASON == "IN_SEASON".
