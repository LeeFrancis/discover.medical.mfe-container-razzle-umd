const fs = require("fs-extra");

// Remove all content but keep the directory so that
// if you're in it, you don't end up in Trash
fs.emptyDirSync("./build");