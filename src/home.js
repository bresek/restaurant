export const renderHome = () => {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  headline.innerText = "A restaurant!";
  content.appendChild(headline);
  const description = document.createElement("h3");
  description.innerText =
    "We make food here. We sell food here. People eat food here. Come eat the food here";
  content.appendChild(description);
};
