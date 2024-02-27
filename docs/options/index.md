# 配置选项

- 示例:


``` ts
console.log('demo')
```


以下是所有配置选项

---

### fixed

- 默认值: `true`

组件是否使用固定定位

---

### models

- 默认值: `[]`

定制模型配置, 类型是模型配置对象组成的数组, 默认值是空数组
前往[模型选项](/options/Model)查看详细内容

---

### parentElement

- 默认值: `document.body`

为组件提供一个父元素，如果未指定则默认挂载到 body 中

---

### sayHello

- 默认值: `true`

是否在初始化阶段打印项目信息

---

### tips

- 默认值:
  

``` ts
  {
    style: {
        width: 230,
        height: 100,
        offsetX: 0,
        offsetY: 0
    },
    idleTips: {
      message: [],
      duration: 3000,
      interval: 8000,
      priority: 2
    },
   welcomeTips: {
     message: {
       daybreak: '早上好！一日之计在于晨，美好的一天就要开始了。',
       morning: '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！',
       noon: '中午了，工作了一个上午，现在是午餐时间！',
       afternoon: '午后很容易犯困呢，来杯咖啡吧~',
       dusk: '傍晚了！工作一天幸苦啦~',
       night: '晚上好，今天过得怎么样呢？',
       lateNight: '已经这么晚了呀，早点休息吧，晚安~',
       weeHours: '这么晚还不睡吗？当心熬夜秃头哦！'
     },
     duration: 6000,
     priority: 3
    }
  }
  ```


自定义提示框样式和内容, 前往[提示框选项](/options/Tips)查看详细内容

---

### transitionTime

组件入场和离开的过渡动画时长

---