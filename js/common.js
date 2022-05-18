$(function(){
  console.log($("body"));
  console.log(window.location.href);
  console.log($(location).attr("href"));
  /*
  #lnb의 메뉴와 같은 서브페이지의 주소값을 매칭하여
  해당 메뉴에 on class 추가하시오.
  */
  // $("#lnb ul li a").each(function(){
  //   let locat_href = $(location).attr("href");
  //   locat_href = locat_href.split("/");
  //   locat_href = locat_href[6].split(".");
  //   locat_href = locat_href[0];
  //
  //   $(this).css("text-transform","capitalize");
  //   if($(this).text() == locat_href){
  //     $(this).addClass("on");
  //
  //   }else{
  //     $(this).removeClass("on");
  //   }
  // })
    function splitlocation(el){
      let href = el.attr("href").split("/");
      href = href[href.length-1].split(".");
      href = href[0];
      return href;
    }

    let currentHref = splitlocation($(location));
    // console.log(currentHref);
    // currentHref = text_split(currentHref);
    // console.log(currentHref);
    $("#lnb a").each(function(){
      // let matchHref = $(this).attr("href");
      // matchHref = text_split(matchHref);
      // console.log(matchHref);
      if(splitlocation($(this)) == currentHref){
        $(this).addClass("on");
      }
    });

    // function text_split(text){
    //   text = text.split("/");
    //   text = text[text.length-1].split(".");
    //   text = text[0];
    // }

    $(".accordion dd:not(:first)").css({
      "display":"none",
      "height":0
    });

    $(".accordion dl dt").click(function(){
      let thisElem = $(this);
      if($("+dd",thisElem).css("display") == "none"){
        let isAni = $("dd").is(":animated");
        if( !isAni ){
          $("dd").each(function(){
            if(parseInt($(this).css("height")) == 300){
              $(this).animate({height: 0},300,function(){
                $(this).css("display","none");
              });
            }
          });
          $("+dd",this).css("display","block").animate({height: 300+"px"},1500);
        }

      }
    });
});
