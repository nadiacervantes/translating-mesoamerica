---
layout: manifest-en
identifier: tecamachalco
lang: en
---
{% include get_manifest.html %}

  <div class="container">
  
    <div class="row">
      <div class="col-lg-12 col-md-12 mx-auto">

		  <h2 style="margin:0 0 1em 0">{{m.title}}</h2>
		  
      </div>
    </div> <!-- /.row -->

     <div class="row">
	      
		<div class="col-md-8">
			<div id="mirador2" style="position:relative;width:100%;height:600px;"></div>
		</div>
		
		<div class="metadata col-md-4">

				  <h2 class="btn btn-primary">Metadata</h2>
				  <p><label for="doc_title">Title:</label> <span id="doc_title">{{m.title}}</span></p>
				  <p><label for="doc_description">Description:</label> <span id="doc_description">{{m.description}}</span></p>
				  <p><label for="doc_source">Source:</label> <span id="doc_source"><a href="{{m.source}}" target="_blank">{{m.attribution}}</a></span></p>
<p><label for="">Date</label>[1557-1594]</p>
				  <p><label for="">Language</label>Nahuatl and Spanish</p>
				  <p><label for="">Binding Note</label>Unbound sheets in slipcase</p>
				  <p><label for="">Source Acquisition</label>Gift Robert Garrett, 1949</p>
				  <p><label for="">Call Number</label>C0744.02 (Garrett Mesoamerican Manuscripts, no. 15)</p>
				  <p><label for="">Location</label>Special Collections C0744.02 (Garrett Mesoamerican Manuscripts, no. 15)</p>
				  <p><label for="">Collection</label>Mesoamerican Manuscripts, Indigenous Cultures</p>

	       </div>
      </div> <!-- /.row -->	

     <div class="row" style='margin-top:1.5em;'>


      <div class="col-lg-12 col-md-12 mx-auto">
       
	{% include decipherment_list.html %}
		  
      </div>
    </div> <!-- /.row -->
	      
	  </div>


<script type="text/javascript">


      Mirador.viewer({
	id: "mirador2",
	windows: [{ manifestId: '{{m.manifest}}'}],
	workspace: { showZoomControls: true },
	workspaceControlPanel: { enabled: false  }
      });
</script> 

