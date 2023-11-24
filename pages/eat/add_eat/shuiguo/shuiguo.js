// pages/foodChoice/shuiguo/shuiguo.js
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

  addShuiguo2: function () {
    let yinliao=wx.getStorageSync('shuiguo');
    if(!yinliao){
      wx.setStorageSync('shuiguo', 0);
      
    }
    flag = foodCa*parseInt(foodweight)+wx.getStorageSync('shuiguo');   
     wx.setStorageSync('shuiguo', flag)
    this.setData({
      showModal: false
    })
  },

  submit1: function () {
    this.setData({
      showModal: true
    })
    foodName = '香蕉';
    foodCa = 1.2;
  },
  submit2: function () {
    this.setData({
      showModal: true
    })
    foodName = '苹果';
    foodCa = 0.5;
  },
  submit3: function () {
    this.setData({
      showModal: true
    });
    foodName = '菠萝';
    foodCa = 1.8;
  },
  submit4: function () {
    this.setData({
      showModal: true
    });
    foodName = '梨';
    foodCa = 0.4;
  },
  submit5: function () {
    this.setData({
      showModal: true
    });
    foodName = '葡萄';
    foodCa = 1.8;
  },
  submit6: function () {
    this.setData({
      showModal: true
    });
    foodName = '草莓';
    foodCa = 0.30;
  },
  submit7: function () {
    this.setData({
      showModal: true
    });
    foodName = '桃子';
    foodCa = 0.38;
  },
  submit8: function () {
    this.setData({
      showModal: true
    });
    foodName = '西瓜';
    foodCa = 0.25;
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