var contentArray = [];

contentArray.push(new Content(
  "Jon Miller",
  "http://sand.jonm.us",
  "Senior Engineer with experience in leading teams and building stuff using Java and a helping of HBase. Also occasionally teaches classes in Node.js for some reason.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Lloyd Chambrier",
  "https://github.com/LloydC",
  "Mr. Hot Chocolate. Sleek, seductive, confident. Loyal.",
  "thumbnails/picture.png"
));


contentArray.push(new Content(
  "Trung Vo",
  "https://github.com/Developoz",
  "Polite, professional, and methodical. Draws a crowd on the dance floor. He's a cupcake.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Dianthe van Velzen",
  "https://github.com/Dianthe",
  "Sharp. Asks the right questions. Probably going to run the show someday.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Mandisa Thomas",
  "https://github.com/MandisaT",
  "Diligent and warm. A survivor with empathy left to spare.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Amma Thomas",
  "https://github.com/amma9",
  "Just waiting for the right opportunity. Bright and shy.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Thijs Tel",
  "https://github.com/nalar",
  "Give him two weeks and he'll know more than your CTO. Unbelievable power wrapped in a friendly, supportive package. Lightning.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Yoni Stap",
  "https://github.com/YoniStap",
  "A rising tide raises all ships. Yoni is that tide. Learns quickly, teaches others.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Lindsey Schaap",
  "https://github.com/linjoe2",
  "The black sheep which wandered away, then came back smarter and stronger than all the rest. Self motivated, full of ideas, and able to execute.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Loet Romijn",
  "https://github.com/LoetRomijn",
  "Hard working, smart, and lovable. Deserves endless praise. A soaring eagle who doubts her own wings.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Saan Rashid",
  "https://github.com/SaanGithub",
  "Twinkly with quiet charisma. Easy to work with and delivers on time.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Alex Quintero Rivera",
  "https://github.com/alexquinterorivera",
  "Friendly. Delivers polished work. Alex makes Christmas come early.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Inessa Li",
  "https://github.com/inessa-lee",
  "Forthright and effective. All business. Serious business, served with a side of kittens.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Tim Van Lent",
  "https://github.com/TimVanLent",
  "An artist in a new medium. Quiet but unshy. Excellent worker.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Sara Koops",
  "https://github.com/SaraKoops",
  "Succeeds through sheer force of will. Revelations are accompanied by twinkly laughs. Unstoppable.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Kilian Kielman",
  "https://github.com/KilianKielman",
  "A wandering entrepreneur. Gets to the point. Work first laugh second.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Kevin de Jonge",
  "https://github.com/kevindejonge",
  "A charismatic and goofy exterior houses well considered thought processes. Confident, good natured, and smart.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Koen Grosman",
  "https://github.com/koengrosman",
  "Just a peach. A quiet observer and effective worker.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Roberto Floris",
  "https://github.com/DiagoSmith",
  "q-t-π. Very sweet. A lifelong student who learns well and delivers better.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Frederiek Pennink",
  "https://github.com/fpenn",
  "A force. Confident, quiet. Success appears to come effortlessly. A little smile might come your way.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Ashlee Brown",
  "https://github.com/ashleemb",
  "Confident, friendly, professional. Attacks challenges calmly and overcomes them consistently.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Thirsa de Boer",
  "https://github.com/Thirsa",
  "Wise, cunning, warm, true. Detail oriented and goes the extra mile.",
  "thumbnails/picture.png"
));

contentArray.push(new Content(
  "Colette Biervliet-Schranz",
  "https://github.com/colette419",
  "Self sufficient, easygoing, and intelligent. Works well alone and with others.",
  "thumbnails/picture.png"
));


function Content(name, link, description, thumbnail) {
  this.name = name;
  this.link = link;
  this.description = description;
  this.thumbnail = thumbnail;
}

function shuffle(array) {
  var counter = array.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter--;

    var temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
}

shuffle(contentArray);

var $siteContainer = $("#site-container");
var $currentRow;
contentArray.forEach(function(item, index) {
  if (index % 2 === 0) {
    $currentRow = $("<div class='row'>");
    $siteContainer.append($currentRow);
  }

  $currentRow.append(
    '<div class="portfolio-entry col-md-6"><div class="portfolio-background"><img class="portfolio-icon" src="'
    + item.thumbnail
    + '" alt=""><div class="portfolio-text-div"><h2 class="portfolio-name">'
    + item.name
    + ' - </h2><a class="portfolio-link" href="'
    + item.link
    + '" target="_blank">github</a><p class="portfolio-description">'
    + item.description
    + '</p></div></div></div>'
  );
});