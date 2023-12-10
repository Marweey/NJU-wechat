// pages/ucenter/coupon/coupon.js
import Toast from '../../../lib/vant-weapp/toast/toast';

const app = getApp()
// const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
 
 
Page({
/**
   * 页面的初始数据
   */
  data: {
    avatarUrl: app.globalData.userInfo.avatarUrl,
    theme: wx.getSystemInfoSync().theme,
    nickname: app.globalData.userInfo.nickName,
  },
 
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
  //  console.log(e.detail),
    this.setData({
      avatarUrl,
    })
    app.globalData.userInfo.avatarUrl = avatarUrl
   
  },
  formSubmit(e) {
    const nickname = e.detail.value.nickname
    // 检测昵称是否为空
    if (!nickname.trim()) {
      // 如果昵称为空，弹出提示
      wx.showToast({
        title: '昵称不能为空',
        icon: 'none',
        duration: 2000
      })
      return // 阻止表单提交
    }
    // 如果昵称不为空，更新全局数据并跳转
    app.globalData.userInfo.nickName = nickname
    wx.switchTab({
      url: '/pages/ucenter/index/index',
    })
  },
  
 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.onThemeChange((result) => {
      this.setData({
        theme: result.theme
      })
    })
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl,
      nickname: app.globalData.userInfo.nickName
    })
  },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  //   wx.setNavigationBarTitle({
  //     title: '优惠券',
  //   })
  //   this.loadData(0, options.mode);
  // },

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
      avatarUrl: app.globalData.userInfo.avatarUrl,
      nickname: app.globalData.userInfo.nickName
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

  },
  loadData: function (type, mode) {

    let data = this.data.coupon.filter(item => item.status == type);
    if (mode == "choose") {
      data.forEach(e => {
        e.mode = "choose";
      })
      this.setData({
        mode: mode,
        couponList: data
      })
      // 判优惠券是否满足条件
      this.judgeCoupon();
    } else {
      this.setData({
        mode: mode,
        couponList: data
      })
    }

  },
  changeTab: function (e) {
    let index = e.detail.index;
    this.loadData(index);
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  },
  onChange: function (e) {
    let disabled = true;
    if (e.detail) {
      disabled = false;
    } else {
      disabled = true;
    }
    this.setData({
      value: e.detail,
      disabled: disabled
    })
  },
  submitCoupon: function (e) {
    Toast.fail('领取失败');
  },
  choose: function (e) {
    let v = e.currentTarget.dataset.value;
    if(v.disabled){
      return;
    }
    if (v.mode == "choose") {
      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];  //上一个页面

      let discount = v.discount;
      if (discount == -1) {
        discount = prevPage.data.actualPrice;
      }
      let actualPrice = prevPage.data.totalPrice + prevPage.data.expressPrice - discount;
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        'coupon.id': v.id,
        'coupon.title': v.title,
        'coupon.discount': discount,
        actualPrice: actualPrice
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  },
  clearCoupon: function () {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];  //上一个页面

    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    let actualPrice = prevPage.data.totalPrice + prevPage.data.expressPrice;
    prevPage.setData({
      'coupon.id': '',
      'coupon.title': '',
      actualPrice: actualPrice
    })
    wx.navigateBack({
      delta: 1,
    })
  },
  judgeCoupon: function () {
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];  //上一个页面

    let actualPrice = prevPage.data.totalPrice;
    let couponId = prevPage.data.coupon.id;
    let data = this.data.couponList;
    data.forEach(e => {
      // 判断满足价格条件
      if (actualPrice >= e.discount) {
        e.disabled = false;
      } else {
        e.disabled = true;
      }
      // 判断选择标记
      if (couponId == e.id) {
        e.selected = true;
      }
      else {
        e.selected = false;
      }
    })
    this.setData({
      couponList: data
    })
  }
})