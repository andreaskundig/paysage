function Mot (txt,x,y){

    this.text  = function () {return this.txt}
    this.setBackground = function(color){
	this.rectElement.setAttributeNS(null,"fill",color);
    }
    
    this.width = function(){
       return (this.textWidth+0.7 )* Mot.fontSize 
    }
    
    this.height = function(){
       return  this.textHeight * Mot.fontSize*1.9
    }

    this.corners = function() {
	var width = this.width()
      var height = this.height()
       var x0 = this.x - width/2
       var x1 = this.x + width/2
       var y0 = this.y - height/2
       var y1 = this.y + height/2
       return [[x0,y0],[x1,y0],[x1,y1],[x0,y1]]
    }
    
   this.isVisible = function(){
      return this.textElement.getAttributeNS(null,"visibility") == "visible"
   }
   
   this.show = function(show){
      this.textElement.setAttributeNS(null,"visibility",  show ? 'visible' : 'hidden' )
      this.rectElement.setAttributeNS(null,"visibility",  show ? 'visible' : 'hidden' )
      if(show && this.adjustToFontSize){ this.adjustToFontSize() }
   }
   
   this.adjustToFontSize = function(){
      this.textElement.setAttributeNS(null,"font-size",Mot.fontSize+"px");
      this.textElement.setAttributeNS(null,"x",this.x);
      this.textElement.setAttributeNS(null,"y",this.y +this.textHeight*Mot.fontSize/2);
     
      var corners = this.corners()
      svghelper.shapeSimpleRect(this.rectElement,
			      corners[0][0],
			      corners[0][1],
			      corners[2][0] - corners[0][0],
			      corners[2][1] - corners[0][1])
   }
		
   this.addChild = function (child){
	       this.children.push(child)
	       child.depth = this.depth + 1
	       child.parent = this
    }

    this.constructionCode = function(){
      var s ='new Mot("'+this.text()+'",'
      s += this.x/globals.totalWidth+','
      s += this.y/globals.totalHeight+')'    
      return s  
    }
    
    this.x=x*globals.totalWidth;
    this.y=y*globals.totalHeight;
    this.txt=txt    
    this.depth = 0
    this.children = []
    
    this.textElement = svghelper.createText(txt,Mot.getFontSize(),this.x,this.y)
    this.textElement.addEventListener("mousedown",Controls.mousedown, false)
    this.textElement.mot = this
    this.rectElement = svghelper.createSimpleRect(this.textElement) 
    this.rectElement.addEventListener("mousedown",Controls.mousedown, false)
    this.rectElement.mot = this
    this.textWidth = svghelper.calculateWidth(txt)
    this.textHeight = globals.letterHeight

    this.adjustToFontSize()
    Mot.mots.push(this)
    Mot.namevar(this)
}

Mot.varnames = new Object()
Mot.mots = []
Mot.fontSize = 50
Mot.namevar = function(mot){
      var name = mot.text().toLowerCase().replace(/\W/g,"_")
      mot.varname = name
      var number = Mot.varnames[name]
      if(number === undefined){
          number = 0
      }else{
          number = number + 1
          mot.varname += number
      }
      Mot.varnames[name] = number
}
Mot.getFontSize = function (){return Mot.fontSize}
Mot.setFontSize = function (size){Mot.fontSize = parseFloat(size)}

Mot.treeConstructionCode = function(mot,parentname){
      var indent = ""
      for(var j = 0; j < mot.depth; j++){
	   indent += " "
      }
      var s = indent + 'var ' + mot.varname + ' = ' +mot.constructionCode()+'\n'
      if(parentname){
        s+= indent + parentname +".addChild("+mot.varname+")\n"
      }
      for(var i in mot.children){
        var child = mot.children[i]
        s += Mot.treeConstructionCode(child,mot.varname)
      }
      return s
    }

Mot.visibiliteCode = function(){
    var visibilite = globals.montreur.visibilite
    var code =  " var VISIBILITE = new Object()\n"
    for(distance in visibilite){
	code += " VISIBILITE["+distance+"]=[["
        for(var i = 0; i<visibilite[distance].length;i++){
	    if(i>0){
		code += "],\n   ["
	    }
	    var visi = visibilite[distance][i] 
	    for(var j = 0; j<visi.length;j++){
		if(j>0){
		    code += ","
		}
		code += visi[j].varname
	    }
	}
	code += "]]\n"
    }
    return code
}

