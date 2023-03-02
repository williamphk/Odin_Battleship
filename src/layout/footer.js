const footer = () => {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  const text = document.createTextNode(
    `© ${new Date().getFullYear()}, William Poon`
  );

  p.appendChild(text);
  footer.appendChild(p);
  document.body.appendChild(footer);
};

export { footer };
