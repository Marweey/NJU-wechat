// pages/eat/eat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    foodCa1: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
    foodCa2: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
    foodCa3: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
    foodCa4: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0
  },

  switchTab(e) {

    console.log(e)
    let tab = e.currentTarget.id
    if (tab === 'tableft') {
      this.setData({
        currentTab: 0
      })
    } else if (tab === 'tabright') {
      this.setData({
        currentTab: 1
      })
    }
  },
  clear: function() {
    wx.clearStorage();
    wx.showToast({
      title: '清除成功',
    })
    this.setData({
      foodCa1: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
      foodCa2: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
      foodCa3: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
      foodCa4: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '饮食'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
        foodCa1: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
        foodCa2: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
        foodCa3: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
        foodCa4: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0
        })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})