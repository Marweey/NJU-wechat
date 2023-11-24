// pages/foodChoice/zhengcan/zhengcan.js
var app = getApp();
var foodName;
var foodweight;
var foodCa;
var flag;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },
  inputWalk: function (e) {
    foodweight = e.detail.value;
  },

  addZhengcan2: function () {
    let yinliao=wx.getStorageSync('zhengcan');
    if(!yinliao){
      wx.setStorageSync('zhengcan', 0);
      
    }
    flag = foodCa*parseInt(foodweight)+wx.getStorageSync('zhengcan');
    wx.setStorageSync('zhengcan', flag)
    this.setData({
      showModal: false
    })
  },

  submit1: function () {
    this.setData({
      showModal: true
    })
    foodName = '牛排';
    foodCa = 5.4;
  },
  submit2: function () {
    this.setData({
      showModal: true
    })
    foodName = '包子';
    foodCa = 10;
  },
  submit3: function () {
    this.setData({
      showModal: true
    });
    foodName = '鸡肉';
    foodCa = 7;
  },
  submit4: function () {
    this.setData({
      showModal: true
    });
    foodName = '面条';
    foodCa = 11;
  },
  submit5: function () {
    this.setData({
      showModal: true
    });
    foodName = '米饭';
    foodCa = 5.2;
  },
  submit6: function () {
    this.setData({
      showModal: true
    });
    foodName = '饺子';
    foodCa = 4.2;
  },
  submit7: function () {
    this.setData({
      showModal: true
    });
    foodName = '青菜';
    foodCa = 0.17;
  },
  submit8: function () {
    this.setData({
      showModal: true
    });
    foodName = '鱼';
    foodCa = 1.08;
  },
  preventTouchMove: function () {

  },
  go: function () {
    this.setData({
      showModal: false
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