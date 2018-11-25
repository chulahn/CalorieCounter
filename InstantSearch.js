var search = instantsearch({
  // Replace with your own values
  appId: "latency",
  apiKey: "6be0576ff61c053d5f9a3225e2a90f76", // search only API key, no ADMIN key
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
