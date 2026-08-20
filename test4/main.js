document.addEventListener("DOMContentLoaded", () => {
    
    // 模拟数据源 (底层架构思维：数据与视图分离)
    const projectsData = {
        p1: {
            num: "01",
            title: "KINGLESS",
            tech: "[ C# / Unity / Physics ]",
            desc: "A game of hack and slash platformer. Implementing custom rigid-body logic and state machines for continuous combat detection."
        },
        p2: {
            num: "02",
            title: "BUNKERS",
            tech: "[ C++ / Algorithm / Memory ]",
            desc: "A game of resource management and survival made with C++. Focusing on pointer lifetimes and memory allocation efficiency."
        },
        p3: {
            num: "03",
            title: "PACIFIC",
            tech: "[ JS / Phaser / Multiplayer ]",
            desc: "A local multiplayer game of strategic made with JavaScript and Phaser. Emphasizing low-latency event synchronization."
        }
    };

    const indexItems = document.querySelectorAll('.index-item');
    const displayNum = document.getElementById('display-num');
    const displayTitle = document.getElementById('display-title');
    const displayTech = document.getElementById('display-tech');
    const displayDesc = document.getElementById('display-desc');

    indexItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. 更新激活状态 (UI 视觉反转)
            indexItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 2. 获取目标数据
            const targetId = item.getAttribute('data-id');
            const data = projectsData[targetId];

            if(data) {
                // 3. 瞬间跳变视图 (符合瑞士设计的客观与生硬感)
                displayNum.textContent = data.num;
                displayTitle.textContent = data.title;
                displayTech.textContent = data.tech;
                displayDesc.textContent = data.desc;
            }
        });
    });
});