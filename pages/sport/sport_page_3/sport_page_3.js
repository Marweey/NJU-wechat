// index.ts
// 获取应用实例
// import Dialog from '../../../lib/vant-weapp/dialog/dialog';
Page({
  data: {
    exist_consume:0,
    input_consume_data:"",
    init_consume:0
    // 如需尝试获取用户信息可改为false
  },
  onLoad(){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+1+'/'+DATE.getDate();
    let end 
    wx.getStorage({
      key: date+'sport_consume_storage',
      success:function(res){
          end = res.data
          that.setData({
            exist_consume:end,
            init_consume:end
          })
      },fail(error){
        end=0
        wx.setStorage({
          key: date +'sport_consume_storage' ,
          data: 0,
        })
        that.setData({
          exist_consume:end,
          init_consume:end
        })
      },


      })
  },

  _bindconfirm:function(e){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+1+'/'+DATE.getDate();
    let checkNull = this.data.input_consume_data
    if (!checkNull.trim()) {
      // 如果输入为空，弹出提示
      wx.showToast({
        title: '输入不能为空',
        icon: 'none',
        duration: 2000
      })
      return // 阻止表单提交
    }
    let end 
      wx.getStorage({
        key: date+'sport_consume_storage',
        success:function(res){
            end = parseInt(that.data.exist_consume)
            end = end + parseInt(that.data.input_consume_data)
            wx.setStorage({
              key: date + 'sport_consume_storage',
              data: end,
            })
            that.setData({
              exist_consume:end
            })
            wx.showToast({
              title: '已添加',
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

  func_reset:function(e){
    let that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+1+'/'+DATE.getDate();
    let init_data = this.data.init_consume
    let end
    wx.getStorage({
      key: date+'sport_consume_storage',
      success:function(res){
          end = init_data
          wx.setStorage({
            key: date + 'sport_consume_storage',
            data: end,
          })
          that.setData({
            exist_consume:end
          })
      },fail(error){
        end=init_data
        wx.setStorage({
          key: date +'sport_consume_storage' ,
          data: end,
        })
        that.setData({
          exist_consume:end
        })
      },
      })
  },


onShow(){
    var that = this;
    var DATE = new Date();
    var date = DATE.getMonth()+1+'/'+DATE.getDate();
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
