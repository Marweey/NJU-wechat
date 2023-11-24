// pages/todayDiet/todayDiet.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */

  data: {
      foodCa1: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
      foodCa2: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
      foodCa3: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
      foodCa4: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0
  },
  showaxis: function () {
    this.setData({
      foodCa1: wx.getStorageSync('yinliao') > 0 ? wx.getStorageSync('yinliao') : 0,
      foodCa2: wx.getStorageSync('lingshi') > 0 ? wx.getStorageSync('lingshi') : 0,
      foodCa3: wx.getStorageSync('shuiguo') > 0 ? wx.getStorageSync('shuiguo') : 0,
      foodCa4: wx.getStorageSync('zhengcan') > 0 ? wx.getStorageSync('zhengcan') : 0
      })

  },
  clear: function() {
    wx.clearStorage({
      success: (res) => {
        Toast("清除成功");
      },
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
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      foodCa1: wx.getStorageSync('yinliao'),
      foodCa2: wx.getStorageSync('lingshi'),
      foodCa3: wx.getStorageSync('shuiguo'),
      foodCa4: wx.getStorageSync('zhengcan'),
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.setData({
      foodCa1: wx.getStorageSync('yinliao'),
      foodCa2: wx.getStorageSync('lingshi'),
      foodCa3: wx.getStorageSync('shuiguo'),
      foodCa4: wx.getStorageSync('zhengcan'),
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})