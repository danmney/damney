import Vue from "vue";

Vue.directive('back',{
    bind(el,binding,vnode){
        let eventType = binding.arg || "click"; //设置触发事件类型
        el.addEventListener(eventType,e=>{//事件监听 ，事件类型 事件处理函数
            history.back();
        })

    }
})