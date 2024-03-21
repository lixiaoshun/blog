// note
const { getChildren } = require("vuepress-sidebar-atuo");

const notePath = "./docs/note";

const note = [
  {
    title: "浏览器",
    collapsable: true,
    children: getChildren(`${notePath}/browser`),
  },
  {
    title: "踩坑记录",
    collapsable: true,
    children: getChildren(`${notePath}/record`),
  },
];

module.exports = {
  "/note/": note,
  // '/algorithm/': algorithm,
  // '/open_source/': open_source
};
