function displayVerse(response) {
  new Typewriter("#bible-verse", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateVerse(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "f3cb72076d0btb2c3ado3e90a4d98f03";
  let prompt = `user instructions are: Generate one Bible verse about ${instructionInput.value}`;
  let context =
    "You're a bible verse expert and love to write short precise bible verses.you mission is to generate one short bible verse best suited and add <strong></strong> to the first line. make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  console.log("Generating verse");

  axios
    .get(apiUrl)
    .then(displayVerse)
    .catch((error) => {
      console.error("API call failed:", error);
    });
}

let verseFormElement = document.querySelector("#verse-generator");
verseFormElement.addEventListener("submit", generateVerse);
