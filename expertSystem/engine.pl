irrigation('Ranong').
irrigation('Bangkok').
photo_sensitive('RD1').
grow_well('Bangkok', 'RD1').
grow_well('Bangkok', 'RD2').
growing_duration('RD1','GROW1',100).
growing_duration('RD2','GROW1',90).


can_growing(P1,PDATE,PMONTH,'indirect_seeding'):-
  in_season(P1,PDATE,PMONTH).
  
in_season('Bangkok',_, PMONTH):-
 PMONTH >= 5,
 PMONTH =< 10.

recommend(P1, R1, G1, PDATE, PMONTH):-
  recommend_place_rice(P1,R1),
  recommend_place_growingmethod(P1,PDATE,PMONTH,G1),
  recommend_rice_season(R1,P1,PDATE,PMONTH),
  growing_duration(R1,G1,DURATION),
  DATE = date(2016,PMONTH,PDATE,0,0,0,0,-,-),
  print(DATE),
  add_date(DATE,DURATION, HDATE),
  print(HDATE),
  green(P1,HDATE).
    
recommend_place_rice(P1,R1):-
  grow_well(P1,R1).

recommend_place_growingmethod(P1,PDATE,PMONTH, G1):-
  irrigation(P1);
  can_growing(P1,PDATE,PMONTH,G1).
  
recommend_rice_season(R1,P1,PDATE,PMONTH):-
  photo_sensitive(R1);
  not(photo_sensitive(R1)),
  in_season(P1, PDATE, PMONTH).

green('Bangkok', DATE):-
    STARTGREEN=date(2016,5,1),
    ENDGREEN=date(2016,10,15),
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
