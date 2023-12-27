// pages/ucenter/setting/setting.js
import Toast from '../../../lib/vant-weapp/toast/toast';
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    isLogin: wx.getStorageSync('isLogin')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置',
    })
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
      isLogin: wx.getStorageSync('isLogin')
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
  onChange: function (e) {
    this.setData({
      checked: e.detail
    })
  },
  clearStorage: function () {
    Dialog.confirm({
      title: '注意',
      message: '该操作会退出登录并清除所有数据，确定执行吗？'
    }).then(() => {
      wx.clearStorage();
      app.resetGlobalData();
      Dialog.alert({
        title: '注意',
        message: '清理成功'
      }).then(() => {
        wx.switchTab({
          url: '/pages/ucenter/index/index',
        })
      })
    }).catch(() => {
        // on cancel
      });;
  },
  about: function(){
    Dialog.alert({
      title: '关于',
      // message: '版本号：1.0.0 By: Group39 何沛阳 马维艺 王文卓 张乃凡 张翼'
      message: '版本号：2.0.0 By:Group38 游莫凡 马维艺 王文卓'
    }).then(() => {
      // on close
    });
  }
})