// pages/index/index.js

Page({
  goToStoriesPage: function() {
    wx.switchTab({
      url: '/pages/stories/stories',
    });
  }
})
