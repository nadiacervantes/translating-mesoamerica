---
layout: default-en
lang: en
---
<style>
  #alphabet-nav { margin:1em 0 1em 0; padding: 0px; }
  #alphabet-nav a { display:inline-block;padding: 0.2em 0.5em; margin: 0.1em; }
  .alphabet-item { display:flex; flex-direction:row; flex-wrap:nowrap; }
  .alphabet-item-img img { width:120px; margin:0.5em; }
  .alphabet-item-img img { margin:0.5em; }
  .letter { text-transform: inherit !important; }
</style>
     
<div class='container'>
     <div class="row">
	      
       <div class="col-md-12">
		<h2>Alphabet</h2>

		<!--<div>A description of the alphabet portion of the website</div>-->
		
		<div id="alphabet-nav">
		    <a href="#" rel="a" data-case="mayúscula" class="letter btn btn-primary">A</a>
		    <a href="#" rel="b" data-case="mayúscula" class="letter btn btn-primary">B</a>
		    <a href="#" rel="c" data-case="mayúscula" class="letter btn btn-primary">C</a>
		    <a href="#" rel="d" data-case="mayúscula" class="letter btn btn-primary">D</a>
		    <a href="#" rel="e" data-case="mayúscula" class="letter btn btn-primary">E</a>
		    <a href="#" rel="f" data-case="mayúscula" class="letter btn btn-primary">F</a>
		    <a href="#" rel="g" data-case="mayúscula" class="letter btn btn-primary">G</a>
		    <a href="#" rel="h" data-case="mayúscula" class="letter btn btn-primary">H</a>
		    <a href="#" rel="i" data-case="mayúscula" class="letter btn btn-primary">I</a>
		    <a href="#" rel="j" data-case="mayúscula" class="letter btn btn-primary">J</a>
		    <a href="#" rel="l" data-case="mayúscula" class="letter btn btn-primary">L</a>
		    <a href="#" rel="m" data-case="mayúscula" class="letter btn btn-primary">M</a>
		    <a href="#" rel="n" data-case="mayúscula" class="letter btn btn-primary">N</a>
		    <a href="#" rel="ñ" data-case="mayúscula" class="letter btn btn-primary">Ñ</a>
		    <a href="#" rel="o" data-case="mayúscula" class="letter btn btn-primary">O</a>
		    <a href="#" rel="p" data-case="mayúscula" class="letter btn btn-primary">P</a>
		    <a href="#" rel="q" data-case="mayúscula" class="letter btn btn-primary">Q</a>
		    <a href="#" rel="r" data-case="mayúscula" class="letter btn btn-primary">R</a>
		    <a href="#" rel="s" data-case="mayúscula" class="letter btn btn-primary">S</a>
		    <a href="#" rel="t" data-case="mayúscula" class="letter btn btn-primary">T</a>
		    <a href="#" rel="u" data-case="mayúscula" class="letter btn btn-primary">U</a>
		    <a href="#" rel="v" data-case="mayúscula" class="letter btn btn-primary">V</a>
		    <a href="#" rel="w" data-case="mayúscula" class="letter btn btn-primary">W</a>
		    <a href="#" rel="x" data-case="mayúscula" class="letter btn btn-primary">X</a>
		    <a href="#" rel="y" data-case="mayúscula" class="letter btn btn-primary">Y</a>
		    <a href="#" rel="z" data-case="mayúscula" class="letter btn btn-primary">Z</a>
		<br />
		    <a href="#" rel="a" data-case="minúscula" class='letter btn btn-primary'>a</a>
		    <a href="#" rel="b" data-case="minúscula" class="letter btn btn-primary">b</a>
		    <a href="#" rel="c" data-case="minúscula" class="letter btn btn-primary">c</a>
		    <a href="#" rel="d" data-case="minúscula" class="letter btn btn-primary">d</a>
		    <a href="#" rel="e" data-case="minúscula" class="letter btn btn-primary">e</a>
		    <a href="#" rel="f" data-case="minúscula" class="letter btn btn-primary">f</a>
		    <a href="#" rel="g" data-case="minúscula" class="letter btn btn-primary">g</a>
		    <a href="#" rel="h" data-case="minúscula" class="letter btn btn-primary">h</a>
		    <a href="#" rel="i" data-case="minúscula" class="letter btn btn-primary">i</a>
		    <a href="#" rel="j" data-case="minúscula" class="letter btn btn-primary">j</a>
		    <a href="#" rel="l" data-case="minúscula" class="letter btn btn-primary">l</a>
		    <a href="#" rel="m" data-case="minúscula" class="letter btn btn-primary">m</a>
		    <a href="#" rel="n" data-case="minúscula" class="letter btn btn-primary">n</a>
		    <a href="#" rel="ñ" data-case="minúscula" class="letter btn btn-primary">ñ</a>
		    <a href="#" rel="o" data-case="minúscula" class="letter btn btn-primary">o</a>
		    <a href="#" rel="p" data-case="minúscula" class="letter btn btn-primary">p</a>
		    <a href="#" rel="q" data-case="minúscula" class="letter btn btn-primary">q</a>
		    <a href="#" rel="r" data-case="minúscula" class="letter btn btn-primary">r</a>
		    <a href="#" rel="s" data-case="minúscula" class="letter btn btn-primary">s</a>
		    <a href="#" rel="t" data-case="minúscula" class="letter btn btn-primary">t</a>
		    <a href="#" rel="u" data-case="minúscula" class="letter btn btn-primary">u</a>
		    <a href="#" rel="v" data-case="minúscula" class="letter btn btn-primary">v</a>
		    <a href="#" rel="w" data-case="minúscula" class="letter btn btn-primary">w</a>
		    <a href="#" rel="x" data-case="minúscula" class="letter btn btn-primary">x</a>
		    <a href="#" rel="y" data-case="minúscula" class="letter btn btn-primary">y</a>
		    <a href="#" rel="z" data-case="minúscula" class="letter btn btn-primary">z</a>
		</div>

		<div ID="alphabet-list"></div>
		
		
		<script>
		
		
		
		jQuery(document).ready(function(){
		
		
		var case = "whatever";
		 var list =  {{site.data.alphabet2025 | jsonify }};


		function loadList(letter, case) {
		  var html = "";
		  jQuery.each(list, function(i,v){
		  
		    jQuery("#alphabet-list").empty();
		    if(v.letter == letter) {

		       html += "<div class='alphabet-item'><div class='alphabet-item-img'><img src='"+v.Image+"'/></div>\
				  <div class='alphabet-item-content'>\
					  <h3>"+v.case+" "+v.letter+"</h3>\
					  <a href='{{site.baseurl}}/"+v.identifier+".html'>"+v.manuscript+"</a>\
				  </div></div>";
		    }
		  });
		  jQuery("#alphabet-list").append(html);
		}
		
		
		 jQuery(".letter").click(function(event){
		   var rel = jQuery(this).attr('rel');
		   loadList(rel)
		   event.preventDefault();
		 });
		 
		 loadList('a','case')
		 
		});
		
		</script>

  
        </div>
	</div> <!-- /.row -->
</div> <!-- /.container -->


