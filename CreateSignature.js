  var canvas_main = document.querySelector("canvas");
  var signaturePad = new SignaturePad(canvas_main, {
          backgroundColor: "#FFFFFF", //พื้นหลังสีขาว
          penColor: "#0D10B1",  //ปากกาสีน้ำเงิน
    });

  $('#clear-signature').on('click',()=> {
    event.preventDefault()
    signaturePad.clear();
  })

  function resizeCanvas() {
    //console.log(window.devicePixelRatio )
    let ratio =  Math.max(window.devicePixelRatio || 1, 1);
    canvas_main.width = canvas_main.offsetWidth * ratio ;
    if(ratio >2)  canvas_main.height = canvas_main.offsetHeight * ratio *1.5;
    else canvas_main.height = canvas_main.offsetHeight * ratio;
    canvas_main.getContext("2d").scale(ratio, ratio);
    signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
