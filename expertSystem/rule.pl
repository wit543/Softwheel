- module(rule, []).

history_rainning("Test").
forecast_rainning("Test").

can_growing(P1,"indirect_seeding"):-
   history_rainning(P1),
   not(forecast_rainning(P1)).

can_growing(P1,"broadcast_sowing"):-
  province(P1).

is_in_season(P1,_, PMONTH, SEASON):-
 in_season(P1,START,END),
 between(START,END,PMONTH),
 SEASON = "in_season";
 SEASON = "off_season".

recommendP(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  recommend_rice_season(R1,SEASON),
  PLANTINGDATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  harvest_date(R1,G1,PLANTINGDATE,HDAY,HMONTH,HYEAR),
  is_green(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).

recommendH(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
  HARVESTINGDATE = date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-),
  planting_date(R1,G1,HARVESTINGDATE,PDAY,PMONTH,PYEAR),
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON),
  recommend_place_growingmethod(P1,A1,G1),
  recommend_rice_season(R1,SEASON),
  is_green(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).

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

ex_harvest_date(R1,G1,PDAY,PMONTH,PYEAR,HDAY, HMONTH, HYEAR):-
  PD1 = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  growing_duration(R1,G1,DURATION),
  add_date(PD1,DURATION, HDATE),
  date_time_value(day,HDATE, HDAY),
  date_time_value(month,HDATE, HMONTH),
  date_time_value(year,HDATE, HYEAR).

ex_planting_date(R1,G1,HDAY, HMONTH, HYEAR,PDAY,PMONTH,PYEAR):-
  HD1 = date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-),
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
  IN_SEASON == "in_season".

is_green(P1,A1,T1, DATE):-
    green(P1,A1,T1,STARTGREEN,ENDGREEN),
    between_date(STARTGREEN,ENDGREEN,DATE).

is_red(P1, A1, T1, DATE):-
    red(P1,A1,T1, STARTRED,ENDRED),
    between_date(STARTRED,ENDRED,DATE).

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
  green(P1,A1,T1,GSTARTDATE,GENDDATE),
  growing_duration(R1,G1, NUMDAYS),
  minus_date(GSTARTDATE, NUMDAYS , STARTDATE),
  minus_date(GENDDATE, NUMDAYS , ENDDATE),
  date_time_value(day,STARTDATE, STARTDAY),
  date_time_value(month,STARTDATE, STARTMONTH),
  date_time_value(day, ENDDATE, ENDDAY),
  date_time_value(month, ENDDATE, ENDMONTH).

ex_recommendP_place_rice(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  recommend_place_rice(P1,A1,T1,R1,SEASON).

ex_recommendP_place_growingmethod(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  recommend_place_growingmethod(P1,A1,G1).

ex_recommendP_rice_season(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_rice_season(R1,SEASON).

ex_recommendP_harvesting_date(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  PLANTINGDATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  harvest_date(R1,G1,PLANTINGDATE,HDAY,HMONTH,HYEAR),
  not(is_red(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-))).

ex_recommendP_harvesting_dateR(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  PLANTINGDATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  harvest_date(R1,G1,PLANTINGDATE,HDAY,HMONTH,HYEAR),
  not(is_red(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-))).

ex_recommendP_harvesting_dateG(P1,A1,T1, R1, G1, PDAY, PMONTH, PYEAR):-
  PLANTINGDATE = date(PYEAR,PMONTH,PDAY,0,0,0,0,-,-),
  harvest_date(R1,G1,PLANTINGDATE,HDAY,HMONTH,HYEAR),
  is_green(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).

ex_recommendH_place_rice(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
  HARVESTINGDATE = date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-),
  planting_date(R1,G1,HARVESTINGDATE,PDAY,PMONTH,PYEAR),
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_place_rice(P1,A1,T1,R1,SEASON).

ex_recommendH_place_growingmethod(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
  recommend_place_growingmethod(P1,A1,G1).

ex_recommendH_place_rice_season(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
  HARVESTINGDATE = date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-),
  planting_date(R1,G1,HARVESTINGDATE,PDAY,PMONTH,PYEAR),
  is_in_season(P1,PDAY,PMONTH,SEASON),
  recommend_rice_season(R1,SEASON).

ex_recommendH_harvesting_date(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
not(is_red(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-))).

ex_recommendH_harvesting_dateR(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
not(is_red(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-))).

ex_recommendH_harvesting_dateG(P1,A1,T1, R1, G1, HDAY, HMONTH, HYEAR):-
is_green(P1,A1,T1,date(HYEAR,HMONTH,HDAY,0,0,0,0,-,-)).


% compare util
string_less_than_number(X,Y):- atom_number(X,Z),Z<Y.
string_more_than_number(X,Y):- atom_number(X,Z),Z>Y.
string_less_than_equal_number(X,Y):- atom_number(X,Z),Z=<Y.
string_more_than_equal_number(X,Y):- atom_number(X,Z),Z>=Y.
string_less_than_string(X,Y):-atom_number(X,I),atom_number(Y,J),I<J.
string_more_than_string(X,Y):-atom_number(X,I),atom_number(Y,J),I>J.
clear_list(List,NewList):-NewList = [].
to_list(Y,X):-X=[Y].