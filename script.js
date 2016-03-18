var contentArray = [];

contentArray.push(new Content(
  "Jon Miller",
  "http://github.com/j7caiman",
  "Senior Engineer with experience in leading teams and building stuff using Java and a helping of HBase. Also occasionally teaches classes in Node.js for some reason.",
  "resources/sand_thumb.png",
  "resources/sand.png"
));

contentArray.push(new Content(
  "Lloyd Chambrier",
  "http://lloydchambrier.com/",
  "Mr. Hot Chocolate. Sleek, seductive, confident. Loyal.",
  "resources/Lloyd-Portfolio_thumb.png",
  "resources/Lloyd-Portfolio.png"
));


contentArray.push(new Content(
  "Trung Vo",
  "http://developoz.github.io/",
  "Polite, professional, and methodical. Draws a crowd on the dance floor. He's a cupcake.",
  "resources/trung_thumbnail.jpg",
  "resources/trung_screenshot.jpg"
));

contentArray.push(new Content(
  "Dianthe van Velzen",
  "https://dianthe.github.io/",
  "Sharp. Asks the right questions. Probably going to run the show someday.",
  "resources/Dianthe-Portfolio_thumb.png",
  "resources/Dianthe-Portfolio.png"
));

contentArray.push(new Content(
  "Mandisa Thomas",
  "https://github.com/MandisaT",
  "Diligent and warm. A survivor with empathy left to spare.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Amma Thomas",
  "https://github.com/amma9",
  "Just waiting for the right opportunity. Bright and shy.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Thijs Tel",
  "http://portfolio.thijstel.com/",
  "Give him two weeks and he'll know more than your CTO. Unbelievable power wrapped in a friendly, supportive package. Lightning.",
  "resources/Thijs-Portfolio_thumb.png",
  "resources/Thijs-Portfolio.png"
));

contentArray.push(new Content(
  "Yoni Stap",
  "http://yonistap.com",
  "A rising tide raises all ships. Yoni is that tide. Learns quickly, teaches others.",
  "resources/Yoni-Portfolio_thumb.png",
  "resources/Yoni-Portfolio.png"
));

contentArray.push(new Content(
  "Lindsey Schaap",
  "http://lindseyschaap.nl",
  "The black sheep which wandered away, then came back smarter and stronger than all the rest. Self motivated, full of ideas, and able to execute.",
  "resources/Lindsey-Portfolio_thumb.png",
  "resources/Lindsey-Portfolio.png"
));

contentArray.push(new Content(
  "Loet Romijn",
  "http://loetromijn.github.io/Portfolio",
  "Hard working, smart, and lovable. Deserves endless praise. A soaring eagle who doubts her own wings.",
  "resources/portfolioLoetSquare.jpg",
  "resources/PortfolioLoetRomijn.png"
));

contentArray.push(new Content(
  "Saan Rashid",
  "http://saanrashid.com",
  "Twinkly with quiet charisma. Easy to work with and delivers on time.",
  "resources/Saan-Portfolio_thumb.png",
  "resources/Saan-Portfolio.png"
));

contentArray.push(new Content(
  "Alex Quintero Rivera",
  "https://github.com/alexquinterorivera",
  "Friendly. Delivers polished work. Alex makes Christmas come early.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Inessa Li",
  "http://inessa-lee.github.io/Personal_Site",
  "Forthright and effective. All business. Serious business, served with a side of kittens.",
  "resources/inessa_portf300.png",
  "resources/inessa_portf600.png"
));

contentArray.push(new Content(
  "Tim Van Lent",
  "https://timvanlent.github.io",
  "An artist in a new medium. Quiet but unshy. Excellent worker.",
  "resources/tim_thumb.jpeg",
  "resources/tim.jpg"
));

contentArray.push(new Content(
  "Sara Koops",
  "http://sarakoops.github.io/portfolio/",
  "Succeeds through sheer force of will. Revelations are accompanied by twinkly laughs. Unstoppable.",
  "resources/sara_thumb.png",
  "resources/sara.png"
));

contentArray.push(new Content(
  "Kilian Kielman",
  "http://www.kiliankielman.com",
  "A wandering entrepreneur. Gets to the point. Works first laughs next.",
  "resources/kilian_thumb.png",
  "resources/kilian.png"
));

contentArray.push(new Content(
  "Kevin de Jonge",
  "http://kevindejonge.github.io/",
  "A charismatic and goofy exterior houses well considered thought processes. Confident, good natured, and smart.",
  "resources/kevin_thumb.png",
  "resources/kevin.png"
));

contentArray.push(new Content(
  "Koen Grosman",
  "http://koengrosman.com",
  "Just a peach. A quiet observer and effective worker.",
  "resources/Koen-Portfolio_thumb.png",
  "resources/Koen-Portfolio.png"
));

contentArray.push(new Content(
  "Roberto Floris",
  "https://github.com/DiagoSmith",
  "q-t-π. Very sweet. A lifelong student who learns well and delivers better.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Frederiek Pennink",
  "https://github.com/fpenn",
  "A force. Confident, quiet. Success appears to come effortlessly. A little smile might come your way.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Ashlee Brown",
  "http://ashleeb.com",
  "Confident, friendly, professional. Attacks challenges calmly and overcomes them consistently.",
  "resources/Ashlee-Portfolio_thumb.png",
  "resources/Ashlee-Portfolio.png"
));

contentArray.push(new Content(
  "Thirsa de Boer",
  "https://github.com/Thirsa",
  "Wise, cunning, warm, true. Detail oriented and goes the extra mile.",
  "resources/picture.png",
  "resources/picture.png"
));

contentArray.push(new Content(
  "Colette Biervliet-Schranz",
  "http://colette419.github.io/",
  "Self sufficient, easygoing, and intelligent. Works well alone and with others.",
  "resources/Colette-Portfolio_thumb.png",
  "resources/Colette-Portfolio.png"
));


function Content(name, link, description, thumbnail, fullImage) {
  this.name = name;
  this.link = link;
  this.description = description;
  this.thumbnail = thumbnail;
  this.fullImage = fullImage;
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

  var linkDisplay;
  if (item.link.indexOf("github.com") > -1) {
    linkDisplay = "github";
  } else {
    linkDisplay = "portfolio";
  }

  $currentRow.append(
    '<div class="portfolio-entry col-md-6"><div class="portfolio-background"><a class="lightbox" href="#enlarged-picture"><img id="'
    + index
    + '" class="portfolio-icon" src="'
    + item.thumbnail
    + '" alt=""></a><div class="portfolio-text-div"><h2 class="portfolio-name">'
    + item.name
    + ' - </h2><a class="portfolio-link" href="'
    + item.link
    + '" target="_blank">'
    + linkDisplay
    + '</a><p class="portfolio-description">'
    + item.description
    + '</p></div></div></div>'
  );
});

$(".portfolio-icon").click(function() {
  var fullImage = contentArray[this.id].fullImage;
  $("#lightbox-full-image").attr("src", fullImage);
});

$(document).keyup(function(event) {
    if (event.keyCode == 27) { // escape key
      window.location.replace("#")
    }
});