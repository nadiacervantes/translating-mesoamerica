---
layout: default-en
lang: en
---
    
<div class='container'>
     <div class="row">
	      
       <div class="col-md-12">
		<h2>Alphabet</h2>

		<!--<div>A description of the alphabet portion of the website</div>-->
		
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

		<div ID="alphabet-section"></div>
		
		
		<script>
		jQuery(document).ready(function(){
		 var list =  {{site.data.alphabet2025 | jsonify }};
		 var manifests = {{site.data.manifests | jsonify }};


		function loadList(letter) {
		
		  jQuery("#alphabet-section").empty();
		  var html = "";
		  
		  var output = [];
		  
		  jQuery.each(manifests, function(j,k){
		    jQuery.each(list, function(i,v){
		      if(v.letter == letter && v.Manifest == k.manifest) {
		        if(output[k.manifest] == undefined) { output[k.manifest] = { 'label':k.title,'items':[]}; }
		        output[k.manifest].items.push(v);
		      }
		    });
		  }); 
		  
		  for(o in output) {
		    html = "<h4>"+output[o].label+"</h4>";
		    html += "<div class='alphabet-list'>";
		    jQuery.each(output[o].items, function(i,v){
		      html += `<div class='alphabet-item'><div class='alphabet-item-img'><img src='${v.Image}'/></div><div class='alphabet-item-content'>${v.case} ${v.letter}</div></div>`;
		    });
		    html += "</div>";
	            jQuery("#alphabet-section").append(html);
		  }

		  
		  
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