Mot.makeConfigurationCode = function(){
    var code = "function makeConfiguration(){\n";
    code += "var CONFIGURATION = new Object()\n ";
    code += Mot.treeConstructionCode(globals.montreur.premier_mot)
    code += "\nCONFIGURATION.premier_mot = "+globals.montreur.premier_mot.varname+"\n\n"
    if(globals.montreur.is_optimized()){
    	code += Mot.visibiliteCode()
    	code += "CONFIGURATION.visibilite = VISIBILITE\n"
    }
    code += "return CONFIGURATION\n}\n"
    return code
}

Mot.nameIsInArray = function(varname,anarray){
  for(var i in anarray){
           if( varname == anarray[i]){ return true }
  }
  return false 
}

Mot.prototype.fits = function(){
   var corners = this.corners()
   var fits = true
   for(var i in corners){
     fits = fits && corners[i][0] > 5 && corners[i][0] < globals.totalWidth-5
     fits = fits && corners[i][1] > 5 && corners[i][1] < globals.totalHeight-5
   }
   return fits
}
Mot.prototype.containsPoint = function (point){
   var corners = this.corners()
   return point[0]>corners[0][0] && point[0]<=corners[2][0] && point[1]>corners[0][1] && point[1]<=corners[2][1]
 }
Mot.prototype.intersects = function(other){
   var oc = other.corners()
   for(var i in oc){ 
     if(this.containsPoint(oc[i])) return true  
   }
   var mc = this.corners()
   for(var i in mc){
     if(other.containsPoint(mc[i])) return true  
   }
   return false
}
Mot.prototype.equals = function (other){
   return this.text() == other.text() && this.x == other.x && this.y == other.y
}
Mot.prototype.childrenFit = function(){
   if(this.children.length == 0){ return false }
   for(var i in this.children){
      this.children[i].adjustToFontSize()
      if(! this.children[i].fits()){ return false }
   }
   for(var i = 0;i<this.children.length;i++){
     for(var j =i+1 ; j<this.children.length;j++){
         if(this.children[i].intersects(this.children[j])){ return false }
     }
   }
   return true
}
Mot.prototype.distanceTo = function(other){
  return Math.sqrt(Math.pow(this.x-other.x,2)+Math.pow(this.y-other.y,2))
}
Mot.prototype.childrenIntersect = function(other){
   for(var i in this.children){
      if(this.children[i].intersects(other)){return true}
   }
   return false
}
Mot.prototype.showChildren = function(show){
     for(var i in this.children){
      this.children[i].show(show)
    }
 }
Mot.removeWithChildren = function(mot){
    Mot.removeMotFromArray(mot,Mot.mots)
    svghelper.removeElement(mot.textElement)
    svghelper.removeElement(mot.rectElement)
    for(var i in mot.children){
       Mot.removeWithChildren(mot.children[i])
    }
}
Mot.removeMotFromArray= function(mot,array){
      for(var i in array){
        if(mot.equals(array[i])){
         array.splice(i,1)
         break
        }
      }
}

function Controls (){
}

Controls.mousemove =  function(evt){
            var r = globals.target 
	    if(!r){ return}
	    //var r = evt.target
	    if(r.doMove){
	       var dx1 =  parseInt(evt.screenX,10) 
	       var dy1 =  parseInt(evt.screenY,10) 
	       r.mot.x = dx1 + r.mx0
	       r.mot.y = dy1 + r.my0
	       r.mot.adjustToFontSize()

             }
	  }
