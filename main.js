!function(){
  let duration = 50;
  $('.actions button').eq(1).addClass('active')
  $('.actions').on('click','button',function(data){
    let $button = $(data.currentTarget)
    let speed = $button.attr('data-speed')
    $button.addClass('active').siblings('.active').removeClass('active')
    switch(speed){
      case 'slow': duration = 100 
      break
      case 'normal': duration = 50
      break
      case 'fast' : duration = 10
      break
    }
})
  function writeCode(prefix,code){
  let content = document.querySelector('#code')
  let styleTag = document.querySelector('#styleTag')
  let n = 0;
  let timer = setTimeout(function fn(){
      n += 1
      content.innerHTML = code.substring(0,n)
      styleTag.innerHTML = code.substring(0,n)
      content.scrollTop = content.scrollHeight
      if(n < code.length){
       timer =  setTimeout(fn,duration)
      }  
    }
  ,duration)
}
  
  let PikachuCode = `
 /*
  *   CSS画只皮卡丘~
  */
 /*
  *   先画张大脸~
  */
  .Pikachu{
    height:50%;
    width:100%;
    background: #FCD641;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .wrap{
    width:400px;
    height:250px;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }
 /*
  *   再做个鼻子
  */  
  .nose{
    position: absolute;
    border:18px solid transparent;
    border-top:18px solid;
    border-radius:50%;
    top:35px;
  }
 /*
  *   画画眼睛~
  */
  .eyes{
    position:absolute;
    border:24px solid;
    border-radius:50%;
    top:0;
  }
  .eyes::after{
    content:'';
    display:block;
    position:absolute;
    border:9px solid white;
    border-radius:50%;
    top:-18px;
    left:-18px;
  }
  .eyes.left{
    left:70px;
  }
  .eyes.right{
    right:70px;
  }
 /*
  *   红扑扑的小脸~
  */
  .face{
    width:60px;
    height:60px;
    border:5px solid black;
    border-radius:50%;
    background: red;
    position: absolute;
  }
  .face.left{
    left:10px;
  }
  .face.right{
    right:10px;
  }
 /*
  *   还有嘴唇~
  */
  .lip{
    position: absolute;
    width:20px;
    height:50px;
    z-index:1;
    background:#FCD641;
  }
  .lip.left{
    border-bottom:3px solid;;
    border-right:3px solid;
    border-bottom-right-radius:50px 80px;  
    transform:translate(-24px,-30px) rotate(54deg); 
  }
  .lip.right{
    border-bottom:3px solid;;
    border-left:3px solid;
    border-bottom-left-radius:50px 80px; 
    transform:translate(24px,-30px) rotate(-54deg);
  }
 /*
  *   小舌头！
  */
  .tongue{
    position: relative;
    width:50px;
    height:100px;
    border:3px solid;
    background: #9f000a;
    border-bottom-left-radius:25px 100px;
    border-bottom-right-radius:25px 100px;
    transform:translateY(12px);
    overflow: hidden;
  }
  .tongueShadow{
    position:absolute;
    border:40px solid #ff444f;
    border-radius:50%;
    transform:translate(-18px,30px);
  }
 /*
  *   ok~画完啦！
  */  
  `
  writeCode('',PikachuCode)

}.call()