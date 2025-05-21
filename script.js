function generateVerse(event) {
  event.preventDefault();

  new Typerwriter("#bible-verse", {
    strings: " I can do all things through him who strengthens me.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let verseFormElement = document.querySelector("#verse-generator");
verseFormElement.addEventListener("submit", generateVerse);