Controls.mousedown = function(evt){
    globals.target = evt.target
    var r = evt.target
    if(evt.button == 0){
        if(!r.doMove){
	    r.doMove = true
	    r.tx0 = parseInt(r.mot.textElement.getAttributeNS(null,"x"),10)-parseInt(evt.screenX,10)
	    r.ty0 = parseInt(r.mot.textElement.getAttributeNS(null,"y"),10)-parseInt(evt.screenY,10)
	    r.rx0 = parseInt(r.mot.rectElement.getAttributeNS(null,"x"),10)-parseInt(evt.screenX,10)
	    r.ry0 = parseInt(r.mot.rectElement.getAttributeNS(null,"y"),10)-parseInt(evt.screenY,10)
	    r.mx0 = r.mot.x-parseInt(evt.screenX,10)
	    r.my0 = r.mot.y-parseInt(evt.screenY,10)
	}
    }else if(evt.button == 1){
        var text = prompt("middle click")
        var parent = r.mot
        var corners = parent.corners()
        var child = new Mot(text.toUpperCase(),
            corners[3][0]/globals.totalWidth,
            corners[3][1]/globals.totalHeight)
        parent.addChild(child)
        child.show(true)
        
    }
}

Controls.mouseup =function(evt){if(globals.target){globals.target.doMove=false}}
Controls.keydown =function(evt){
  if(globals.target && evt.keyCode == 46){
     //touche delete
     var mot = globals.target.mot
     globals.target = null
     Mot.removeWithChildren(mot)
     if(mot.parent){
       Mot.removeMotFromArray(mot,mot.parent.children)
     }
  }else if(evt.keyCode == 83){
    //touche "s" script
      myWin= open("", "displayWindow",
		  "width=500,height=600,status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes")
      var content =  Mot.makeConfigurationCode()
      myWin.document.write("<head/><body><pre>"+content+"</pre></body>")
      myWin.document.close()

  }else if(evt.keyCode == 79){
    //touche "o"
    globals.montreur.optimize()
    svghelper.debug(sizeToDistance(Mot.getFontSize())+", optimisé")
  }else if(evt.keyCode == 80){
      //touche "p"
      globals.montreur.deoptimize()
      svghelper.debug(sizeToDistance(Mot.getFontSize())+", déoptimisé")
  }else if(evt.keyCode == 68){
    //touche "d" démarrer
    if(globals.intervalId){globals.timer.clearInterval(globals.intervalId )}
    globals.instruction.setAttributeNS(null,"visibility","hidden");

    globals.montreur.optimize()
    svghelper.debug(sizeToDistance(Mot.getFontSize())+", optimisé")

    globals.intervalId=globals.timer.setInterval(readSensor,100)
  }else if(evt.keyCode == 65){
     //touche a
     if(globals.intervalId){globals.timer.clearInterval(globals.intervalId )}
     globals.intervalId=globals.timer.setInterval(function(){globals.agrandisseur.animer()},50)
     
  }else if(evt.keyCode == 81){
     //touche q quit
     globals.timer.clearInterval(globals.intervalId )
     globals.intervalId = null
  }else if(evt.keyCode == 71){
     //touche g
     var distance = prompt("distance")
     Mot.setFontSize(distanceToSize(distance))
     svghelper.debug(distance)
     while(globals.montreur.adjustAllToFontSize()){}
     
  }else if(evt.keyCode == 37){
     //touche gauche <
     globals.agrandisseur.agrandis(-2)
  }else if(evt.keyCode == 38){
     //touche haut   ^
     globals.agrandisseur.agrandis(-5)
  }else if(evt.keyCode == 39){
     //touche droite >
     globals.agrandisseur.agrandis(2)
  }else if(evt.keyCode == 40){
     //touche bas    v
     globals.agrandisseur.agrandis(5)
  }else if(evt.keyCode == 13){
     //touche enter 13
     globals.montreur.adjustAllToFontSize()
  }else{
//   alert(evt.keyCode)
  }
}
	  
