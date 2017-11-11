const SUMMARY_JSON = require("./static/summary.json");

const postsPaths = {};

if (SUMMARY_JSON && SUMMARY_JSON.fileMap) {
  Object.keys(SUMMARY_JSON.fileMap).forEach((file) => {
    const slug = file
      .split("static").join("")
      .split("posts").join("")
      .split("/").join("")
      .split(".json").join("")

    postsPaths[file] = {
      page: "/",
      query: {
        title: slug
      }
    }
  });
}

module.exports = {
  exportPathMap: function() {
    return Object.assign({}, { "/": { page: "/" }}, postsPaths)
  }
}
