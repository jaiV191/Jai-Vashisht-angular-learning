import {User} from "../models/user";

export const players:User[]=[
{ id: 1, firstName: 'Michael', lastName: 'Jordan',draft:1981, team: 'Chicago Bulls',points: 30.1,mvp: 5, img:"/assets/jordan.jpeg" },
{ id: 2, firstName: 'Kobe', lastName: 'Bryant',draft:1996, team: 'Los Angeles Lakers',points:25.9, mvp: 1,img:"/assets/kobe.jpeg" },
{ id: 3, firstName: 'LeBron', lastName: 'James',draft:2003, team: 'Los Angeles Lakers',points:27.1,mvp:4 ,img:"/assets/bron.jpeg"},
{ id: 4, firstName: 'Larry', lastName: 'Bird', draft:1978,team: 'Boston Celtics',points:19.68,mvp:3 ,img:"/assets/bird.jpeg"},
{ id: 5, firstName: 'Stephen', lastName: 'Curry',draft:2009, team: 'Golden State Warriors',points:24.69,mvp:2,img:"/assets/curry.jpeg" },
{ id: 6, firstName: 'Tim', lastName: 'Duncan',draft:1997, team: 'San Antonio Spurs',points:19.0,mvp:2, img:"/assets/tim.jpeg" }
];
