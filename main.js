// Open Virtual Fisher, use the /fish command at least once, then run this code in the console
// To quit paste: "fisherAutomation = false;" into the console or switch to a dm that hasnt ran the /fish command before

// Variables
let fisherAutomation = false;

// Functions
function delay(time) {
   return new Promise(resolve => setTimeout(resolve, time));
}

async function main() {
   fisherAutomation = true;

   while (fisherAutomation) {
      let fishAgain = Array.prototype.filter.call(document.querySelectorAll(".label_acadc1"), element => element.textContent == "Fish Again");

      if (fishAgain.length != 0) {
         fishAgain[0].click();
      } else {
         fisherAutomation = false;
         break
      }

      await delay(5000);
   }
}

// Setup
main();
