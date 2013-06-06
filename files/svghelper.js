function SvgHelper (){
	this.debug = function (message){
	  document.getElementById("debug").firstChild.nodeValue = message
	}
	this.calculateWidth = function (text){
	  var t = this.createText(text,400,700,50+20)
	  t.setAttributeNS(null,"visibility", 'visible' )
	  var bbox = t.getBBox()
	  var width = bbox.width/400
	  this.removeElement(t)
	  return width
	}
	this.calculateHeight = function(text){
	  var t = this.createText(text,400,700,50)
	  t.setAttributeNS(null,"visibility", 'visible' )
	  var bbox = t.getBBox()
	  var height = bbox.height/400
	  this.removeElement(t)
	  return height
	}
	this.createText = function(content,fontsize,x,y){
		   var  svgNS = "http://www.w3.org/2000/svg";
		   var textElement = document.createElementNS(svgNS,"text");
		    textElement.setAttributeNS(null,"x",x);        
		    textElement.setAttributeNS(null,"y",y);
		    textElement.setAttributeNS(null,"text-anchor","middle");
		    textElement.setAttributeNS(null,"fill","black");
		    textElement.setAttributeNS(null,"visibility", 'hidden' )
		    textElement.setAttributeNS(null,"font-size",fontsize+"px");
		    textElement.setAttributeNS(null,"font-weight","bold");
		    textElement.setAttributeNS(null,"font-family","Verdana")
		   // textElement.setAttributeNS(null,"font-family","Helvetica")
		    var textNode = document.createTextNode(content);
		    textElement.appendChild(textNode);    
		    document.getElementById("firstGroup").appendChild(textElement);
		    return textElement
	}
	this.createSimpleRect = function(otherElement){
		   var  svgNS = "http://www.w3.org/2000/svg";
		   var rectElement = document.createElementNS(svgNS,"rect");
		    rectElement.setAttributeNS(null,"fill","white");
		    rectElement.setAttributeNS(null,"visibility", 'hidden' )
		    rectElement.setAttributeNS(null,"x",0)    
		    rectElement.setAttributeNS(null,"y",0) 
		    rectElement.setAttributeNS(null,"width",1) 
		    rectElement.setAttributeNS(null,"height",1)
		    if(otherElement){
		       document.getElementById("firstGroup").insertBefore(rectElement,otherElement);
		    }else{
		       document.getElementById("firstGroup").appendChild(rectElement);
		    }
		    return rectElement
	}
	this.shapeSimpleRect = function (rectElement,x,y,width,height){
		      rectElement.setAttributeNS(null,"x",x)    
		      rectElement.setAttributeNS(null,"y",y) 
		      rectElement.setAttributeNS(null,"width",width) 
		      rectElement.setAttributeNS(null,"height",height)
	}
	this.createBlackRect = function(x,y,width,height){
	   var rect = this.createSimpleRect()
	   rect.setAttributeNS(null,"visibility", 'visible' )
	   rect.setAttributeNS(null,"fill","black")
	   this.shapeSimpleRect(rect,x,y,width,height)
	}
	this.removeElement = function(element){
	  document.getElementById("firstGroup").removeChild(element);
	}
}
