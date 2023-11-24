// pages/clock/clock.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    sum: 0, // 历史专注时间（分钟）
    count: 0, // 历史专注次数
    statistics: [],
    showLog: false, // 是否展示统计页面
    showClock: false,
    time: '5', // 当前选中的将专注时间
    timer: null,
    rate: '',
    // openid: '',
    cateArr: [
      {
        icon: 'work',
        text: '工作'
      },
      {
        icon: 'study',
        text: '学习'
      },
      {
        icon: 'code',
        text: '编程'
      },
      {
        icon: 'write',
        text: '写作'
      },
      {
        icon: 'sport',
        text: '健身'
      },
      {
        icon: 'read',
        text: '阅读'
      }
    ],
    cateActive: '0', // 当前选中的将专注任务的索引
    clockHeight: 0,
    timeStr: '05:00', // 时钟上显示的倒计时
    okShow: false, // okShow为true时表明专注倒计时结束，前端按钮显示“返回”
    pauseShow: true, // paseShow为true时表明倒计时进行中，前端按钮显示“暂停”
    continueAndCancelShow: false, // continueAndCancelShow为true时表民法当前计时处于暂停状态，出现两个按钮，一个是“继续”
    // 另一个是“放弃”
    Y: '',
    M: '',
    D: '',
    h: '',
    m: '',
    s: '',
    mTime: 300000,
    eTime: 290000,
  },

  // 监听页面加载
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '番茄钟'
    })
    //750rpx
    var res = wx.getSystemInfoSync();
    var rate = 750 / res.windowWidth;
    this.setData({
      rate: rate,
      clockHeight: rate * res.windowHeight,
      statistics: wx.getStorageSync('statistics') || [],
      count: wx.getStorageSync('count') || 0,
      sum: wx.getStorageSync('sum') || 0
      //  缓存中没数据就将statistics置为空，count和sum同理
    })
  },

  // 从本地缓存中获取用户信息
  getUserInfo: function (e) {
    var user = wx.getStorageSync('user')
    app.globalData.userInfo = user.userInfo
    this.setData({
      userInfo: user.userInfo,
      hasUserInfo: true
    })
  },

  // 事件监听：滑动条改变时
  sliderChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  
  // 事件监听：选中的待专注事项改变时
  clickCate: function (e) {
    this.setData({
      cateActive: e.currentTarget.dataset.index
    })
  },

  // start，当用户点击“开始专注”时候
  start: function () {
    var date = new Date();
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    //分  
    var m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    //秒  
    var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

    this.setData({
      Y: Y,
      M: M,
      D: D,
      h: h,
      m: m,
      s: s,
      showClock: true,
      mTime: this.data.time * 60 * 1000,
      eTime: this.data.time * 60 * 1000 - 1000,
      timeStr: parseInt(this.data.time) >= 10 ? this.data.time + ':00' : '0' + this.data.time + ':00'
    })
    this.drawBg();
    this.drawActive();
  },

  // 初始化画布
  drawBg: function () {
    var lineWidth = 6 / this.data.rate;
    var ctx = wx.createCanvasContext('progress_bg');
    ctx.setLineWidth(lineWidth);
    ctx.setStrokeStyle('#000000');
    ctx.setLineCap('round');
    ctx.beginPath();
    ctx.arc(400 / this.data.rate / 2, 400 / this.data.rate / 2, 400 / this.data.rate / 2 - 2 * lineWidth, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.draw();
  },

  // 负责在倒计时有效时持续改变画布
  drawActive: function () {
    var _this = this;
    var timer = setInterval(function () {
      var angle = 1.5 + 2 * (_this.data.time * 60 * 1000 - _this.data.eTime) / (_this.data.time * 60 * 1000);
      var currentTime = _this.data.mTime - 1000;
      var currentTime1 = _this.data.eTime - 1000;
      _this.setData({
        mTime: currentTime,
        eTime: currentTime1
      });
      if (angle < 3.5) {
        if (currentTime % 1000 == 0) {
          var timeStr1 = currentTime / 1000; // s 59
          var timeStr2 = parseInt(timeStr1 / 60); // m  0
          var timeStr3 = (timeStr1 - timeStr2 * 60) >= 10 ? (timeStr1 - timeStr2 * 60) : '0' + (timeStr1 - timeStr2 * 60).toString();
          var timeStr4 = timeStr2 >= 10 ? timeStr2 : '0' + timeStr2.toString();
          _this.setData({
            timeStr: timeStr4 + ':' + timeStr3
          })
        }
        var lineWidth = 6 / _this.data.rate;
        var ctx = wx.createCanvasContext('progress_active');
        ctx.setLineWidth(lineWidth);
        ctx.setStrokeStyle('#ffffff');
        ctx.setLineCap('round');
        ctx.beginPath();
        ctx.arc(400 / _this.data.rate / 2, 400 / _this.data.rate / 2, 400 / _this.data.rate / 2 - 2 * lineWidth, 1.5 * Math.PI, angle * Math.PI, false);
        ctx.stroke();
        ctx.draw();
      }
      else {
        var lineWidth = 6 / _this.data.rate;
        var ctx = wx.createCanvasContext('progress_active');
        ctx.setLineWidth(lineWidth);
        ctx.setStrokeStyle('#ffffff');
        ctx.setLineCap('round');
        ctx.beginPath();
        ctx.arc(400 / _this.data.rate / 2, 400 / _this.data.rate / 2, 400 / _this.data.rate / 2 - 2 * lineWidth, 1.5 * Math.PI, angle * Math.PI, false);
        ctx.stroke();
        ctx.draw();
        _this.setData({
          timeStr: '00:00',
          okShow: true,
          pauseShow: false,
          continueCancleShow: false
        })
        clearInterval(timer);
      }
    }, 1000);
    _this.setData({
      timer: timer
    })
  },

  // 事件监听：用户点击“暂停”时
  pause: function () {
    clearInterval(this.data.timer);
    this.setData({
      pauseShow: false,
      continueAndCancelShow: true,
      okShow: false
    })
  },

  // 事件监听，用户点击“继续”时
  continue: function () {
    this.drawActive();
    this.setData({
      pauseShow: true,
      continueAndCancelShow: false,
      okShow: false
    })
  },

  // 事件监听：用户点击“放弃”时
  cancel: function () {
    var that = this;
    wx.showModal({
      title: '温馨提示',
      content: '您真的要放弃吗？不再坚持一下了吗？',
      success(res) {
        if (res.confirm) {
          console.log('User Confirmed')
          clearInterval(that.data.timer);
          that.setData({
            pauseShow: true,
            continueAndCancelShow: false,
            okShow: false,
            showClock: false
          })
        } else if (res.cancel) {
          console.log('User canceled')
        }
      }
    })
  },

  // 事件监听：专注计时结束时，用户点击“返回"
  // ok 函数要负责将本次专注的数据进行保存
  ok: function (event) {
    console.log("OK")
    clearInterval(this.data.timer);
    this.setData({
      pauseShow: true,
      continueAndCancelShow: false,
      okShow: false,
      showClock: false,
      statistics: wx.getStorageSync('statistics') || [],
      count: wx.getStorageSync('count') || 0,
      sum: wx.getStorageSync('sum') || 0
    })
    // 存储本次数据：年，月，日，小时，分钟，秒，分类索引，专注时间
    var curDate = this.data.Y + '-' + this.data.M + '-' + this.data.D + ' ' + this.data.h + ':' + this.data.m + ':' + this.data.s
    var curCate = this.data.cateArr[parseInt(this.data.cateActive)].text
    var curDuration = this.data.time // string
    this.data.statistics.push({
      date: curDate,
      cate: curCate,
      duration: curDuration
    })
    this.data.sum += parseInt(this.data.time)
    this.data.count++
    wx.setStorageSync('sum', this.data.sum)
    wx.setStorageSync('count', this.data.count)
    wx.setStorageSync('statistics', this.data.statistics)
    console.log(this.data.statistics)
    console.log(this.data.sum)
    console.log(this.data.count)
  },
  
  // 事件监听：用户点击”查看统计“图标时
  log: function () {
    // 先将缓存数据拿到
    this.setData({
      statistics: wx.getStorageSync('statistics') || [],
      sum: wx.getStorageSync('sum') || 0,
      count: wx.getStorageSync('count') || 0
    })
    this.setData({
      showLog: true, // 展示统计信息页面
    })
  },

  // 事件监听：用户在统计界面点击“返回首页”图标时
  back: function () {
    this.setData({
      showLog: false
    })
  }
})