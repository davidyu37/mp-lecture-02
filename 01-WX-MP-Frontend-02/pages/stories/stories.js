// pages/stories/stories.js

Page({
  data: {
    stories: []
  },
  onShow: function() {
    // Get data here
    console.log('onLoad')
    this.getStories();
  },
  getStories: function() {
    const page = this;
    wx.request({
      url: 'https://fml.shanghaiwogeng.com/api/v1/stories',
      method: "GET",
      success: function(res) {
        page.setData({
          stories: res.data
        });

      }
    })

  },
  clickMe: function () {
    this.setData({ text: "Hello World" })
  }
})
