const getTheTitles = function (books) {
  let titles = [];
  books.reduce((titles, item) => {
    titles.push(item.title);
    return titles;
  }, titles);
  console.log(titles);
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
