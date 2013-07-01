var RemoteImages = window.RemoteImages = {

  loading: function () {
    imag = [];
    i = 0;
    $( "#imgUrl img" ).one('load', function() {
      if(this.width > 100 && this.height > 100){
        a = "image"+i;
        i=i+1;
        $(this).attr("number",i);
        $(this).addClass(a);
        n=i;
        $(".image0").removeClass('hide');
        $(".image0").addClass('activ');
        imag.push($(this).attr('src'));
        $("#sum").text(' '+n);
        $('#pin_remote_image_url').val(imag[0]);
      }
      else{ 
        this.remove();
      }
    });
  },

  next_img: function () {
    $('#next').click(function(){
      num = $(".activ").attr('number');
      if(num == imag.length)
        next = 1;
      else
        next = parseFloat(num) + 1;
      $("#nimg").text(next+' из');
      $('#imgUrl img').each(function(){
        if($(this).attr("number") == num){
          $(this).addClass('hide');
          $(this).removeClass('activ');
        }
        if($(this).attr("number") == next){
          $(this).removeClass('hide');
          $(this).addClass('activ');
        }
      });
      $('#pin_remote_image_url').val(imag[next-1]);
    });
  },

  prev_img: function () {
    $('#prev').click(function(){
      num = $(".activ").attr('number');
      if(num == 1)
        prev = imag.length;
      else
        prev = parseFloat(num) - 1;
      $("#nimg").text(prev+' из');
      $('#imgUrl img').each(function(){
        if($(this).attr("number") == num){
          $(this).addClass('hide');
          $(this).removeClass('activ');
        }
        if($(this).attr("number") == prev){
          $(this).removeClass('hide');
          $(this).addClass('activ');
        }
      });
      $('#pin_remote_image_url').val(imag[next-1]);
    });
  },
  initialize: function () {
    RemoteImages.loading();
    RemoteImages.next_img();
    RemoteImages.prev_img();
  }
}