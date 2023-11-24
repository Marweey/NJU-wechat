// index.ts
// 获取应用实例
const app = getApp()
Page({
  data: {
    Time: "08:00",
    Date: '01/01',
    Year: '2022/01/01',
    feet_count : 0,
    intent_feet: 8000,
    feet_kilo: 2,
    feet_consume: 5,
    sport_intent:16000,
    sport_consume:0,
    fat_consume:0,
    sport_percent:0,
    weight: 70,
    height:177,
    bmi:0,
    // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    wx.setNavigationBarTitle({
      title: '运动'
    })
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    //数据加载
    var DATE = new Date();
    // var time = DATE.getMinutes()<10? '0'+ DATE.getMinutes():DATE.getMinutes()+':'+DATE.getSeconds()<10? '0'+DATE.getSeconds():DATE.getSeconds();
    var date = DATE.getMonth()+'/'+DATE.getDate();
    var year = DATE.getFullYear()+'/'+DATE.getMonth()+'/'+DATE.getDate();
    var time = DATE.getHours()+':'+ DATE.getMinutes();
    // var  time = "08:00";
    // var date = "06/07";
    // var year = "2022/01/01";
    this.setData({
      sport_consume: wx.getStorageSync( date+'sport_consume_storage'),
      weight: wx.getStorageSync('weight'),
      height: wx.getStorageSync('height'),
      feet_count: wx.getStorageSync('walk'),
      intent_feet: wx.getStorageSync('targetwalk'),
      sport_intent: wx.getStorageSync('calore'),
    })
    var kilo = parseFloat((this.data.feet_count*0.00065).toFixed(1));
    var consume = kilo*45;
    var fat = parseFloat ((this.data.sport_consume*0.0001111).toFixed(2));
     var percent2 = parseInt(((this.data.sport_consume/this.data.sport_intent)*100).toFixed());
     var percent1 = parseFloat((this.data.feet_count/this.data.intent_feet).toFixed(2))
     var bmi_ = parseFloat( (this.data.weight/
      ((this.data.height/100)*(this.data.height/100)))
        .toFixed(2))
     if(percent2>100){
       percent2=100;
     }
     if(percent1>1){
       percent1=1;
     }
    this.setData({
      Time:time,
      Date: date,
      Year: year,
      feet_kilo:kilo,
      feet_consume:consume,
      sport_consume: wx.getStorageSync( date+'sport_consume_storage'),
      fat_consume:fat,
      sport_percent:percent2,
      bmi:bmi_,
    }),

    // 步数模块
      this.feet_drawProgressbg(); 
      this.feet_drawCircle(percent1*2) ;
      this.sport_drawProgressbg();
      this.sport_drawCircle(percent2/100*2);
  },


  onShow(){
    var DATE = new Date();
    // var time = DATE.getMinutes()<10? '0'+ DATE.getMinutes():DATE.getMinutes()+':'+DATE.getSeconds()<10? '0'+DATE.getSeconds():DATE.getSeconds();
    var date = DATE.getMonth()+'/'+DATE.getDate();
    var year = DATE.getFullYear()+'/'+DATE.getMonth()+'/'+DATE.getDate();
    var time = DATE.getHours()+':'+ DATE.getMinutes();
    // var  time = "08:00";
    // var date = "06/07";
    // var year = "2022/01/01";
    this.setData({
      sport_consume: wx.getStorageSync( date+'sport_consume_storage'),
      weight: wx.getStorageSync('weight'),
      height: wx.getStorageSync('height'),
      feet_count: wx.getStorageSync('walk'),
      intent_feet: wx.getStorageSync('targetwalk'),
      sport_intent: wx.getStorageSync('calore'),
    })
    var kilo = parseFloat((this.data.feet_count*0.00065).toFixed(1));
    var consume = kilo*45;
    var fat = parseFloat ((this.data.sport_consume*0.0001111).toFixed(2));
     var percent2 = parseInt(((this.data.sport_consume/this.data.sport_intent)*100).toFixed());
     var percent1 = parseFloat((this.data.feet_count/this.data.intent_feet).toFixed(2))
     var bmi_ = parseFloat( (this.data.weight/
      ((this.data.height/100)*(this.data.height/100)))
        .toFixed(2))
     if(percent2>100){
       percent2=100;
     }
     if(percent1>1){
       percent1=1;
     }
    this.setData({
      Time:time,
      Date: date,
      Year: year,
      feet_kilo:kilo,
      feet_consume:consume,
      sport_consume: wx.getStorageSync( date+'sport_consume_storage'),
      fat_consume:fat,
      sport_percent:percent2,
      bmi:bmi_,
    }),

    // 步数模块
      this.feet_drawProgressbg(); 
      this.feet_drawCircle(percent1*2) ;
      this.sport_drawProgressbg();
      this.sport_drawCircle(percent2/100*2);
  },

  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //读取用户步数
  // get_feet:function(){
  //   var encryptedData = 0;
  //   wx.getSetting({
  //     success(res){
  //       if(!res.authSetting['scope.werun']){
  //           wx.authorize({
  //             scope:'scope.werun',
  //             success(){
  //               encryptedData = wx.getWeRunData();
  //             }
  //           })
  //       }
  //       else{


  //       }
  //     }
  //   })
   
  // },

  feet_drawProgressbg: function(){
    // 使用 wx.createContext 获取绘图上下文 context
    let ctx
      wx.createSelectorQuery().select('.feet_progress_bg').context(function (res) {
      ctx = res.context
      ctx.setLineWidth(10); // 设置圆环的宽度
      ctx.setStrokeStyle('rgb(235, 210, 173)'); // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath(); //开始一个新的路径
      ctx.arc(70, 70, 63, 0, 2 * Math.PI, false);
      //设置一个原点(70,70)，半径为50的圆的路径到当前路径
      ctx.stroke(); //对当前路径进行描边
      ctx.draw();
    }).exec()
  },
  // 2、进度条圆环
  feet_drawCircle: function (step){ 
    let context
    wx.createSelectorQuery().select('.feet_progress_canvas').context(function (res) {
      // 设置渐变
      context = res.context
      // 设置渐变
      let gradient = context.createLinearGradient(200, 100, 100, 200);
      gradient.addColorStop("0", "#04C1BF");
      gradient.addColorStop("1", "#04C1BF");
      context.setLineWidth(10);
      context.setStrokeStyle('rgb(253, 164, 29)');
      context.setLineCap('line')
      context.beginPath(); 
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(70, 70, 63, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
      context.stroke(); 
      context.draw() 
    }).exec()
  },
  sport_drawProgressbg: function(){
    // 使用 wx.createContext 获取绘图上下文 context
    let ctx
      wx.createSelectorQuery().select('.sport_progress_bg').context(function (res) {
      ctx = res.context
      ctx.setLineWidth(10); // 设置圆环的宽度
      ctx.setStrokeStyle('rgb(240, 210, 210)'); // 设置圆环的颜色
      ctx.setLineCap('round') // 设置圆环端点的形状
      ctx.beginPath(); //开始一个新的路径
      ctx.arc(70, 70, 63, 0, 2 * Math.PI, false);
      //设置一个原点(70,70)，半径为50的圆的路径到当前路径
      ctx.stroke(); //对当前路径进行描边
      ctx.draw();
    }).exec()
  },
  // 2、进度条圆环
  sport_drawCircle: function (step){ 
    let context
    wx.createSelectorQuery().select('.sport_progress_canvas').context(function (res) {
      // 设置渐变
      context = res.context
      // 设置渐变
      // let gradient = context.createLinearGradient(200, 100, 100, 200);
      // gradient.addColorStop("0", "#04C1BF");
      // gradient.addColorStop("1", "#04C1BF");
      context.setLineWidth(10);
      context.setStrokeStyle('rgb(241, 73, 73)');
      context.setLineCap('line')
      context.beginPath(); 
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(70, 70, 63, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
      context.stroke(); 
      context.draw() 
    }).exec()
  },

  
  go_to_feet:function(){
    wx.navigateTo({
      url: '/pages/sport/sport_page_2/sport_page_2'
    })
  },
  go_to_sport:function(){
    wx.navigateTo({
      url: '/pages/sport/sport_page_3/sport_page_3'
    })
  },
  

})
