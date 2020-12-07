const fs = require("fs");
const path = require("path");
const JSON5 = require("json5");
const Mock = require("mockjs");
// 读取json文件
function getJsonFile(filePath) {
  // 读取指定JSON
  var json = fs.readFileSync(path.resolve(__dirname, filePath), "utf-8");
  // 解析并返回
  return JSON5.parse(json);
}
// var json = getJsonFile("./text.json5");
// console.log("json", json);
// 返回一个函数
module.exports = function(app) {
  if (process.env.MOCK == "true") {
    // 监听http请求
    app.get("/user/userinfo", function(rep, res) {
      // 每次相应读取mock data的文件
      var json = getJsonFile("./text.json5");
      res.json(Mock.mock(json));
    });
  }
};
