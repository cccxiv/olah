const mustache = require("mustache");
const fs = require("fs/promises");

module.exports = async ({ file, data }) => {
  try {
    const content = await fs.readFile(file, { encoding: "utf8" });
    return mustache.render(content, data);
  } catch (e) {
    console.log(e);
  }
};
