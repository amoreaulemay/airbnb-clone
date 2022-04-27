const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const regex = /^[a-z]+$/gi;

// Checking that at least one component name is provided.
if (args.length < 1) {
    console.error("usage: npm run create-comp [ComponentName]");
    process.exit(1);
}

// Checking that all components' name only contain letters.
args.forEach(e => {
    if (!e.match(regex)) {
        console.error("Component must only contain letters.");
        process.exit(1);
    }
});

// Getting the base path and creating the directory if not.
const filepath = path.resolve(process.env.NODE_PATH, "src", "components");

if (!fs.existsSync(filepath)) {
    fs.mkdirSync(filepath, {recursive: true});
}

// Creating the components
args.forEach(e => {
    const compDirectory = path.join(filepath, e);
    fs.mkdirSync(compDirectory);

    const jsxFile = path.join(compDirectory, e + ".tsx");
    const cssFile = path.join(compDirectory, e + ".css");

    const cssFileContents = `/* Base class for ${e} */
.${e}--wrapper {}`;

    const jsxFileContents = `import React from \"react\";
import \"./${e}.css\";

export default class ${e} extends React.Component {
    render() {
        return <div className=\"${e}--wrapper\"></div>;
    }
}`;

    fs.writeFileSync(jsxFile, jsxFileContents);
    fs.writeFileSync(cssFile, cssFileContents);
});
