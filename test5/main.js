document.addEventListener('DOMContentLoaded', () => {
  // 模拟底层数据块依次加载的效果
  const detailBlocks = document.querySelectorAll('.detail-block');

  detailBlocks.forEach((block, index) => {
    // 初始状态下微弱地偏移并透明
    block.style.opacity = '0';
    block.style.transform = 'translateY(15px)';
    block.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    // 使用 setTimeout 制造序列化载入的延迟感
    setTimeout(() => {
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }, 300 + (index * 150));  // 每个块比上一个多延迟 150ms
  });
});