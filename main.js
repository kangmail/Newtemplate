<script type='text/javascript'>
//<![CDATA[
$(document).ready(function() {
    // Menentukan elemen yang dijadikan sticky yaitu #header-wrapper
    var stickyNavTop = $('#nav').offset().top; 
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();  
        // Kondisi jika discroll maka menu akan selalu diatas, dan sebaliknya        
        if (scrollTop > stickyNavTop) { 
            $('#nav').css({ 'position': 'fixed', 'top':0, 'z-index':9999 });
        } else {
            $('#nav').css({ 'position': 'relative' });
        }
    };
    // Jalankan fungsi
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
//Pager
$(document).ready(function(){
var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
$(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle);//rgt
});
var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
var newerLinkTitle = $(&quot;a.blog-pager-newer-link:first&quot;).text();
$(&quot;a.blog-pager-newer-link&quot;).text(newerLinkTitle);
});
});

//Spoiler
$(document).ready(function() {
    $(&quot;#flippy&quot;).click(function() {
        $(&quot;#flippanel&quot;).slideToggle(&quot;normal&quot;);
    });
});
//]]>
</script>
