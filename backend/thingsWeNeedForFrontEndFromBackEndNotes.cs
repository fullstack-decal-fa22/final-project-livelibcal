these are thing from backend that wwhat it looks like we need 

we shoud hav api that can return a list of libraries name/id based on these inputs from user (from most weighted to least weighted):
{
    isOpen: true/false
    location of user (lat, long)
    desired walking distance range (float)
    busyness (out of 100 )
    prefered sound level (out of 100)
    review ratings (out of 5)
    etc
}
 
there should be another api that returns library object with its details given a name/id
and library object should have 
{
    link to library image
    library address
    library coordinates (so i can put a google map api thingy with marker)
    library crowd meter
    library noise meter
    library description
    library rating (calculated from reviews)
    library reviews : [{name, rating, message},{name2, rating2, message2}]
}
with abilty to do post request to add review 

in addition to there should be credentials system that stores login username, hashed password, and user preferred library inputs so we can load them if they are logged in. 


henley