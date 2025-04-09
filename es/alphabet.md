---
layout: default-en
lang: en
---
    
<div class='container'>
     <div class="row">
	      
       <div class="col-md-12">
		<h2>Alfabeto</h2>
		
		<div id="alphabet-nav">
		    <a href="#" rel="a" class='letter btn btn-primary'>A</a>
		    <a href="#" rel="b" class='letter btn btn-primary'>B</a>
		    <a href="#" rel="c" class='letter btn btn-primary'>C</a>
		    <a href="#" rel="d" class='letter btn btn-primary'>D</a>
		    <a href="#" rel="e" class='letter btn btn-primary'>E</a>
		    <a href="#" rel="f" class='letter btn btn-primary'>F</a>
		    <a href="#" rel="g" class='letter btn btn-primary'>G</a>
		    <a href="#" rel="h" class='letter btn btn-primary'>H</a>
		    <a href="#" rel="i" class='letter btn btn-primary'>I</a>
		    <a href="#" rel="j" class='letter btn btn-primary'>J</a>
		    <a href="#" rel="l" class='letter btn btn-primary'>L</a>
		    <a href="#" rel="m" class='letter btn btn-primary'>M</a>
		    <a href="#" rel="n" class='letter btn btn-primary'>N</a>
		    <a href="#" rel="o" class='letter btn btn-primary'>O</a>
		    <a href="#" rel="p" class='letter btn btn-primary'>P</a>
		    <a href="#" rel="q" class='letter btn btn-primary'>Q</a>
		    <a href="#" rel="r" class='letter btn btn-primary'>R</a>
		    <a href="#" rel="s" class='letter btn btn-primary'>S</a>
		    <a href="#" rel="t" class='letter btn btn-primary'>T</a>
		    <a href="#" rel="u" class='letter btn btn-primary'>U</a>
		    <a href="#" rel="v" class='letter btn btn-primary'>V</a>
		    <a href="#" rel="w" class='letter btn btn-primary'>W</a>
		    <a href="#" rel="x" class='letter btn btn-primary'>X</a>
		    <a href="#" rel="y" class='letter btn btn-primary'>Y</a>
		    <a href="#" rel="z" class='letter btn btn-primary'>Z</a>
		</div>

		<div ID="alphabet-list"></div>
		
		
		<script>
		jQuery(document).ready(function(){
		 var list =  {{site.data.alphabet2025 | jsonify }};


		function loadList(letter) {
		  var html = "";
		  jQuery.each(list, function(i,v){
		    jQuery("#alphabet-list").empty();
		    if(v.letter == letter) {
		       html += "<div class='alphabet-item'><div class='alphabet-item-img'><img src='"+v.Image+"'/></div><div class='alphabet-item-content'>"+v.case+" "+v.letter+"</div></div>";
		    }
		  });
		  jQuery("#alphabet-list").append(html);
		}
		
		
		 jQuery(".letter").click(function(event){
		   var rel = jQuery(this).attr('rel');
		   loadList(rel)
		   event.preventDefault();
		 });
		 
		 loadList('a')
		 
		});
		
		</script>

  
        </div>
	</div> <!-- /.row -->
</div> <!-- /.container -->


