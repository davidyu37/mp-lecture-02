// pages/stories/stories.js
const app = getApp();

Page({
  data: {
    stories: []
  },
  onLoad: function() {
    wx.getStorage({
      key: 'stories',
      success (res) {
        console.log(res.data)
      }
    })


    this.setData({
      stories: app.globalData.stories
    });


  }


})
