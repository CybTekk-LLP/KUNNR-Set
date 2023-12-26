const getUniqueKUNNRJSON = async () => {
  // Replace ./data.json with your JSON feed
  await fetch("./data/set.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Work with JSON data here
      rawJSON = data;
      buildArray(rawJSON);
    })
    .catch((err) => {
      console.log(err);
      // Do something for an error here
    });
};
getUniqueKUNNRJSON();

const buildArray = (data) => {
  let set = new Set();

  for (const datum of data.d.results) {
    set.add(datum.KUNNR);
  }
  console.log(set);
};
