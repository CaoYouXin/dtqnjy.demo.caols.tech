(function fixScreen() {
    let UA = navigator.userAgent,
      isAndroid = /android|adr/gi.test(UA),
      isIos = /iphone|ipod|ipad/gi.test(UA) && !isAndroid, // 据说某些国产机的UA会同时包含 android iphone 字符
      isMobile = isAndroid || isIos;  // 粗略的判断
  
    let metaEl = document.querySelector('meta[name="viewport"]'),
      metaCtt = (metaEl ? metaEl.content : '').replace(/\s*/g, '');
  
    let kvs = metaCtt.split(','), data = {};
    for (let i = 0; i < kvs.length; i++) {
      let kv = kvs[i].split('=');
      if (/width/.test(kv[0])) {
        data.width = kv[1];
      }
      data[kv[0]] = kv[1];
    }
    data.width = 1140;
  
    if (isMobile || window.screen.availWidth < data.width) { // 定宽
      let minScreen = Math.min(window.screen.availWidth, window.screen.availHeight);
      if (isAndroid) {
        let medium_dpi = data.width / minScreen * window['devicePixelRatio'] * 160;
  
        medium_dpi = medium_dpi.toFixed(2);
  
        data['target-densitydpi'] = medium_dpi;
      } else {
        let scale = minScreen / data.width;
  
        scale = scale.toFixed(2);
  
        data['initial-scale'] = data['maximum-scale'] = data['minimum-scale'] = scale;
      }
  
      metaEl.content = JSON.stringify(data).replace(/\s*/g, '').replace(/[{}"]/g, '').replace(/:/g, '=');
    } else {
      metaEl.content = 'width=device-width, user-scalable=no';
    }
  })();