/* global Asc */
(function (window) {
  const statusEl = document.getElementById("status");
  const outputEl = document.getElementById("output");
  const btnWrite = document.getElementById("btnWrite");
  const btnFetch = document.getElementById("btnFetch");

  function log(message) {
    const time = new Date().toLocaleTimeString();
    outputEl.textContent += `[${time}] ${message}\n`;
  }

  window.Asc.plugin.init = function () {
    statusEl.textContent = "插件已加载";
    log("ONLYOFFICE plugin init success.");
  };

  btnWrite.addEventListener("click", function () {
    try {
      window.Asc.plugin.callCommand(function () {
        const sheet = Api.GetActiveSheet();
        const cell = sheet.GetActiveCell();
        cell.SetValue("Customer Plugin Loaded");
      }, false);
      log("已发送写入当前单元格命令。");
    } catch (e) {
      log("写入失败: " + e.message);
    }
  });

  btnFetch.addEventListener("click", async function () {
    try {
      log("开始测试 fetch...");
      const res = await fetch("https://api.github.com/repos/maxwell-zdm/onlyoffice-customer-plugin");
      log("HTTP status: " + res.status);
      const data = await res.json();
      log("Repo name: " + data.full_name);
    } catch (e) {
      log("fetch 失败: " + e.message);
    }
  });

  window.Asc.plugin.button = function () {};
})(window);
