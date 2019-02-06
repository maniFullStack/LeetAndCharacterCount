(function() {
  "use strict";

  // http://en.wikipedia.org/wiki/Leet
  // http://www.catb.org/jargon/html/crackers.html

  var alphabets = { // common
    "a": "4",
    "b": "8",
    "e": "3",
    "f": "ph",
    "g": "6", // or 9
    "i": "1", // or |
    "o": "0",
    "s": "5",
    "t": "7" // or +
  },
    alphabets2 = { // less common
      "c": "(", // or k or |< or /<
      "d": "<|",
      "h": "|-|",
      "k": "|<", // or /<
      "l": "|", // or 1
      "m": "|\\/|",
      "n": "|\\|",
      "p": "|2",
      "u": "|_|",
      "v": "/", // or \/
      "w": "//", // or \/\/
      "x": "><",
      "y": "'/"
    };

  var words = {
    "am": "m",
    "are": "r",
    "at": "@",
    "thanks": "thx",
    "your": "ur",

    "cool": "kewl",
    "defeated": "pwned",
    "dude": "d00d",
    "fear": "ph33r", // or ph34r
    "fool": "f00",
    "freak": "phreak",
    "hacker": "h4x0r",
    "lamer": "l4m3r",
    "mad": "m4d",
    "newbie": "n00b",
    "own": "pwn",
    "phone": "fone",
    "porn": "pr0n", // or n0rp
    "rocks": "roxxorz",
    "skill": "sk1llz",
    "sucks": "sux0r",
    "the": "t3h",
    "uber": "ub3r", // or |_|83r
    "yay": "w00t",
    "yo": "j0",
    "you": "j00" // or U
  };

  var elite = document.getElementById("elite"),
    leet = document.getElementById("leet"),
    randomcase = document.getElementById("randomcase"),
    adv = document.getElementById("adv"),
    btn = document.getElementById("btn");

  function changeLetters(text) { // change letters
    text = text || elite.value.toLowerCase();
    for (var i = 0; i < text.length; i++) {
      var alphabet = adv.checked ? alphabets[text[i]] || alphabets2[text[i]] : alphabets[text[i]];
      if (alphabet) {
        text = text.replace(text[i], alphabet);
      }
    }
    return text;
  }

  function changeWords() { // change special words and return text
    return changeLetters().replace(
      /\w+/g,
      function(word) {
        return words[word] ? words[word] : word;
      }
    );
  }

  function randomizeCase() { // RANdOMiZE CAsE
    var text = changeWords();
    for (var i = 0; i < text.length; i++) {
      if (Math.random() > 0.5) {
        text = text.replace(text[i], text[i].toUpperCase());
      } // else keep lower case
    }
    return text;
  }

  (function() { // l33t the words object
    for (var word in words) {
      if (words.hasOwnProperty(word)) {
        words[changeLetters(word)] = words[word];
        delete words[word];
      }
    }
  }());

  function tol33t() {
    leet.value = randomcase.checked ? randomizeCase() : changeWords();
  }

  elite.addEventListener("input", tol33t);
  btn.addEventListener("click", tol33t);
}());
