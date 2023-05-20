function injectText() {
  console.log("Injecting text...");

  // Define the input IDs and their corresponding values
  const inputs = {
    ND: "20577552",
    email0: "azeroual.anass2015@gmail.com",
    email1: "azeroual.anass2015@gmail.com",
  };

  // Find all input elements with matching IDs
  Object.entries(inputs).forEach(([id, value]) => {
    const elements = document.querySelectorAll(`input[id="${id}"]`);
    elements.forEach((element) => {
      if (element.type === "text" || element.type === "email") {
        console.log(`Injecting value '${value}' to input with ID '${id}'`);
        element.value = value;
      }
    });
  });

  // Check the only checkbox on the page
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  if (checkboxes.length === 1) {
    console.log("Checking the only checkbox on the page");
    checkboxes[0].checked = true;
  }
}

// Call the injectText function when the content script is executed
injectText();
