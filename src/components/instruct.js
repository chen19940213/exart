import Vue from 'vue'
// 全局指令解决ios键盘弹出不收起

var iosbugfixed = Vue.directive('iosbugfixed', {
    inserted: function(el, binding, vnode) {
        // 解决input、select被组件包装的场景
        const childInput = el.getElementsByTagName('input');

        //  const childSelect = el.getElementsByTagName('select');
        for (let i = 0; i < childInput.length; i++) {
            //  childInput[i].setAttribute("readonly", "readonly")
            childInput[i].onblur = function temporaryRepair() {
                setTimeout(function() {
                    // 当input 失焦时，滚动一下页面就可以使页面恢复正常
                    checkWxScroll();
                }, 200);
            };
        }
        //  for (let i = 0; i < childSelect.length; i++) {
        //      childSelect[i].onblur = function temporaryRepair() {
        //          setTimeout(function() {
        //              // 当input 失焦时，滚动一下页面就可以使页面恢复正常
        //              checkWxScroll();
        //          }, 200);
        //      };
        //  }
        // 正常场景
        el.onblur = function temporaryRepair() {
            setTimeout(function() {
                // 当input 失焦时，滚动一下页面就可以使页面恢复正常
                checkWxScroll();
            }, 200);
        };
    }
});

function checkWxScroll() {
    var currentPosition, timer;
    var speed = 1; //页面滚动距离
    timer = setInterval(function() {
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= speed;
        window.scrollTo(0, currentPosition); //页面向上滚动
        currentPosition += speed; //speed变量
        window.scrollTo(0, currentPosition); //页面向下滚动
        clearInterval(timer);

    }, 1);
}

export {
    iosbugfixed

}