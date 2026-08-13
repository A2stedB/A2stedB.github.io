document.addEventListener('DOMContentLoaded', () => {
  const logContainer = document.getElementById('boot-log');
  if (!logContainer) return;

  // 虚拟的底层系统启动日志序列
  const logLines = [
    '[SYS.BOOT] INITIATED...', '[MEM.CACHE] ADDR: 0x2300 OK',
    '[LSP.DIAG] C++ DIAGNOSTICS LOADED', '[N_ENV] AWAITING_USER_INPUT'
  ];

  let lineIndex = 0;

  // 模拟逐行打印日志的效果
  function printNextLine() {
    if (lineIndex < logLines.length) {
      // 创建新的一行 div
      const line = document.createElement('div');
      line.textContent = logLines[lineIndex];
      logContainer.appendChild(line);

      lineIndex++;

      // 设置 300ms 到 800ms 之间的随机延迟，模拟真实读取硬盘的卡顿感
      const randomDelay = Math.random() * 500 + 300;
      setTimeout(printNextLine, randomDelay);
    } else {
      // 所有日志打印完毕后，添加一个一直闪烁的结尾
      const cursorLine = document.createElement('div');
      cursorLine.innerHTML = `> <span class="blinking-cursor">_</span>`;
      logContainer.appendChild(cursorLine);
    }
  }

  // 页面加载后 500ms 开始执行启动程序
  setTimeout(printNextLine, 500);
});