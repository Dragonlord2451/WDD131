function searchYouTube() {
  const input = document.getElementById("topicInput").value.trim();
  if (input.length > 0) {
    const query = encodeURIComponent(input);
    const url = `https://www.youtube.com/results?search_query=${query}`;
    window.open(url, "_blank");
  } else {
    alert("Please enter a topic first!");
  }
}

