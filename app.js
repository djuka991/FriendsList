const friends = [
    {
       name: "Richard Lewis",
       email: "RichradLewis@outlook.com",
       profilePic:"src='http://via.placeholder.com/300'",
       isOnline: true
    },
    {
        name: "Kent Hill",
        email: "KentHill@outlook.com",
        profilePic:"img/img2",
        isOnline: false
     },
     {
        name: "Michael Perez",
        email: "MichalePerez@yahoo.com",
        profilePic:"img/img3",
        isOnline: true
     },
     {
        name: "Roy Moreno",
        email: "RoyMoreno@gmail.com",
        profilePic:"img/p1.jpg",
        isOnline: false
     }
];


 friends.forEach( e => {
   const elemList = document.querySelector(".ul__list");

   let li = document.createElement("li");
   let div = document.createElement('div');
   let img = document.createElement("img");
   let div1 = document.createElement("div");
   let h2 = document.createElement("h2");
   let h3 = document.createElement("h3");
  
   li.classList.add("person");
   div.classList.add("person__img");
   div1.classList.add("person__info");

   li.append(div);
   li.append(div1);

   img.innerText = e.profilePic;
   h2.innerText = e.name;
   h3.innerText = e.email;

   div.append(img)
   div1.append(h2);
   div1.append(h3);
   
   
   elemList.append(li);
 
}); 


function isOnline() {
   friends.forEach(e => {
      if(e.isOnline === true) {
         //  li.classList.add("is-online")
         console.log("green");
      }
      if(e.isOnline === false) {
         // li.classList.add("is-Offline")
         console.log("red");
      }
     
   })
}

isOnline();




