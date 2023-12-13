var click = document.getElementById("on");
var intro = document.getElementById("intro");
var name = document.getElementById("name");

// var messages = [

//     {
//         massge : "“Be yourself; everyone else is already taken.”" ,
//         name : "John",
//     },
//     {
//         massge :  "“So many books, so little time.”" ,
//         name : "narges" ,
//     }

// ]

// function massge () {


//     for (var i = 0 ; i < messages.length ; i++) {

//         intro.innerHTML = String(Math.random() * messages.massge);
//         console.log (toString(Math.floor((Math.random() * messages[i].massge))))

//     }

// }


   var messages = ["“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
     "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
      "“So many books, so little time.”" ,
       "“A room without books is like a body without a soul.” ",
      "“You only live once, but if you do it right, once is enough”" ,
       "“Be the change that you wish to see in the world.”",
      "“If you tell the truth, you don't have to remember anything.”" ,
       "“Without music, life would be a mistake.”",

      ];

      click.addEventListener("click", function () {

         intro.textContent = messages[i];
         var rand = Math.floor((Math.random() * (messages.length-1)));
         i = rand + (rand >= i);

      })

   var i = Math.floor((Math.random() * messages.length)),
   intro = document.getElementById("intro");