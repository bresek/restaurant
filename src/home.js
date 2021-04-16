export const renderHome = () => {
  const content = document.querySelector("#content");
  const home = document.createElement('div')
  home.setAttribute("class","contentBody")
  const headline = document.createElement("h1");
  headline.innerText = "A restaurant!";
  home.appendChild(headline);
  const description = document.createElement("h3");
  description.innerText =
    "We make food here. We sell food here. People eat food here. Come eat the food here";
  home.appendChild(description);
  content.appendChild(home)
};
