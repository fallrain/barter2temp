import Clipboard from 'clipboard';

const util = {
  getUrlVal(name) {
    /* 获取url参数 */
    const urlArgs = window.location.search;
    if (urlArgs) {
      const reg = new RegExp(`${name}=([^&]+)`);
      const results = urlArgs.match(reg);
      if (results) {
        return results[1];
      }
    }
  },
  getNextDayDate() {
    const curDate = new Date();
    let curTime = curDate.getTime();
    curTime += 3600 * 24 * 1000;
    curDate.setTime(curTime);
    curDate.setHours(0);
    curDate.setMinutes(0);
    curDate.setSeconds(0);
    return curDate;
  },
  getCurDate() {
    const curDate = new Date();
    return curDate.getFullYear() + (`0${curDate.getMonth() + 1}`).slice(-2) + (`0${curDate.getDate()}`).slice(-2);
  },
  isWeixin() {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') >= 0) {
      return true;
    }
  },
  formatDate(date, pattern) {
    if (!date) {
      return '';
    }
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const numToStr = function (num) {
      if (num < 10) {
        num = `0${num}`;
      } else {
        num = `${num}`;
      }
      return num;
    };
    const obj = {
      year: date.getFullYear(),
      month: numToStr(date.getMonth() + 1),
      date: numToStr(date.getDate()),
      hours: numToStr(date.getHours()),
      minutes: numToStr(date.getMinutes()),
      seconds: numToStr(date.getSeconds())
    };
    let res = pattern || 'yyyy-MM-dd';
    res = res.replace(/yyyy/g, obj.year);
    res = res.replace(/MM/g, obj.month);
    res = res.replace(/dd/g, obj.date);
    res = res.replace(/HH/g, obj.hours);
    res = res.replace(/mm/g, obj.minutes);
    res = res.replace(/ss/g, obj.seconds);
    return res;
  },
  formatFloat(f, digit) {
    const m = Math.pow(10, digit);
    return Math.round(f * m, 10) / m;
  },
  formatNoSplitTime(val, isDate) {
    if (!val) {
      return '';
    }
    val += '';
    let returnStr = '';
    returnStr += `${val.substr(0, 4)}-${val.substr(4, 2)}-${val.substr(6, 2)}`;
    if (val.length > 8 && !isDate) {
      returnStr += ` ${val.substr(8, 2)}:${val.substr(10, 2)}`;
    }
    return returnStr;
  },
  shallowCopyObject(obj) {
    /* 浅拷贝 */
    return JSON.parse(JSON.stringify(obj));
  },
  arithmetic(val1, val2, arithmetic = 1, floatNum = 2) {
    val1 += '';
    val2 += '';
    const val1Split = val1.split('.');
    const val2Split = val2.split('.');
    const val1Len = val1Split[1] ? val1Split[1].length : 0;
    const val2Len = val2Split[1] ? val2Split[1].length : 0;
    const multiple = Math.pow(10, val1Len > val2Len ? val1Len : val2Len);
    val1 = val1.replace('.', '') * (val1Len ? 1 : multiple);
    val2 = val2.replace('.', '') * (val2Len ? 1 : multiple);
    let returnValue;
    switch (arithmetic) {
      case 1:
        returnValue = (val1 + val2) / multiple;
        break;
      case 2:
        returnValue = (val1 - val2) / multiple;
        break;
      case 3:
        returnValue = (val1 * val2) / multiple / multiple;
        break;
      case 4:
        returnValue = val1 / val2;
        break;
      default:
        break;
    }
    return this.formatFloat(returnValue, floatNum);
  },
  addZero(value) {
    let returnStr = `${value}`;
    let len = returnStr.split('.')[1];
    if (len) {
      len = len.length;
    } else {
      len = 0;
    }
    returnStr += ['.00', '0', ''][len] || '';
    return returnStr;
  },
  updateUserCommunity(data) {
    sessionStorage.setItem('ownerCode', data.ownerCode);
    sessionStorage.setItem('roomCode', data.roomCode);
    sessionStorage.setItem('ownerSimpleCode', data.simpleCode);
    sessionStorage.setItem('communityName', data.communityName);
    sessionStorage.setItem('address', data.address);
  },
  copy(copyText) {
    /* 复制，微信下ios有键盘弹起的bug,即使blur掉也会推页面 */
    let textArea;

    // 判断是不是ios端
    /* function isOS() {
      return navigator.userAgent.match(/ipad|iphone/i);
    } */

    // 创建文本元素
    function createTextArea(text) {
      textArea = document.createElement('input');
      textArea.value = text;
      document.documentElement.insertBefore(textArea, document.body);
    }

    // 选择内容
    function selectText() {
      // let range;
      // let selection;

      /* if (!isOS()) {
         range = document.createRange();
        range.selectNodeContents(textArea);
        selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textArea.setSelectionRange(0, 999999);
        textArea.select();
        document.body.removeChild(textArea);
      } else {
        textArea.select();
        textArea.setSelectionRange(0, textArea.value.length);
      } */
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, textArea.value.length);
    }

    // 复制到剪贴板
    function copyToClipboard() {
      let status = false;
      try {
        if (document.execCommand('copy')) {
          status = true;
        }
      } catch (err) {
        console.log(err);
      }
      textArea.blur();
      document.documentElement.removeChild(textArea);
      return status;
    }

    createTextArea(copyText);
    selectText();
    return copyToClipboard();
  },
  clipboardCopy(selector, val) {
    const clipboard = new Clipboard(selector, {
      text() {
        return val;
      }
    });
    return clipboard;
  }
};

export default util;
