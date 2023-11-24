// index.ts
// 获取应用实例

Page({
  data: {
    exist_consume:0
    // 如需尝试获取用户信息可改为false
  },
  onLoad(){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+'/'+DATE.getDate();
    let end 
    wx.getStorage({
      key: date+'sport_consume_storage',
      success:function(res){
          end = res.data
          that.setData({
            exist_consume:end
          })
      },fail(error){
        end=0
        wx.setStorage({
          key: date +'sport_consume_storage' ,
          data: 0,
        })
        that.setData({
          exist_consume:end
        })
      },


      })
  },
  get_feet:function(){
    var encryptedData = 0;
    wx.getWeRunData({
      success(res) {
           encryptedData = parseInt (res.encryptedData);
      },
  })
    // this.setData({
    //   feet_progress_txt : 5,
    // })
  },
  _bindconfirm:function(e){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+'/'+DATE.getDate();
    let end 
      wx.getStorage({
        key: date+'sport_consume_storage',
        success:function(res){
            end = parseInt(res.data)
            end = end+parseInt(e.detail.value.consume)
            wx.setStorage({
              key: date + 'sport_consume_storage',
              data: end,
            })
            that.setData({
              exist_consume:end
            })

        },fail(error){
          end = 0
          wx.setStorage({
            key: date +'sport_consume_storage' ,
            data: 0,
          })
          that.setData({
            exist_consume:end
          })
        }

        })
        
      },
onShow(){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+'/'+DATE.getDate();
    let end 
    wx.getStorage({
      key: date+'sport_consume_storage',
      success:function(res){
          end = res.data
          that.setData({
            exist_consume:end
          })
      },fail(error){
        end=0
        wx.setStorage({
          key: date +'sport_consume_storage' ,
          data: 0,
        })
        that.setData({
          exist_consume:end
        })
      },


      })
}
  
    
})