//l'objet qui décide quels mots sont visibles
function Montreur(){
	
    this.configure = function(configuration){
    	this.premier_mot = configuration.premier_mot
    	this.premier_mot.show(true)
    	this.visible = [this.premier_mot]
    	if(configuration.visibilite){
    	    this.visibilite = configuration.visibilite

    	}
    }
   
    this.adjustAllToFontSize_not_optimized = function(){
     var to_add = []
	 var hasChanged = false
	 for(var i in this.visible){
	    var mot = this.visible[i]
	    if(!mot.isVisible()){
	      this.visible.splice(i,1)
	      continue
	    }
	    mot.adjustToFontSize()
	    if(!mot.fits()||this.motIntersectsVisibleAnd(mot,this.higher)){ 
	      //le mot mord sur le bord ou un autre mot visible
	      //remplacer le mot et ses frères par leur parent
	      if(mot.parent){
		      mot.parent.showChildren(false)
		      this.visible.splice(i,1)
		      mot.parent.adjustToFontSize()
		      mot.parent.show(true)
		      to_add.push(mot.parent)
		      var hasChanged = true
	      }
	    }else if(mot.childrenFit()&&!this.motArrayIntersectsVisible(mot.children)) {
	      //les enfants du mot ont la place d'être affichés sans se marcher dessus
	      //remplacer le mot par ses enfants
	      mot.show(false)
	      this.visible.splice(i,1)
	      mot.showChildren(true)
	      to_add = to_add.concat(mot.children)
	      var hasChanged = true
	    }    
	 }
	 this.visible = this.visible.concat(to_add)
	 return hasChanged
	}
	
    this.adjustAllToFontSize = function(){
        if(this.visibilite){
            return this.adjustAllToFontSize_optimized()
        }else{
            return this.adjustAllToFontSize_not_optimized()
        }
    }
    
	this.motArrayIntersectsVisible = function(mots,andfunction){
	  for(var i in mots){
	     if(this.motIntersectsVisibleAnd(mots[i],andfunction)){return true}
	  }
	  return false
	}
	
	this.motIntersectsVisibleAnd = function (mot,andfunction){
	 if(!andfunction){andfunction = this.truth}
	 var intersects = false
	  for(var i in this.visible){
	     if(mot.equals(this.visible[i])){continue}
	     if(mot.parent && this.visible[i].equals(mot.parent)){continue}
	     if(this.visible[i].parent && this.visible[i].parent.equals(mot)){continue}
	     if(mot.intersects(this.visible[i]) && andfunction(mot,this.visible[i])){
		intersects= true
		break
	     }
	  }
	  return intersects
	}
	
	this.truth = function (){return true}
	
	this.higher = function (mot, other){return mot.depth>=other.depth}


    //précalculer distance de visibilité
    this.calculateVisibility = function(){
    	//distance 270 à 10/20
    	var visibilite = new Object()
    	Mot.setFontSize(globals.maxSize)
    	while(globals.montreur.adjustAllToFontSize_not_optimized()){}
    	var changed = true
    	for(var size = globals.maxSize; size>10;size-=0.5){
    	    if(changed){
        		var visible = []
        		var invisible = []
        		for(var i in Mot.mots){
        		    if(Mot.background.contains(Mot.mots[i])){
        		        continue;
        		    }
        		    if(Mot.mots[i].isVisible()){
        		        visible.push(Mot.mots[i])
        		    }else{
        		        invisible.push(Mot.mots[i])
        		    }
        		}
        		visibilite[size] = [visible,invisible]
    	    }
            Mot.setFontSize(size)
    	    changed = globals.montreur.adjustAllToFontSize_not_optimized()
    	}
    	return visibilite
    }

    this.adjustAllToFontSize_optimized = function(){
        var visibilite = this.visibilite
    	var size = Mot.getFontSize()
    	svghelper.debug(sizeToDistance(size))
    	if(size<28){
            for(var i in Mot.mots){
                Mot.mots[i].show(false)
            }
            Mot.background.showEmpreinte()

    	}else if(size<35){
            for(var i in Mot.mots){
        		Mot.mots[i].show(false)
            }           
            Mot.background.showPixels(true)
    	
    	}else{
            Mot.background.showPixels(false)
            var key = this.find_visibilite_key_for_size(size)
    	    var visible = visibilite[key][0]
    	    for(var i in visible){
        		visible[i].adjustToFontSize()
        		visible[i].show(true)
    	    }
    	    var invisible = visibilite[key][1]
    	    for(var i in invisible){
    	        invisible[i].show(false)
    	    }
    	}
        return false //il n'y a plus de travail à faire
    }
    
    this.find_visibilite_key_for_size  = function(size){
        var key = -1
        for(var i in this.visibilite){if(i>=size){ key=i}}
        if(key == -1){
            for(var i in this.visibilite){ key=i; break}
        }
        return key
    }

    this.is_optimized = function(){
      return this.visibilite //hem...
    }

    this.optimize = function(){
    	var original_size =  Mot.getFontSize()
    	if(!this.visibilite){
    	    this.visibilite = this.calculateVisibility()
    	}
    	//this.adjustAllToFontSize = globals.montreur.adjustAllToFontSize_optimized
        Mot.setFontSize(original_size)
        this.adjustAllToFontSize()
    }
    
    this.deoptimize = function(){
        var key = this.find_visibilite_key_for_size(Mot.getFontSize())
        this.visible =  this.visibilite[key][0]
        this.visibilite = null
        while(this.adjustAllToFontSize()){}
    }

}

