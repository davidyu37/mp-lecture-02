// pages/post/post.js
const app = getApp();

Page({
  data: {
    name: "",
    content: ""
  },
  onLoad: function() {
    console.log(app.globalData);
  },
  submitStory: function(event) {
    // Get data from event
    console.log(event);
    const name = event.detail.value.name;
    const content = event.detail.value.content;

    console.log(app);
    app.globalData.stories.push({
      name,
      content
    });

    const dataAsString = JSON.stringify(app.globalData.stories);

    wx.setStorage({
      data: dataAsString,
      key: 'stories',
    });

    wx.switchTab({
      url: '/pages/stories/stories',
    })

  }
})