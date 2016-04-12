<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
    var stickyNavTop = $('#nav').offset().top; 
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();  
        if (scrollTop > stickyNavTop) { 
            $('#nav').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
        } else {
            $('#nav').css({ 'position': 'relative' });
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
(function() {
    var dr = document.createElement('script');
    dr.type = 'text/javascript'; dr.async = true;
    dr.src = '//share.donreach.com/buttons.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dr);
  })();
//]]>
</script>
