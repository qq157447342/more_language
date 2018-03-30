<div title = "我要被翻译"  sat-lan="title:我要被翻译">
<div>

<script type="text/javascript">

 $('[set-lan]').each(function(){
           var me = $(this);
           var a = me.attr('set-lan').split(':');
           var p = a[0];   //文字放置位置
           var m = a[1];   //文字的标识
           console.log(p);
           console.log(m);
           var t = Lang[m];
           console.log(t);
           if(t==undefined) return true;   //如果还是没有就跳出
           //文字放置位置有（html,val等，可以自己添加）
           switch(p){
               case 'title':
                   me.attr("title",t);
                   break;
               case 'html':
                   me.html(t);
                   break;
               case 'val':
               case 'value':
                   me.val(t);
                   break;
               default:
                   me.html(t);
           }

       });

var Lang = {
	我要被翻译:"I want to be translated"
}








</script>
