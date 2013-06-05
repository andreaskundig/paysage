function makeConfiguration(){
var CONFIGURATION = new Object()
 var image = new Mot("IMAGE",0.5,0.5)
 var paysage = new Mot("PAYSAGE",0.5,0.5)
 image.addChild(paysage)
  var ciel = new Mot("CIEL",0.5,0.24348958333333337)
  paysage.addChild(ciel)
   var nuage = new Mot("NUAGE",0.6447265625,0.13903521756292372)
   ciel.addChild(nuage)
   var avion = new Mot("AVION",0.25117187500000004,0.1711979166666667)
   ciel.addChild(avion)
    var fuselage = new Mot("FUSELAGE",0.27444091796875003,0.17805045572916667)
    avion.addChild(fuselage)
    var aile = new Mot("AILE",0.24709716796875006,0.12206087239583337)
    avion.addChild(aile)
    var aile1 = new Mot("AILE",0.32424560546875003,0.2340400390625)
    avion.addChild(aile1)
   var arbre = new Mot("ARBRE",0.7791235351562499,0.3028831380208334)
   ciel.addChild(arbre)
    var for_t = new Mot("FORÊT",0.83161376953125,0.3361595052083333)
    arbre.addChild(for_t)
     var arbre1 = new Mot("ARBRE",0.8796459960937499,0.29590592447916664)
     for_t.addChild(arbre1)
     var arbre2 = new Mot("ARBRE",0.6159741210937499,0.3805413411458333)
     for_t.addChild(arbre2)
  var horizon = new Mot("HORIZON",0.49375,0.48958333333333326)
  paysage.addChild(horizon)
   var horizon1 = new Mot("HORIZON",0.5478515625,0.4873958333333333)
   horizon.addChild(horizon1)
   var village = new Mot("VILLAGE",0.206796875,0.4012754283923098)
   horizon.addChild(village)
    var maison = new Mot("MAISON",0.33547119140625,0.3327026744860598)
    village.addChild(maison)
    var maison1 = new Mot("MAISON",0.33547119140625,0.40822350781939315)
    village.addChild(maison1)
    var clocher = new Mot("CLOCHER",0.16292480468749998,0.24996260287147642)
    village.addChild(clocher)
   var colline = new Mot("COLLINE",0.20625000000000007,0.5130803525819633)
   horizon.addChild(colline)
    var verger = new Mot("VERGER",0.13700805664062504,0.5226325986757133)
    colline.addChild(verger)
    var route = new Mot("ROUTE",0.329091796875,0.5426415504986299)
    colline.addChild(route)
  var terre = new Mot("TERRE",0.5009765625,0.7369791666666666)
  paysage.addChild(terre)
   var pr_ = new Mot("PRÉ",0.8083984375,0.7372916666666667)
   terre.addChild(pr_)
    var herbe = new Mot("HERBE",0.80634765625,0.6198346219931272)
    pr_.addChild(herbe)
     var herbe1 = new Mot("HERBE",0.8520312499999999,0.5493665230347938)
     herbe.addChild(herbe1)
    var petit_lapin = new Mot("PETIT LAPIN",0.7920703124999999,0.7121653645833333)
    pr_.addChild(petit_lapin)
   var etang = new Mot("ETANG",0.42337402343749997,0.830141513420637)
   terre.addChild(etang)
    var eau = new Mot("EAU",0.37944091796874996,0.746215889987926)
    etang.addChild(eau)
    var roseaux = new Mot("ROSEAUX",0.40843994140624995,0.8310923597748037)
    etang.addChild(roseaux)
     var roseau = new Mot("ROSEAU",0.24404541015624992,0.902933505608137)
     roseaux.addChild(roseau)

CONFIGURATION.premier_mot = image

 var VISIBILITE = new Object()
 VISIBILITE[199]=[[image],
   [paysage,ciel,nuage,avion,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,horizon,horizon1,village,maison,maison1,clocher,colline,verger,route,terre,pr_,herbe,herbe1,petit_lapin,etang,eau,roseaux,roseau]]
 VISIBILITE[155.5]=[[paysage],
   [image,ciel,nuage,avion,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,horizon,horizon1,village,maison,maison1,clocher,colline,verger,route,terre,pr_,herbe,herbe1,petit_lapin,etang,eau,roseaux,roseau]]
 VISIBILITE[121]=[[ciel,horizon,terre],
   [image,paysage,nuage,avion,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,horizon1,village,maison,maison1,clocher,colline,verger,route,pr_,herbe,herbe1,petit_lapin,etang,eau,roseaux,roseau]]
 VISIBILITE[98.5]=[[ciel,horizon,pr_,etang],
   [image,paysage,nuage,avion,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,horizon1,village,maison,maison1,clocher,colline,verger,route,terre,herbe,herbe1,petit_lapin,eau,roseaux,roseau]]
 VISIBILITE[80]=[[nuage,avion,arbre,horizon,pr_,etang],
   [image,paysage,ciel,fuselage,aile,aile1,for_t,arbre1,arbre2,horizon1,village,maison,maison1,clocher,colline,verger,route,terre,herbe,herbe1,petit_lapin,eau,roseaux,roseau]]
 VISIBILITE[69.5]=[[nuage,avion,for_t,horizon,pr_,etang],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,arbre1,arbre2,horizon1,village,maison,maison1,clocher,colline,verger,route,terre,herbe,herbe1,petit_lapin,eau,roseaux,roseau]]
 VISIBILITE[54]=[[nuage,avion,for_t,horizon1,village,colline,pr_,etang],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,arbre1,arbre2,horizon,maison,maison1,clocher,verger,route,terre,herbe,herbe1,petit_lapin,eau,roseaux,roseau]]
 VISIBILITE[47]=[[nuage,avion,arbre1,arbre2,horizon1,village,colline,pr_,etang],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,maison,maison1,clocher,verger,route,terre,herbe,herbe1,petit_lapin,eau,roseaux,roseau]]
 VISIBILITE[45]=[[nuage,avion,arbre1,arbre2,horizon1,village,colline,herbe,petit_lapin,etang],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,maison,maison1,clocher,verger,route,terre,pr_,herbe1,eau,roseaux,roseau]]
 VISIBILITE[44.5]=[[nuage,avion,arbre1,arbre2,horizon1,village,colline,herbe1,petit_lapin,etang],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,maison,maison1,clocher,verger,route,terre,pr_,herbe,eau,roseaux,roseau]]
 VISIBILITE[41]=[[nuage,avion,arbre1,arbre2,horizon1,village,colline,herbe1,petit_lapin,eau,roseaux],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,maison,maison1,clocher,verger,route,terre,pr_,herbe,etang,roseau]]
 VISIBILITE[40.5]=[[nuage,avion,arbre1,arbre2,horizon1,village,colline,herbe1,petit_lapin,eau,roseau],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,maison,maison1,clocher,verger,route,terre,pr_,herbe,etang,roseaux]]
 VISIBILITE[36.5]=[[nuage,avion,arbre1,arbre2,horizon1,maison,maison1,clocher,colline,herbe1,petit_lapin,eau,roseau],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,village,verger,route,terre,pr_,herbe,etang,roseaux]]
 VISIBILITE[36]=[[nuage,avion,arbre1,arbre2,horizon1,maison,maison1,clocher,verger,route,herbe1,petit_lapin,eau,roseau],
   [image,paysage,ciel,fuselage,aile,aile1,arbre,for_t,horizon,village,colline,terre,pr_,herbe,etang,roseaux]]
 VISIBILITE[27]=[[nuage,fuselage,aile,aile1,arbre1,arbre2,horizon1,maison,maison1,clocher,verger,route,herbe1,petit_lapin,eau,roseau],
   [image,paysage,ciel,avion,arbre,for_t,horizon,village,colline,terre,pr_,herbe,etang,roseaux]]
CONFIGURATION.visibilite = VISIBILITE
return CONFIGURATION
}
