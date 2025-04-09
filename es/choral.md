---
layout: manifest-es
identifier: choral
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
		    <div class="m3-container">
		    	<div id="mirador2" style="position:relative;width:100%;height:600px;"></div>
		    </div>
		</div>
		
		<div class="metadata col-md-4">

				  <h2 class="btn btn-primary">Metadatos</h2>
				  <p><label for="doc_title">Title</label> <span id="doc_title">Choral Music Miscellany, 1635</span></p>
				  <p><label for="doc_description">Description</label> <span id="doc_description">Choral settings of sacred texts in Nahuatl, Latin, and Spanish, including "Requiem eternam dona eis domine...," "Victoria victoria aqui canvencido [convencido]," and "Dominus dixit ad me filius meus est..." One note in Latin states the manuscript was written by the Maestro Tomas Pascual, 22 December 1635 (fol. 5r).</span></p>
				  <p><label for="doc_source">Source</label> <span id="doc_source"><a href="https://dpul.princeton.edu/msstreasures/catalog/b2774078k" target="_blank">Princeton University Library</a></span></p>
				  <p><label for="">Date</label>1635</p>
				  <p><label for="">Language</label>Spanish, Latin, and Nahuatl</p>
				  <p><label for="">Binding Note</label>Unbound sheets in a raw hide cover. Rebound in modern paper wrapper with leather ties</p>
				  <p><label for="">Source Acquisition</label>Gift; Robert Garrett; 1949</p>
				  <p><label for="">Call Number</label>C0744.01 (Garrett-Gates Mesoamerican Manuscripts, no. 258)</p>
				  <p><label for="">Location</label>HSVM C0744.01 (Garrett-Gates Mesoamerican Manuscripts, no. 258)</p>
				  <p><label for="">Collection</label>Mesoamerican Manuscripts, Robert Garrett, Digitized Manuscripts, Collections Donated to Princeton University Library, Indigenous Cultures</p>


	
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

