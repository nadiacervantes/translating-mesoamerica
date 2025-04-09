---
layout: manifest-en
identifier: traducese
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
				  <p><label for="">Date</label>1709-1718</p>
				  <p><label for="">Language</label>Spanish and Nahuatl</p>
				  <p><label for="">Binding Note</label>Bound with various old documents in Nahuatl and Spanish glued together as front and back covers</p>
				  <p><label for="">Source Acquisition</label>Gift Robert Garrett, 1949</p>
				  <p><label for="">Call Number</label>C0744.02 (Garrett Mesoamerican Manuscripts, no. 10)</p>
				  <p><label for="">Location</label>HSVM C0744.02 (Garrett Mesoamerican Manuscripts, no. 10), HSVM Electronic Resource, ELF1 C0744.02 (Garrett Mesoamerican Manuscripts, no. 10)</p>
				  <p><label for="">Collection</label>Robert Garrett, Digitized Manuscripts, Collections Donated to Princeton University Library</p>

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
	"id": "mirador2",
	"window": {
        "allowFullscreen": true
        },
	"windows": [{ manifestId: '{{m.manifest}}'}],
	workspace: { showZoomControls: true },
	workspaceControlPanel: { enabled: false  }
      });
</script> 