function Agrandisseur (maxSize){
	this.maxSize = maxSize
	this.minSize = 15
	this.delta = 2
	
	//pour animer()
    this.agrandis = function(indelta) {
	 var size = Mot.getFontSize()+indelta
	 if(size>0){
	     this.setImageToFontSize(size)
	   }
	}

	this.animer = function() {
	 var oldsize = Mot.getFontSize()
	 if(oldsize>this.maxSize){this.delta = - Math.abs(this.delta)}
	 if(oldsize<this.minSize ){this.delta = Math.abs(this.delta)}
	 this.agrandis(this.delta)
	}

	this.setImageToFontSize = function(size){
    	    Mot.setFontSize(size)
	    svghelper.debug(sizeToDistance(Mot.getFontSize()))
	    globals.montreur.adjustAllToFontSize()
	}

}


//ajax...
var distanceHistory = []
//var sizeHistory = []
var xmlHttp = new XMLHttpRequest()

xmlHttp.onreadystatechange = function(){
  if(xmlHttp.readyState == 4){
    var doc = xmlHttp.responseXML
    var distances = doc.getElementsByTagName("distance")
    var distance = distances[0].firstChild.data
    if(distance>0&&distance<300){distanceHistory.push(Math.round(distance*100)/100)}
    if(distanceHistory.length>2){distanceHistory.shift()}
    var size = distanceToSize(average(distanceHistory))
//    sizeHistory.push(size) 
//    if(sizeHistory.length>3){sizeHistory.shift()}
//    globals.agrandisseur.setImageToFontSize(average(sizeHistory))

    globals.agrandisseur.setImageToFontSize(size)
    svghelper.debug(distanceHistory)
  }
}
function distanceToSize(distance){ return distance*globals.maxSize/globals.maxDistance }
function sizeToDistance(size){ return parseInt(size*globals.maxDistance/globals.maxSize) }
function readSensor(){
//    xmlHttp.open("GET","sonar")
    xmlHttp.open("GET","webcam_sonar")
//    xmlHttp.open("GET","webcam")
    xmlHttp.send(null)
}

function average (an_array){
  var sum = 0
  for(var i in an_array){ sum += parseInt(an_array[i]) }
  return sum/an_array.length
}

function min (an_array){
  var min 
  for(var i in an_array){ 
   var val = parseInt(an_array[i]);
   if(!min|| min>val) { min = val}
  }
  return min
}
function min2avg (an_array){
  var min1 = min(an_array)
  var min2 
  for(var i in an_array){ 
   var val = parseInt(an_array[i]);
   if(!min2|| (min2>val && val>min1)) { 
     min2 = val
   }
  }
  return (min1+min2)/2
}

function array_contains(a, obj) {
    var i = a.length;
    while (i--) {
      if (a[i] === obj) {
        return true;
      }
    }
    return false;
  }


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

