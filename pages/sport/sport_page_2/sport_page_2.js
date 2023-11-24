let Charts = require('./../../../wxcharts/wxcharts.js');
Page({
  data:{

  },
  onLoad(){
    this.runLlineCanva()
  },
  runLlineCanva:function(){
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    new Charts({
      canvasId: 'canvas1',
      type: 'column',
      categories: ['06/20', '06/21', '06/22', '06/23', '06/24', '06/25','06/26'],
      series: [{
          name: '近7日步数',
          data: [4000,3000,3500, 8000,9000, 8000,7500]
      }],
      yAxis: {
          format: function (val) {
              return val ;
          },
          /*max:400,
          min:0*/
      },
      
      width: 380,
      height: 200,

    });
},





})