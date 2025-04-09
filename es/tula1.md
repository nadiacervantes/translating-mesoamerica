---
layout: manifest-es
identifier: tula1
---
{% include get_manifest.html %}

  <div class="container">
  
    <div class="row">
      <div class="col-lg-12 col-md-12 mx-auto">

		  <h2 style="margin:0 0 1em 0">{{m.title_es}}</h2>
		  
      </div>
    </div> <!-- /.row -->

     <div class="row">
	      
		<div class="col-md-8">
			<div id="mirador2" style="position:relative;width:100%;height:600px;"></div>
		</div>
		
		<div class="metadata col-md-4">

				  <h2 class="btn btn-primary">Metadatos</h2>
				  <p><label for="doc_title">Title:</label> <span id="doc_title">{{m.title}}</span></p>
				  <p><label for="doc_description">Description:</label> <span id="doc_description">{{m.description}}</span></p>
				  <p><label for="doc_source">Source:</label> <span id="doc_source"><a href="{{m.source}}" target="_blank">{{m.attribution}}</a></span></p>

	       </div>
      </div> <!-- /.row -->	

     <div class="row" style='margin-top:1.5em;'>
      <div class="col-lg-6 col-md-6 mx-auto">

		  <h2></h2>

		  
      </div>

      <div class="col-lg-6 col-md-6 mx-auto">
       
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

