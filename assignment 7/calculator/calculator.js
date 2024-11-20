$(document).ready(function(){
    $("#btn").click(function(){
       // alert(" btn click")
    //    var data1=$("#id1").val()
    //    var data2=$("#id2").val()
    //    var data3=$("#id3").val()

       var p= parseInt($("#id1").val())
       var q= parseInt($("#id2").val())
       var r= parseInt($("#id3").val())

    //    var tot= p+q+r;
    //    console.log(tot);
       var tot=p+q+r;
       console.log(tot)
       var per=(tot/300)*100;
       console.log(per);
      
       if(per>80)
            $("#p3").html("A")
       else if(per>60)
            $("#p3").html("B")
       else
             $("#p3").html("C")
               
        document.querySelector("#p1").innerHTML=tot;
        document.querySelector("#p2").innerHTML=per;
     
    })
})