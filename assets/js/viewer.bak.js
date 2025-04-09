jQuery(document).ready(function(){


  // load TIFY
  var tii = new Tify({
    container: '#tify',
    manifestUrl: pagedata.manifest,
    toggleDoublePage: "true"
  });  



  if(typeof tii === "object") {
 
  
	  tii.ready.then(() => {
	  	
	  	function loadTranscriptions(pages) {
	  	
	  	
	  	   var tabs = jQuery('.tab');
	  	   
	  	   
	  	   // reset metadata as default and hide the others
	  	   jQuery("#metadata").show();
	  	   jQuery.each(tabs, function(i,v){
	  	     if(jQuery(v).attr('id') != "metadata") { jQuery(v).hide(); }
	  	   })
	  	
	  	   jQuery("#dynamic_tabs").empty();
	  	   jQuery("#dynamic_tab_content").empty();
	  	   

	  	   jQuery.each(pagedata.pages, function(i,v){
  	   

		      if(pages.indexOf(parseInt(i)) != -1) { 
			  
			   jQuery.each(v, function(j,k){
			   
  	  			console.log(k);

			        jQuery.get("files/"+k.filename, function(text){
	  	    		  jQuery("#dynamic_tabs").append("<button class=\"btn btn-primary\" onclick=\"openTab('"+k.tab+"')\">"+k.tab+"</button>&nbsp;");
	  	     		  jQuery("#dynamic_tab_content").append("<div id=\""+k.tab+"\" class=\"tab\" style=\"display:none\"><p>"+text+"</p></div>");
			        }, 'html');


			   });
			  


			}
	  	   }); 

	  	}
	  	
	  	
		jQuery(".changepage").click(function(e){
		    var target = parseInt(jQuery(this).attr('rel'));
		    tii.setPage(target);
		    loadTranscriptions([target])
		    e.preventDefault();
		});
		
		
	  	
	  	jQuery("#tify").click(function(){
	  	  loadTranscriptions(tii.options.pages)
	  	});  

	  	loadTranscriptions([1])	
	  

	  });
  
  }
  

function nl2br (str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}
  




});

    function doit(pagelist) {
        pagelist = pagelist +"";
        var pages = pagelist.split(',').map( Number );
        tii.setPage(pages);
    }  
