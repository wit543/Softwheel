#raining('Bangkok').
irrigation('Ranong').
photo_sensitive('RD1').
grow_well('Bangkok', 'RD1').

can_growing(P1, 'GROW1'):-
   raining(P1).

#Main rule
recommend(P1, R1, G1, S1):-
   recommend_place_rice(P1,R1),
   recommend_place_growingmethod(P1, G1),
   recommend_rice_season(R1,S1).

recommend_place_rice(P1,R1):-
   grow_well(P1,R1).

recommend_place_growingmethod(P1, G1):-
   irrigation(P1);
   can_growing(P1,G1).
   
recommend_rice_season(R1,S1):-
   photo_sensitive(R1);
   not(photo_sensitive(R1)),
   S1='inseason'.

