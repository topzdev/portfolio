export default (id, openingtag, closingtag) => {
  const container = document.querySelector(id);
  // Get the spans in the paragraph
  var spans = container.children,
    top = 0,
    // set tmp as a string
    tmp = "";

  // Put spans on each word, for now we use the <n> tag because, we want to save 5 bytes:)
  container.innerHTML = container.textContent.replace(/\S+/g, "<n>$&</n>");

  // Loop through each words (spans)
  for (let i = 0; i < spans.length; i++) {
    // Get the height of each word
    var rect = spans[i].getBoundingClientRect().top;

    // If top is different as the last height of the word use a closingtag and use an opentag after that
    if (top < rect) tmp += closingtag + openingtag;
    top = rect;

    // Add the spans + space between each word
    tmp += spans[i].textContent + " ";
  }

  // Add the lines back to the paragraph
  container.innerHTML = tmp += closingtag;
};
