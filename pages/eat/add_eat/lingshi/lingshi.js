// pages/foodChoice/lingshi/lingshi.js
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

  addLingshi2: function () {
    let yinliao=wx.getStorageSync('lingshi');
    if(!yinliao){
      wx.setStorageSync('lingshi', 0);
      
    }
    flag = foodCa*parseInt(foodweight)+wx.getStorageSync('lingshi');
    wx.setStorageSync('lingshi', flag)
    this.setData({
      showModal: false
    })
  },

  submit1: function () {
    this.setData({
      showModal: true
    })
    foodName = '薯片';
    foodCa = 1.8;
  },
  submit2: function () {
    this.setData({
      showModal: true
    })
    foodName = '果冻';
    foodCa = 0.5;
  },
  submit3: function () {
    this.setData({
      showModal: true
    });
    foodName = '辣条';
    foodCa = 18.27;
  },
  submit4: function () {
    this.setData({
      showModal: true
    });
    foodName = '麻薯';
    foodCa = 11.63;
  },
  submit5: function () {
    this.setData({
      showModal: true
    });
    foodName = '猪肉脯';
    foodCa = 16;
  },
  submit6: function () {
    this.setData({
      showModal: true
    });
    foodName = '饼干';
    foodCa = 4;
  },
  submit7: function () {
    this.setData({
      showModal: true
    });
    foodName = '冰激凌';
    foodCa = 1.5;
  },
  submit8: function () {
    this.setData({
      showModal: true
    });
    foodName = '巧克力';
    foodCa = 6;
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