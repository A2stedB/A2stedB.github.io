document.addEventListener('DOMContentLoaded', () => {
  // =========================================
  // 功能 1：底层启动日志动态输出
  // =========================================
  const logContainer = document.getElementById('boot-log');

  // 这里精准地融入了你之前纠正过的缓存表 0x2300 内存对齐参数
  const logLines = [
    '> INITIATING COMPILER...', '> CACHE_TABLE_ALIGNMENT: ADDR 0x2300',
    '> BOX2D_PHYSICS_WORLD // LOADED', '> AWAITING_NEXT_DIRECTIVE...'
  ];

  let lineIndex = 0;

  function printNextLine() {
    if (!logContainer) return;
    if (lineIndex < logLines.length) {
      const line = document.createElement('div');
      line.textContent = logLines[lineIndex];
      logContainer.appendChild(line);
      lineIndex++;
      setTimeout(printNextLine, Math.random() * 300 + 100);
    } else {
      const cursorLine = document.createElement('div');
      cursorLine.innerHTML = `> <span class="blinking-cursor">_</span>`;
      logContainer.appendChild(cursorLine);
    }
  }

  setTimeout(printNextLine, 600);

  // =========================================
  // 功能 2：监听全屏滚动状态 (Intersection Observer)
  // =========================================
  const slides = document.querySelectorAll('.slide-section');

  const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 当某个 Slide 进入视野时，你可以通过它的 ID 来触发特定的逻辑
        // console.log(`Slide Active: ${entry.target.id}`);
        // 例如：只有当滚动到 presentation 页时，才触发打字动画
      }
    });
  }, {
    threshold: 0.5  // 50% 面积进入屏幕判定为激活
  });

  slides.forEach(slide => slideObserver.observe(slide));
});

document.addEventListener('DOMContentLoaded', () => {
  // ... 之前保留的日志启动和 ScrollObserver 代码 ...

  // =========================================
  // 功能 3：技能矩阵状态机 (Skills Matrix)
  // =========================================

  // 建立一个技能数据字典库，纯硬核的底层叙述
  const skillsData = {
    cpp: {
      label: 'TARGET ACQUIRED // C++',
      title: 'Core Systems & Architecture',
      logs: [
        'Algorithmic complexity and custom algorithms.',
        'Low-level memory management & smart pointers.',
        'Object destruction & copy constructors.'
      ]
    },
    physics: {
      label: 'TARGET ACQUIRED // PHYSICS',
      title: 'Engine & Audio Integration',
      logs: [
        'Implementing physics transformations with Box2D vectors.',
        'Managing game engine main loops via GLFW.',
        'Encapsulating FMOD audio systems for seamless playback.'
      ]
    },
    web: {
      label: 'TARGET ACQUIRED // WEB',
      title: 'Frontend Architecture',
      logs: [
        'Building layout components with Astro framework.',
        'Passing props and managing distinct DOM elements.',
        'Implementing native CSS mechanics & JavaScript state machines.'
      ]
    },
    tools: {
      label: 'TARGET ACQUIRED // ENV',
      title: 'Development Environment',
      logs: [
        'Visual Studio 2022 as primary compilation environment.',
        'Neovim / AstroNvim optimized for rapid code editing.',
        'Notion architecture for academic and project task tracking.'
      ]
    }
  };

  const skillNodes = document.querySelectorAll('.skill-node');
  const detailLabel = document.getElementById('detail-label');
  const detailTitle = document.getElementById('detail-title');
  const detailContent = document.getElementById('detail-content');

  if (skillNodes.length > 0) {
    skillNodes.forEach(node => {
      node.addEventListener('click', () => {
        // 1. 移除所有节点的 active 状态，给当前节点加上
        skillNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        // 2. 获取数据键值
        const skillId = node.getAttribute('data-skill-id');
        const data = skillsData[skillId];

        if (data) {
          // 3. 动态更新右侧的 DOM 内容
          detailLabel.textContent = data.label;
          // 注意保留那个闪烁的光标 span
          detailTitle.innerHTML =
              `${data.title}<span class="blinking-cursor">_</span>`;

          // 重构 ul 列表
          let listHTML = '<ul class="system-list">';
          data.logs.forEach(log => {
            listHTML += `<li><span class="log-prefix">[+]</span> ${log}</li>`;
          });
          listHTML += '</ul>';

          detailContent.innerHTML = listHTML;
        }
      });
    });
  }
});