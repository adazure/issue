
(function(){var buttons=document.querySelectorAll('[data-panel-id]');if(buttons){for(var i=0;i<buttons.length;i++){var n=buttons[i];n.innerHTML=n.getAttribute('data-show-text');n.addEventListener('click',function(){var x=document.getElementById(n.getAttribute('data-panel-id'));if(x){x.__classNames=!x.__classNames?x.className:x.__classNames;var sText=n.getAttribute('data-show-text');var hText=n.getAttribute('data-hidden-text');if(x.style.display=='block'){x.style.display='none';n.innerHTML=sText;x.className=x.__classNames+' easy-opacity-false';}else{x.style.display='block';x.className=x.__classNames+' easy-opacity-true';n.innerHTML=hText;}}});}}})();