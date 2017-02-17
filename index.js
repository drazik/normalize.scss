var path = require("path");
var pkgName = require("./package.json").name;

var entryPoint = require.resolve(pkgName);
var includePaths = path.dirname(entryPoint);

module.exports = {
    includePaths: includePaths
};