function Background(){

  Mot.setFontSize(24)

  //empreinte
  var empreinte = new Mot("L'EMPREINTE",0.51,0.488)
  empreinte.adjustToFontSize()
  empreinte.adjustToFontSize = null
  var nez = new Mot("DE TON NEZ",0.51,0.535)
  nez.adjustToFontSize()
  nez.adjustToFontSize = null

  this.empreinte = [empreinte, nez]
  this.coveredPixels = []

  //pixels
  this.pixels = []
  for(var x = 65+0*101.5; x<globals.totalWidth-20; x+=101.5){
    for(var y = 15+0*36; y<globals.totalHeight-15; y+=36){
      var pixel = new Mot("PIXEL",x/globals.totalWidth,y/globals.totalHeight)
      pixel.adjustToFontSize()
      pixel.adjustToFontSize = null
      this.pixels.push(pixel)
      if(empreinte.intersects(pixel) || nez.intersects(pixel)){
          this.coveredPixels.push(pixel)
      }
    }
  }

  this.showPixels = function(show){
      if(Mot.background.empreinte[0].isVisible()){
          for(var i in Mot.background.empreinte){
              Mot.background.empreinte[i].show(false)
          }
      }
      if(show != Mot.background.pixels[0].isVisible()){
          for(var i in Mot.background.pixels){
              Mot.background.pixels[i].show(show)
          }
      }
  }
  
  this.showEmpreinte = function(){
      if(!Mot.background.empreinte[0].isVisible()){
          for(var i in Mot.background.empreinte){
              Mot.background.empreinte[i].show(true)
          }
      }
      if(!Mot.background.pixels[0].isVisible()){
          for(var i in Mot.background.pixels){
              Mot.background.pixels[i].show(true)
          }
      }
      for(var i in Mot.background.coveredPixels){
          Mot.background.coveredPixels[i].show(false)
      }
  }
  
  this.contains = function(mot){
      if(array_contains(this.empreinte, mot)){
          return true
      }else if(array_contains(this.pixels, mot)){
          return true
      }
      return false
  }
}


//variable globales
var globals 
var svghelper
var back
function init(){

 document.rootElement.addEventListener("mousemove",Controls.mousemove, false)
 document.rootElement.addEventListener("mouseup",Controls.mouseup, false)
 document.rootElement.addEventListener("keydown",Controls.keydown, false)

 globals = new Object()
 
 //conneries de compatibilité
 if(typeof(top) != 'undefined'){
   globals.timer = top
 }else{
   globals.timer = window  
 }
 
 svghelper = new SvgHelper()
 globals.letterHeight =  svghelper.calculateHeight("A")
 
 globals.totalWidth = 800
 globals.totalHeight = 500
 if(window.innerWidth){
   globals.totalHeight = window.innerHeight
   globals.totalWidth = window.innerHeight *  1024 / 768
//   globals.totalWidth = window.screen.width
//   globals.totalHeight = window.screen.height
 }

 back  = svghelper.createBlackRect(0,0,globals.totalWidth,globals.totalHeight)
 

 globals.maxDistance = 275

 
 //textes affichés
 globals.status = svghelper.createText("",12,10,globals.totalHeight-10)
 globals.status.setAttributeNS(null,"id", "debug")
 globals.status.setAttributeNS(null,"text-anchor", "start")
 globals.status.setAttributeNS(null,"fill","white");
 globals.status.setAttributeNS(null,"visibility","visible");
 //debug desactivé
 //svghelper.debug = function (){}

 globals.instruction = svghelper.createText("Appuyer 'D' pour démarrer",30,20,30)
 globals.instruction.setAttributeNS(null,"fill","white");
 globals.instruction.setAttributeNS(null,"text-anchor", "left")
 globals.instruction.setAttributeNS(null,"visibility","visible");
 

  //création des mots
  var configuration = makeConfiguration()
  var image = configuration.premier_mot
  Mot.background = new Background()

  //initialisation de la taille
  globals.maxSize =  Math.floor(globals.totalWidth*Mot.getFontSize()/image.width())-10
  if(!globals.maxSize){globals.maxSize=265}
  var startSize = 100
  if(typeof(location)!='undefined'){  startSize = location.href.match(/\d+#?$/)}
  if(!startSize){startSize = globals.maxSize}
  if(!startSize){startSize = 100}
  Mot.setFontSize(startSize)
  
  globals.montreur = new Montreur(image)
  globals.montreur.configure(configuration)
  while(globals.montreur.adjustAllToFontSize()){}
  
  globals.agrandisseur = new Agrandisseur(globals.maxSize)


  svghelper.debug(sizeToDistance(startSize))
//	globals.image.show(false)


}


