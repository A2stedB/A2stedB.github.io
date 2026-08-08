const openButtons = document.querySelectorAll('.open-modal-btn');
const closeButtons = document.querySelectorAll('.close-modal-btn');

openButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-modal-open');
        if (!targetId) return;

        const dialog = document.getElementById(targetId);
        if (dialog) dialog.showModal();
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const dialog = e.target.closest('dialog');
        if (dialog) dialog.close();
    });
});

const content_pages = document.querySelectorAll("[data-element-type='page']")

content_pages.forEach((page) =>{

    const page_status = page.getAttribute("data-shown-status")

    if (page_status === "shown"){
        page.classList.add('shown')
    }
})

document.addEventListener('DOMContentLoaded', () => {
  // 1. 创建一个“监视器”，告诉它当元素有 15% 露出来时，就报警
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 当元素进入视口时
      if (entry.isIntersecting) {
        const element = entry.target;

        // 2. 读取 HTML 上配置的 data-delay 属性，默认是 0
        const delay = element.getAttribute('data-delay') || 0;

        // 3. 把配置应用到 CSS 的 transition-delay 属性上
        element.style.transitionDelay = `${delay}ms`;
        // const element_style = window.getComputedStyle(element);
        // const element_style_transition_delay = element_style.transitionDelay
        // element_style.setProperty('transition-delay', `${delay}ms`);


            // 4. 拨动开关，交由 CSS 接管动画！
            element.classList.add('shown');

        // 5. 动画触发一次后，就停止监视它，节省性能
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.15  // 露出 15% 算作进入视口
  });

  const elementsToAnimate = document.querySelectorAll('.page');
  elementsToAnimate.forEach(el => observer.observe(el));
});