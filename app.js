//app.js
App({
  onLaunch: function () {
  
  },
  commonData: {
    calorie: {
      yinliao: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
      lingshi: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
      shuiguo: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
      zhengcan: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0,
      caloriesum: wx.getStorageSync('yinliao') + wx.getStorageSync('lingshi') + wx.getStorageSync('shuiguo') + wx.getStorageSync('zhengcan')
    }
  },
  globalData: {
    userInfo: {
      nickName: "Hi，游客",
      username: "点击去登录",
      avatarUrl: "/assets/avatar.png"
    },
    token: "",

    sex:wx.getStorageSync('sex'),
    height:wx.getStorageSync('height'),
    weight:wx.getStorageSync('weight'),
    age:wx.getStorageSync('age'),

    submitinfo:{
        // 统计数据
    },

    planinfo:{
        // 计划数据
    }
  }
})