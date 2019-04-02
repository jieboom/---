
const DB = wx.cloud.database()
const movieColl = DB.collection('movie')
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movieList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

     wx.cloud.callFunction({
       name:'crawler',
       
     }).then( res => {
         console.log( res.result )
     } )
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
  goDetail(event){
    
     let id = event.target.dataset.id
     movieColl.doc(id).get().then( res => {
       wx.navigateTo({
         url: '../bookDetail/bookDetail?id=' + id
       })
     } )

  }

  
})