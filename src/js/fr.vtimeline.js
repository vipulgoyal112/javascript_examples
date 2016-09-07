/**
 * options set of key/value pairs to configure the scroll.
 * slideSelector
 * 	default- "li", slide selector relative to container. Slide must have id and url attr e.g. <li url="loadData.jsp?id=1" id="A1"></li>
 * 
 * slideSelectorLoad
 *  default- null, define selector which need to load data automatically if different from slideSelector
 * 
 * scrollerSelector
 * 	default- ".scroller", scroller selector relative to container will contains width of total slides
 * 
 * scrollSlideCnt
 * default- "2", slide to scroll on single click for non touch device
 * 
 * load
 * 	default- "visible", load data only for visible slides. "all"- load data for all slide. "none" - if data already loaded
 * 
 * iscrollHorFadeLeft
 *  default- null, left scroll selector
 * 
 * iscrollHorFadeRight
 *  default- null, right scroll selector
 * 
 * touch
 *  default- null, [type boolean] to overwrite touch implementations, if null plugin will detect if device is touch or not.   
 *  
 * loadDataCallback
 * 	default- null, must be provided (if load != 'none')- slides will load data using this callback(url, container_id)
 * 
 * loadingImgCallback
 * 	default- Loading... , slides to show loading image/text callback(container_id) 
 */

(function( $ ) {
	
	var defaults = {
		middleGap : 10,
		gapInBullets : 30,
		marginBtwDivs : 20,
		containerSeletor : "#container",
		selector : ".jq-vtmline",
		left : 0,
		fDivTop : 0,
		sDivTop : 0,
		fDivTotalHeight : 0,
		sDivTotalHeight : 0,
		height : 0,
		htmlLeft : '',
		htmlRight : '',
		isOriginLeft : true
	};
	
	$.fn.frvtimeline = function( options ) {
		options = $.extend({}, defaults, options);
		options.left = ($(options.containerSeletor).width() / 2) + options.middleGap;
		
		$(options.selector).each (function (index) {
			options.height = $(this).height();
		    if (index == 0) {
		    	options.fDivTop = $(this).position().top;
		    	if (options.isOriginLeft) {
		    		$(this).prepend(options.htmlRight);
		    		setStyle($(this), options.fDivTop, 0);
		    	} else {
		    		$(this).prepend(options.htmlLeft);
		    		setStyle($(this), options.fDivTop, options.left);
		    	}
		        options.fDivTotalHeight = options.fDivTop + options.height + options.marginBtwDivs;
		        return;
		    }
		    if (index == 1) {
		    	options.sDivTop = $(this).position().top + options.gapInBullets;
		    	if (options.isOriginLeft) {
		    		$(this).prepend(options.htmlLeft);
			        setStyle($(this), options.sDivTop, options.left);
		    	} else {
		    		$(this).prepend(options.htmlRight);
			        setStyle($(this), options.sDivTop, 0);
		    	}
		        options.sDivTotalHeight = options.sDivTop + options.height + options.marginBtwDivs;
		        return;
		    }
		    if (options.fDivTotalHeight < options.sDivTotalHeight) {
		    //left side
		        var diff = options.fDivTotalHeight - options.sDivTop;
		        var actualDiff = 0;
		        if (diff < options.gapInBullets) {
		            actualDiff = options.gapInBullets - diff;
		        }
		        options.fDivTop = options.fDivTotalHeight + actualDiff;
		        if (options.isOriginLeft) {
		        	$(this).prepend(options.htmlRight);
			        setStyle($(this), options.fDivTop, 0);
		        } else {
		        	$(this).prepend(options.htmlLeft);
			        setStyle($(this), options.fDivTop, options.left);
		        }
		        options.fDivTotalHeight = options.fDivTop + options.height + options.marginBtwDivs;     
		    } else {
		        var diff = options.sDivTotalHeight - options.fDivTop;
		        var actualDiff = 0;
		        if (diff < options.gapInBullets) {
		            actualDiff = options.gapInBullets - diff;
		        }
		        options.sDivTop = options.sDivTotalHeight + actualDiff;
		        if (options.isOriginLeft) {
		        	 $(this).prepend(options.htmlLeft);
				     setStyle($(this), options.sDivTop, options.left);
		        } else {
		        	 $(this).prepend(options.htmlRight);
				     setStyle($(this), options.sDivTop, 0);
		        }
		       
		        options.sDivTotalHeight = options.sDivTop + options.height + options.marginBtwDivs;  
		    }
		});
		
	};
	
	function setStyle (_this,top,lft) {
	    _this.css("position","absolute");
	    _this.css("top",top);
	    _this.css("left",lft);
	}
})( jQuery );
