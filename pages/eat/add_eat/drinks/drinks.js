// pages/foodChoice/drinks/drinks.js
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
  inputWalk: function (e){
    foodweight = e.detail.value;
    
  },

  addJuice2: function() {
    let yinliao=wx.getStorageSync('yinliao');
    if(!yinliao){
      wx.setStorageSync('yinliao', 0);
      
    }
    flag = foodCa*parseInt(foodweight)+wx.getStorageSync('yinliao');
    wx.setStorageSync('yinliao', flag);
    this.setData({
      showModal: false
    })
  },

  submit1: function() {
    this.setData({
      showModal: true
    });
    foodName = '健康果汁';
    foodCa=0.2;
  },
  submit2: function () {
    this.setData({
      showModal: true
    });
    foodName = '肥宅可乐';
    foodCa = 1.8;
  },
  submit3: function () {
    this.setData({
      showModal: true
    });
    foodName = '咖啡';
    foodCa = 2;
  },
  submit4: function () {
    this.setData({
      showModal: true
    });
    foodName = '牛奶';
    foodCa = 0.7;
  },
  submit5: function () {
    this.setData({
      showModal: true
    });
    foodName = '咖啡';
    foodCa = 3.0;
  },
  submit6: function () {
    this.setData({
      showModal: true
    });
    foodName = '奶茶';
    foodCa = 0.4;
  },
  submit7: function () {
    this.setData({
      showModal: true
    });
    foodName = '酒';
    foodCa = 0.35;
  },
  submit8: function () {
    this.setData({
      showModal: true
    });
    foodName = '豆浆';
    foodCa = 0.15;
  },
  preventTouchMove: function() {

  },
  go: function() {
    this.setData({
      showModal: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
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

  },
  
})