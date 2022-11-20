const fs = require("fs");
var ts = require("typescript");
const tss = require("typescript-simple");

const dirName = new Date().toLocaleString().replace(/[ \/:]/g, "-");

const outputDir = `../dist/${dirName}`;
const inputDir = "../src/lexical/main";

// 新建目录
fs.mkdirSync(outputDir);

let tscount = 0;
let tsxcount = 0;

// 遍历目录内的文件，并进行判断和转换
function transDir(path) {
  const files = fs.readdirSync(path);

  files.forEach((name) => {
    const filePath = `${path}/${name}`;

    if (/^\./.test(name)) {
      return;
    }

    try {
      const fileData = fs.readFileSync(filePath, "utf-8");

      if (/\.ts$/.test(name)) {
        tscount++;
        debugger;
        const result = tss(fileData, {
          module: ts.ModuleKind.ES6,
          target: ts.ScriptTarget.ES6,
          noImplicitAny: true,
        });

        console.log(`${name} => `, result);
      } else if (/\.tsx$/.test(name)) {
        tsxcount++;
      }
    } catch (err) {
      console.log("error => ", name);
      //   transDir(filePath);
    }

    console.log("filePath => ", filePath);
  });

  console.log("files => ", files);
}

transDir(inputDir, outputDir);

console.log({
  tscount,
  tsxcount,
});
