// Variables
let fisherAutomation = false;

// Functions
function delay(time) {
   return new Promise(resolve => setTimeout(resolve, time));
}

async function main() {
   fisherAutomation = true;

   const start = performance.now();

   while (fisherAutomation) {
      let fishAgain = Array.prototype.filter.call(document.querySelectorAll(".label_acadc1"), element => element.textContent == "Fish Again");

      if (fishAgain.length != 0) {
         fishAgain[0].click();
      } else {
         fisherAutomation = false;
         break
      }

      await delay(4000);
   }

   console.log(`Fisher Automation quit after ${performance.now() - start}ms!`);
}

// Setup
main();