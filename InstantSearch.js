var search = instantsearch({
  // Replace with your own values
  appId: "IBBFDOQONG",
  apiKey: "27140a358bbcd89a3019ee3bbf8ad72b", // search only API key, no ADMIN key
  indexName: "food",
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: "#search-input"
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: "#hits",
    templates: {
      item: document.getElementById("hit-template").innerHTML,
      empty: 'We didn\'t find any results for the search <em>"{{query}}"</em>'
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: "#pagination"
  })
);

search.start();

console.log(search);
