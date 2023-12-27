// pages/ucenter/order/order.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
const app = getApp();
const btnText = {
  nologin: 'Login',
  pending: 'In sync...',
  success: 'Synchronized',
  error: 'Sync to PMS',
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weRunData:'',
    stepInfoList:'',
    btnText: '再接再厉',
    btnClass: 'syan_button',
    stepData: {
      today: 0,
      calories: 0,
      weekly: 0,
      monthly: 0,
    },


    active: 0,
    loading: false,
    orderList: [],
    order: [],
    heightRange: ['140','141','142','143','144','145','146','147','148','149','150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176','177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200','201','202','203','204','205','206','207','208','209','210'],
    weightRange: ['30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','101','102','103','104','105','106','107','108','109','110','111','112','113','114','115','116','117','118','119','120'] ,
    sexrange: ['男', '女'],
    agerange: ['15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
    walkrange: ['0','100','200','300','400','500','600','700','800','900','1000','1100','1200','1300','1400','1500','1600','1700','1800','1900','2000','2100','2200','2300','2400','2500','2600','2700','2800','2900','3000','3100','3200','3300','3400','3500','3600','3700','3800','3900','4000','4100','4200','4300','4400','4500','4600','4700','4800','4900','5000','5200','5400','5600','5800','6000','6200','6400','6600','6800','7000','7200','7400','7600','7800','8000','8200','8400','8600','8800','9000','9200','9400','9600','9800','10000','10500','11000','11500','12000','12500','13000','13500','14000','14500','15000','15500','16000','16500','17000','17500','18000','18500','19000','19500','20000','20500','21000','21500','22000','22500','23000','23500','24000','24500','25000','25500','26000','26500','27000','27500','28000','28500','29000','29500','30000'],

    sex:wx.getStorageSync('sex'),
    height:wx.getStorageSync('height'),
    weight:wx.getStorageSync('weight'),
    age:wx.getStorageSync('age'),
    walk:wx.getStorageSync('walk'),
    
    sexIndex: wx.getStorageSync('sexIndex'),
    heightIndex: wx.getStorageSync('heightIndex'),
    weightIndex: wx.getStorageSync('weightIndex'),
    ageIndex: wx.getStorageSync('ageIndex'),
    walkIndex: wx.getStorageSync('walkIndex'),

  },

  sexPickerBindchange: function (e) {
    // this.data.sex = e.detail.value
    this.setData({
      sex: this.data.sexrange[e.detail.value],
      sexIndex: e.detail.value,
    })

    // this.formReset
  },
  heightPickerBindchange: function (e) {
    // this.data.height = e.detail.value
    this.setData({
      height: this.data.heightRange[e.detail.value],
      heightIndex: e.detail.value,
    })

    // this.formReset
  },
  weightPickerBindchange: function (e) {
    // this.data.weight = e.detail.value
    this.setData({
      weight: this.data.weightRange[e.detail.value],
      weightIndex: e.detail.value,
    })
    console.log(this.data.height)

  },
  walkPickerBindchange: function (e) {
    // this.data.walk = e.detail.value
    this.setData({
      walk: this.data.walkrange[e.detail.value],
      walkIndex: e.detail.value,
    })

  },
  datePickerBindchange: function (e) {
    this.setData({
      age: this.data.agerange[e.detail.value],
      ageIndex: e.detail.value,
    })

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
  saveSuccess: function(e) {
    console.log(this.data.height)
    wx.setStorageSync('sex', this.data.sex),
    wx.setStorageSync('sexIndex', this.data.sexIndex),
    wx.setStorageSync('height', this.data.height),
    wx.setStorageSync('heightIndex', this.data.heightIndex),
    wx.setStorageSync('weight', this.data.weight),
    wx.setStorageSync('weightIndex', this.data.weightIndex),
    wx.setStorageSync('walk', this.data.walk),
    wx.setStorageSync('walkIndex', this.data.walkIndex),
    wx.setStorageSync('age', this.data.age),
    wx.setStorageSync('ageIndex', this.data.ageIndex),

    this.saveDataWithDate(this.data.walk);

    Dialog.alert({
      message: '保存成功'
    }).then(() => {
      // 返回上一级
      wx.navigateBack({
        delta: 1
      })
    });
  },

// 获取当前日期
getCurrentDate: function (e) {
  const date = new Date();
  // const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 格式化日期为 YYYY-MM-DD
  const formattedDate = `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`;
  // console.log(formattedDate)
  return formattedDate;
},

// 存储数据
saveDataWithDate: function (data) {
  // 获取当前日期
  const currentDate = this.getCurrentDate();

  // 将更新后的数据存储到本地
  wx.setStorageSync(currentDate, wx.getStorageSync('walk'));
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的信息',
    })
    let type = options.type;
    if (type) {
      this.setData({
        active: type
      })
    }
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
    this.authorizeWeRun()
    this.setData({
      sex:wx.getStorageSync('sex'),
      height:wx.getStorageSync('height'),
      weight:wx.getStorageSync('weight'),
      age:wx.getStorageSync('age'),
      walk:wx.getStorageSync('walk'),

      sexIndex: wx.getStorageSync('sexIndex'),
      heightIndex: wx.getStorageSync('heightIndex'),
      weightIndex: wx.getStorageSync('weightIndex'),
      ageIndex: wx.getStorageSync('ageIndex'),
      walkIndex: wx.getStorageSync('walkIndex'),
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
  
   

  onLabelClick: function (event) {
    // 获取点击的 label 的 for 属性值，即性别值
    var selectedGender = event.currentTarget.dataset.gender;
    console.log(selectedGender)
    // 更新性别字段和样式
    wx.setStorageSync('sex', selectedGender);
    this.setData({
      sex: selectedGender
    });
    this.onShow()
  },

  
  changeTab: function (e) {
    let type = e.detail.index;
    console.log(type)
    // 模拟加载数据
    this.setData({
      active:type
    })
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  },


  // 用户授权读取微信运动数据
authorizeWeRun(){
  var that = this
  //首先获取用户的授权状态
  wx.getSetting({
    success(res){
      // console.log (res)
      if(!res.authSetting['scope.werun']){
        // 如果用户还未授权过，需要用户授权读取微信运动数据
        wx.authorize({
          scope: 'scope.werun',
          success() {
            //读取微信步数数据
            that.getWeRunData()
          },
          fail() {
            //如果用户拒绝授权，提示用户需要同意授权才能获取他的微信运动数据
            wx.showModal({
              title: '读取微信运动数据失败',
              content: '请在小程序设置界面（「右上角」 - 「关于」 - 「右上角」 - 「设置」）中允许我们访问微信运动数据',
            })
          }
        })
      }else{
        //如果用户已授权过，直接开始同步微信运动数据
        //读取微信步数数据
        that.getWeRunData()
      }
    }
  })
},

// 获取微信运动数据
getWeRunData(){
  var that = this
  wx.cloud.init()
  wx.getWeRunData({
    success(res){
      console.log(res)
      wx.cloud.callFunction({
        name:'desrundata',
        data:{
          weRunData: wx.cloud.CloudID(res.cloudID) //直到云函数被替换
        }
      }).then(res=>{
        console.log(res)
        that.setData({
          stepInfoList: res.result
        })
      })
    }
  })


},




})