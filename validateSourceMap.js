const fs = require("fs");
const path = require("path");
const { SourceMapConsumer } = require("source-map");

function getSourcePosition(sourceMapPath, type){
const sourceMapContent = fs.readFileSync(sourceMapPath, "utf-8");
const sourceMap = JSON.parse(sourceMapContent);

const consumerPromise = new SourceMapConsumer(sourceMap);

Promise.resolve(consumerPromise).then((consumer) => {
  const original = consumer.originalPositionFor({
    line: 1,
    column: 1,
  });
  console.log(`${type} position: `, original);
});
}


const type = process.env.TYPE.toLowerCase()
getSourcePosition(path.resolve(process.cwd(), `dist/static/${type}/index.${type}.map`), type)
