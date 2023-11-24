// pages/ucenter/order/order.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    loading: false,
    orderList: [],
    order: [],
    heightRange: ['140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200','201','202','203','204','205','206','207','208','209','210'],
    weightRange: ['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120'] ,
    sexrange: ['男', '女'],
    agerange: ['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    walkrange: ['0','100','200','300','400','500','600','700','800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400','2500','2600','2700','2800','2900','3000','3100','3200','3300','3400','3500','3600','3700','3800','3900','4000','4100','4200','4300','4400','4500','4600','4700','4800','4900','5000','5100','5200','5300','5400','5500','5600','5700','5800','5900','6000','6100','6200','6300','6400','6500','6600','6700','6800','6900','7000','7100','7200','7300','7400','7500','7600','7700','7800','7900','8000','8100','8200','8300','8400','8500','8600','8700','8800','8900','9000','9100','9200','9300','9400','9500','9600','9700','9800','9900','10000'],

    sex:wx.getStorageSync('sex'),
    height:wx.getStorageSync('height'),
    weight:wx.getStorageSync('weight'),
    age:wx.getStorageSync('age'),
    walk:wx.getStorageSync('walk'),
    
    

  },

  sexPickerBindchange: function (e) {
      this.data.sex = e.detail.value
    this.setData({
      sex: this.data.sex,
    })
    wx.setStorageSync('sex', this.data.sex)
    this.formReset
  },
  heightPickerBindchange: function (e) {
    this.data.height = e.detail.value
    this.setData({
      height: parseInt(this.data.height)+140
    })
    wx.setStorageSync('height', this.data.height)
    // this.formReset
  },
  weightPickerBindchange: function (e) {
    this.data.weight = e.detail.value
    this.setData({
      weight: parseInt(this.data.weight)+30
    })
    wx.setStorageSync('weight', this.data.weight)
  },
  walkPickerBindchange: function (e) {
    this.data.walk = e.detail.value
    this.setData({
      walk: parseInt(this.data.walk)*100
    })
    wx.setStorageSync('walk', this.data.walk)
  },
  datePickerBindchange: function (e) {
    this.setData({
      age: e.detail.value
    })
    wx.setStorageSync('age', this.data.age)
  },
  formReset: function(e) {
    this.data.sex = wx.getStorageSync('sex'),
    this.data.height = wx.getStorageSync('height'),
    this.data.weight = wx.getStorageSync('weight'),
    this.data.age = wx.getStorageSync('age'),
    this.data.walk = wx.getStorageSync('walk'),
    this.setData({
        sex:this.data.sex,
        height:this.data.height,
        weight:this.data.weight,
        age:this.data.age,
        walk:this.data.walk
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的信息',
    })
    //this.formReset
    // 获取参数
    let type = options.type;
    if (type) {
      this.setData({
        active: type
      })
    }
    // 模拟加载数据
    this.loadData(type)
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
      sex:wx.getStorageSync('sex'),
      height:wx.getStorageSync('height'),
      weight:wx.getStorageSync('weight'),
      age:wx.getStorageSync('age'),
      walk:wx.getStorageSync('walk')
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
  
   

  // loadData: function (type) {
  //   this.setData({
  //     loading: true
  //   })
  //   if (type && type != 0) {
  //     let data = this.data.order.filter(item => item.orderStatus == type);
  //     this.setData({
  //       orderList: data,
  //       loading: false
  //     })
  //   } else {
  //     let that = this;
  //     setTimeout(function () {
  //       that.setData({
  //         loading: false,
  //         orderList: that.data.order
  //       })
  //     }, 1000)
  //   }
  // },
  // changeTab: function (e) {
  //   let type = e.detail.index;
  //   // 模拟加载数据
  //   this.loadData(type)
  // },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  }
})