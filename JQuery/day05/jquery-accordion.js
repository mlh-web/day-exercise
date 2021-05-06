/**
 * Created by luodianlei on 2018/4/27.
 */
//由于我们封装的是jquery插件,我们对应的方法需要使用jquery对象调用
// 所以应该把方法添加到jquery的原型上
// $.fn === $.prototype
$.fn.accordion = function (obj) {
  //找到所有的li标签，给li便签注册事件
  var Lis = this.find('li')
  //计算li标签在页面初始化的宽度
  var avgWidth = this.width() / Lis.length
  Lis.css({
    width: avgWidth
  })
  //给li加点颜色
  Lis.each(function (index, element) {
    $(element).css({
      backgroundColor: obj.colors[index]
    })
  })
  //给li设置最小宽度
  obj.minWidth = obj.minWidth || 100;
  //计算最大值
  var maxWidth = this.width() - obj.minWidth * (Lis.length - 1)
  //注册事件
  Lis.on('mouseenter', function () {
    //让移入的li变大，其他的变小
    $(this).stop(true).animate({
      width: maxWidth
    }).siblings().stop(true).animate({
      width: obj.minWidth
    });
  })
  // 鼠标移除手风琴,所以的li的宽度,恢复到平均值
  this.on('mouseleave', function () {
    Lis.stop(true).animate({
      width: avgWidth
    })
  })
}