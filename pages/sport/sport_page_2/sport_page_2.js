let Charts = require('./../../../wxcharts/wxcharts.js');
Page({
  data:{
      walkAddUp:0,
  },
  // onReady: function () {
  //   this.runLineCanvas();
  // },
  
  onLoad(){
    this.runLineCanvas()
  },
  runLineCanvas: function () {
    let windowWidth;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // 处理获取系统信息失败的情况
    }
  
    // 获取当前日期
    function getCurrentDate() {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${month}/${day}`;
    }
  
    // 从 Storage 中获取数据
    function getDataFromStorage(date) {
      const storedData = wx.getStorageSync(date) || 0;
      return storedData;
    }
  
    // 生成近7天的日期数组
    function generateLast7Days() {
      const currentDate = new Date();
      const last7Days = [];
      
      for (let i = 6; i >= 0; i--) {
        const day = new Date(currentDate);
        day.setDate(currentDate.getDate() - i);
        
        const month = day.getMonth() + 1;
        const dayOfMonth = day.getDate();
        
        const formattedDate = `${month}/${dayOfMonth}`;
        last7Days.push(formattedDate);
      }
      
      return last7Days;
    }
  
    const last7Days = generateLast7Days();
    const data = last7Days.map(date => getDataFromStorage(date));
    let max_data = Math.max(...data)
    let walkAddUp = data.reduce((acc, val) => acc + parseInt(val, 10), 0);
    this.setData({
      walkAddUp: walkAddUp
    });
    // 更新图表配置
    new Charts({
      canvasId: 'canvas1',
      type: 'column',
      categories: last7Days,
      series: [{
        name: '近7日步数',
        data: data
      }],
      yAxis: {
        format: function (val) {
          return val;
        },
        forceY: [0],
          max:max_data==0?30000:max_data,
          min:0
      },
      width: windowWidth + 10,
      height: 300,
    });
  },
  
//   runLlineCanva:function(){
//     let windowWidth = 320;
//     try {
//       let res = wx.getSystemInfoSync();
//       windowWidth = res.windowWidth;
//     } catch (e) {
//       // do something when get system info failed
//     }
//     new Charts({
//       canvasId: 'canvas1',
//       type: 'column',
//       categories: ['06/20', '06/21', '06/22', '06/23', '06/24', '06/25','06/26'],
//       series: [{
//           name: '近7日步数',
//           data: [4000,3000,3500, 8000,9000, 8000,7500]
//       }],
//       yAxis: {
//           format: function (val) {
//               return val ;
//           },
//           // max:400,
//           min:0
//       },
//       width: 330,
//       height: 300,
//     });
// },
})