export default {
  resetInput: {
    // 当被绑定的元素插入到 DOM 中时
    inserted(el) {
      const inputEls = el.getElementsByTagName('input');
      if (!inputEls.length) {
        return;
      }
      const isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; // android终端
      if (isAndroid) {
        return;
      }
      inputEls[0].addEventListener('blur', () => {
        let input = document.getElementById('reset-input');
        if (!input) {
          input = document.createElement('INPUT');
          input.type = 'text';
          input.style.height = '0px';
          input.style.width = '0px';
          input.style.position = 'absolute';
          input.id = 'reset-input';
          document.body.prepend(input);
        }

        input.focus();
        input.blur();
      });
    }
  }
};
