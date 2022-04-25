window.addingEvent = function (event, target, method) {    
    if (target.addEventListener) {    
       target.addEventListener(event, method, false);    
    }   
    else if (target.attachEvent) {    
       target.attachEvent("on" + event, method);    
    }    
 } 