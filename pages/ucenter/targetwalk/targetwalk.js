// pages/ucenter/targetwalk/targetwalk.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    walkrange: ['0','100','200','300','400','500','600','700','800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400','2500','2600','2700','2800','2900','3000','3100','3200','3300','3400','3500','3600','3700','3800','3900','4000','4100','4200','4300','4400','4500','4600','4700','4800','4900','5000','5100','5200','5300','5400','5500','5600','5700','5800','5900','6000','6100','6200','6300','6400','6500','6600','6700','6800','6900','7000','7100','7200','7300','7400','7500','7600','7700','7800','7900','8000','8100','8200','8300','8400','8500','8600','8700','8800','8900','9000','9100','9200','9300','9400','9500','9600','9700','9800','9900','10000'],
    calorerange: ['0','100','200','300','400','500','600','700','800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400','2500','2600','2700','2800','2900','3000','3100','3200','3300','3400','3500','3600','3700','3800','3900','4000','4100','4200','4300','4400','4500','4600','4700','4800','4900','5000','5100','5200','5300','5400','5500','5600','5700','5800','5900','6000','6100','6200','6300','6400','6500','6600','6700','6800','6900','7000','7100','7200','7300','7400','7500','7600','7700','7800','7900','8000','8100','8200','8300','8400','8500','8600','8700','8800','8900','9000','9100','9200','9300','9400','9500','9600','9700','9800','9900','10000'],
    timerange: ['5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100','105','110','115','120','125','130','135','140','145','150','155','160','165','170','175','180','185','190','195','200','205','210','215','220','225','230','235','240','245','250','255','260','265','270','275','280','285','290','295','300'],

    targetwalk : wx.getStorageSync('targetwalk'),
    calore : wx.getStorageSync('calore'),
    time : wx.getStorageSync('time'),

    targetwalkIndex : wx.getStorageSync('targetwalkIndex'),
    caloreIndex : wx.getStorageSync('caloreIndex'),
    timeIndex : wx.getStorageSync('timeIndex'),
  },

  walkPickerBindchange: function (e) {
  // this.data.targetwalk = e.detail.value
  this.setData({
    targetwalk: this.data.walkrange[e.detail.value],
    targetwalkIndex: e.detail.value,
  })
  wx.setStorageSync('targetwalk', this.data.targetwalk),
  wx.setStorageSync('targetwalkIndex', this.data.targetwalkIndex)
},
  calorePickerBindchange: function (e) {
  // this.data.calore = e.detail.value
  this.setData({
    calore: this.data.calorerange[e.detail.value],
    caloreIndex: e.detail.value,
  })
  wx.setStorageSync('calore', this.data.calore),
  wx.setStorageSync('caloreIndex', this.data.caloreIndex)
},
timePickerBindchange: function (e) {
  // this.data.time = e.detail.value
  this.setData({
    time: this.data.timerange[e.detail.value],
    timeIndex: e.detail.value,
  })
  wx.setStorageSync('time', this.data.time),
  wx.setStorageSync('timeIndex', this.data.timeIndex)
},
saveSuccess: function(e) {
  Dialog.alert({
    message: '保存成功'
  }).then(() => {
    // 返回上一级
    wx.navigateBack({
      delta: 1
    })
  });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setNavigationBarTitle({
      title: '我的计划',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      targetwalk : wx.getStorageSync('targetwalk'),
      calore : wx.getStorageSync('calore'),
      time : wx.getStorageSync('time'),

      targetwalkIndex : wx.getStorageSync('targetwalkIndex'),
      caloreIndex : wx.getStorageSync('caloreIndex'),
      timeIndex : wx.getStorageSync('timeIndex'),
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})