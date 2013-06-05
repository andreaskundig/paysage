function makeConfiguration(){
var CONFIGURATION = new Object()
 var image = new Mot("IMAGE",0.5,0.5)
 var paysage = new Mot("PAYSAGE",0.5,0.5)
 image.addChild(paysage)
  var ciel = new Mot("CIEL",0.5,0.25)
  paysage.addChild(ciel)
   var nuage = new Mot("NUAGE",0.3159375,0.3104166666666666)
   ciel.addChild(nuage)
    var montagne = new Mot("MONTAGNE",0.18474609374999998,0.26507031249999996)
    nuage.addChild(montagne)
     var pic = new Mot("PIC",0.07462646484374999,0.2107249348958333)
     montagne.addChild(pic)
     var pic1 = new Mot("PIC",0.19083740234374996,0.21723535156249996)
     montagne.addChild(pic1)
    var nuage1 = new Mot("NUAGE",0.38494140624999995,0.37835156249999996)
    nuage.addChild(nuage1)
     var bout_de_ciel = new Mot("BOUT DE CIEL",0.36882324218749996,0.29356054687499994)
     nuage1.addChild(bout_de_ciel)
     var nuage2 = new Mot("NUAGE",0.36882324218749996,0.40163346354166657)
     nuage1.addChild(nuage2)
   var nuage3 = new Mot("NUAGE",0.22187499999999996,0.12341021756292374)
   ciel.addChild(nuage3)
    var cumulo_nimbus = new Mot("CUMULO-NIMBUS",0.21603759765624994,0.08208567329209038)
    nuage3.addChild(cumulo_nimbus)
    var cumulus = new Mot("CUMULUS",0.37717041015624997,0.17192942329209038)
    nuage3.addChild(cumulus)
   var avion = new Mot("AVION",0.6515625,0.10348958333333336)
   ciel.addChild(avion)
    var fuselage = new Mot("FUSELAGE",0.63186279296875,0.11945670572916668)
    avion.addChild(fuselage)
    var aile = new Mot("AILE",0.61330810546875,0.04393587239583335)
    avion.addChild(aile)
    var aile1 = new Mot("AILE",0.67092529296875,0.19367545572916667)
    avion.addChild(aile1)
   var arbre = new Mot("ARBRE",0.77912353515625,0.3093935546875)
   ciel.addChild(arbre)
    var for_t = new Mot("FORÊT",0.7876684570312499,0.3400657552083333)
    arbre.addChild(for_t)
     var arbre1 = new Mot("ARBRE",0.8230053710937499,0.23861425781249998)
     for_t.addChild(arbre1)
      var sapin = new Mot("SAPIN",0.88668701171875,0.1465084635416667)
      arbre1.addChild(sapin)
      var sapin1 = new Mot("SAPIN",0.81051513671875,0.2441647135416667)
      arbre1.addChild(sapin1)
     var arbre2 = new Mot("ARBRE",0.7790600585937499,0.37533300781249995)
     for_t.addChild(arbre2)
      var arbre3 = new Mot("ARBRE",0.6044116210937499,0.2766012369791666)
      arbre2.addChild(arbre3)
      var arbre4 = new Mot("ARBRE",0.6151538085937499,0.3729554036458333)
      arbre2.addChild(arbre4)
      var arbre5 = new Mot("ARBRE",0.8544116210937498,0.4029033203124999)
      arbre2.addChild(arbre5)
       var arbre6 = new Mot("ARBRE",0.8907495117187499,0.34074544270833323)
       arbre5.addChild(arbre6)
       var arbre7 = new Mot("ARBRE",0.8106713867187499,0.4410058593749999)
       arbre5.addChild(arbre7)
  var horizon = new Mot("HORIZON",0.4234375,0.4973958333333333)
  paysage.addChild(horizon)
   var horizon1 = new Mot("HORIZON",0.51953125,0.4886979166666667)
   horizon.addChild(horizon1)
   var village = new Mot("VILLAGE",0.1726171875,0.43773376172564316)
   horizon.addChild(village)
    var maison = new Mot("MAISON",0.19664062499999999,0.4874394908923098)
    village.addChild(maison)
     var villa = new Mot("VILLA",0.09736572265624999,0.49689619662147644)
     maison.addChild(villa)
     var taudis = new Mot("TAUDIS",0.29267822265625,0.48908369662147644)
     maison.addChild(taudis)
    var maison1 = new Mot("MAISON",0.13218749999999999,0.38457490755897644)
    village.addChild(maison1)
     var maison2 = new Mot("MAISON",0.11689697265624997,0.3237191132881431)
     maison1.addChild(maison2)
     var chalet = new Mot("CHALET",0.16377197265625,0.4096566132881431)
     maison1.addChild(chalet)
   var colline = new Mot("COLLINE",0.18378906250000004,0.5833928525819633)
   horizon.addChild(colline)
  var terre = new Mot("TERRE",0.5,0.75)
  paysage.addChild(terre)
   var pr_ = new Mot("PRÉ",0.8083984374999998,0.7372916666666667)
   terre.addChild(pr_)
    var herbe = new Mot("HERBE",0.8258789062499999,0.5351992053264606)
    pr_.addChild(herbe)
     var buisson = new Mot("BUISSON",0.7328906249999999,0.5233248563681272)
     herbe.addChild(buisson)
     var herbe1 = new Mot("HERBE",0.9135546874999998,0.5519706897014606)
     herbe.addChild(herbe1)
    var herbe2 = new Mot("HERBE",0.7506835937499999,0.8541156572164949)
    pr_.addChild(herbe2)
     var herbe3 = new Mot("HERBE",0.8854882812499999,0.9311651363831616)
     herbe2.addChild(herbe3)
     var pissenlit = new Mot("PISSENLIT",0.7409570312499999,0.8165818030498282)
     herbe2.addChild(pissenlit)
     var caillou = new Mot("CAILLOU",0.6452539062499999,0.9311651363831616)
     herbe2.addChild(caillou)
    var petit_lapin = new Mot("PETIT LAPIN",0.7002734374999999,0.6965403645833333)
    pr_.addChild(petit_lapin)
     var chemin = new Mot("CHEMIN",0.4977929687499999,0.5965065104166666)
     petit_lapin.addChild(chemin)
      var orni_re = new Mot("ORNIÈRE",0.5435937499999999,0.6352223307291666)
      chemin.addChild(orni_re)
      var chemin1 = new Mot("CHEMIN",0.3805078124999998,0.5740244140624999)
      chemin.addChild(chemin1)
     var herbe4 = new Mot("HERBE",0.8640039062499999,0.6655169270833333)
     petit_lapin.addChild(herbe4)
      var herbe5 = new Mot("HERBE",0.7189746093749999,0.6215882161458333)
      herbe4.addChild(herbe5)
      var fleur = new Mot("FLEUR",0.8918261718749999,0.6333069661458333)
      herbe4.addChild(fleur)
      var herbe6 = new Mot("HERBE",0.8303027343749999,0.7244527994791666)
      herbe4.addChild(herbe6)
     var petit_lapin1 = new Mot("PETIT LAPIN",0.5524804687499999,0.7097877604166666)
     petit_lapin.addChild(petit_lapin1)
   var etang = new Mot("ETANG",0.37845214843749997,0.8405581800873038)
   terre.addChild(etang)
    var eau = new Mot("EAU",0.24565185546874996,0.7097575566545927)
    etang.addChild(eau)
     var libellule = new Mot("LIBELLULE",0.13612792968749995,0.6736413457170927)
     eau.addChild(libellule)
     var eau1 = new Mot("EAU",0.3216748046875,0.7361413457170927)
     eau.addChild(eau1)
    var roseaux = new Mot("ROSEAUX",0.26488525390624995,0.9001027764414703)
    etang.addChild(roseaux)
     var roseau = new Mot("ROSEAU",0.13760009765624995,0.926371005608137)
     roseaux.addChild(roseau)
     var roseau1 = new Mot("ROSEAU",0.3856469726562499,0.9328814222748036)
     roseaux.addChild(roseau1)
     var roseau2 = new Mot("ROSEAU",0.16201416015624995,0.8222043389414703)
     roseaux.addChild(roseau2)
     var roseau3 = new Mot("ROSEAU",0.41689697265624986,0.8313189222748036)
     roseaux.addChild(roseau3)

CONFIGURATION.premier_mot = image

 var VISIBILITE = new Object()
 VISIBILITE[304]=[[image],
   [paysage,ciel,nuage,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,nuage3,cumulo_nimbus,cumulus,avion,fuselage,aile,aile1,arbre,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,pr_,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,eau,libellule,eau1,roseaux,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[234.5]=[[paysage],
   [image,ciel,nuage,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,nuage3,cumulo_nimbus,cumulus,avion,fuselage,aile,aile1,arbre,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,pr_,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,eau,libellule,eau1,roseaux,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[182.5]=[[ciel,horizon,terre],
   [image,paysage,nuage,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,nuage3,cumulo_nimbus,cumulus,avion,fuselage,aile,aile1,arbre,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,pr_,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,eau,libellule,eau1,roseaux,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[165.5]=[[ciel,horizon,pr_,etang],
   [image,paysage,nuage,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,nuage3,cumulo_nimbus,cumulus,avion,fuselage,aile,aile1,arbre,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,eau,libellule,eau1,roseaux,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[132]=[[nuage,nuage3,avion,arbre,horizon,pr_,etang],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,eau,libellule,eau1,roseaux,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[119]=[[nuage,nuage3,avion,arbre,horizon,pr_,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,for_t,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[116]=[[nuage,nuage3,avion,for_t,horizon,pr_,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,herbe,buisson,herbe1,herbe2,herbe3,pissenlit,caillou,petit_lapin,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[104]=[[nuage,nuage3,avion,for_t,horizon,herbe,herbe2,petit_lapin,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,arbre1,sapin,sapin1,arbre2,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,pr_,buisson,herbe1,herbe3,pissenlit,caillou,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[93.5]=[[nuage,nuage3,avion,arbre1,arbre2,horizon,herbe,herbe2,petit_lapin,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,sapin,sapin1,arbre3,arbre4,arbre5,arbre6,arbre7,horizon1,village,maison,villa,taudis,maison1,maison2,chalet,colline,terre,pr_,buisson,herbe1,herbe3,pissenlit,caillou,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[79.5]=[[nuage,nuage3,avion,arbre1,arbre2,horizon1,village,colline,herbe,herbe2,petit_lapin,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,sapin,sapin1,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe3,pissenlit,caillou,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[71]=[[nuage,nuage3,avion,sapin,sapin1,arbre2,horizon1,village,colline,herbe,herbe2,petit_lapin,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe3,pissenlit,caillou,chemin,orni_re,chemin1,herbe4,herbe5,fleur,herbe6,petit_lapin1,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[70]=[[nuage,nuage3,avion,sapin,sapin1,arbre2,horizon1,village,colline,herbe,herbe2,chemin,herbe4,petit_lapin1,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe3,pissenlit,caillou,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[66]=[[nuage,nuage3,avion,sapin,sapin1,arbre2,horizon1,village,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseaux],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre3,arbre4,arbre5,arbre6,arbre7,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseau,roseau1,roseau2,roseau3]]
 VISIBILITE[65]=[[nuage,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre5,horizon1,village,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre6,arbre7,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseaux]]
 VISIBILITE[60]=[[nuage,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,village,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,montagne,pic,pic1,nuage1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,maison,villa,taudis,maison1,maison2,chalet,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseaux]]
 VISIBILITE[57.5]=[[montagne,nuage1,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,maison,maison1,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,pic,pic1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,villa,taudis,maison2,chalet,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseaux]]
 VISIBILITE[57]=[[pic,pic1,nuage1,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,maison,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,villa,taudis,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseaux]]
 VISIBILITE[56]=[[pic,pic1,nuage1,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe4,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe5,fleur,herbe6,etang,libellule,eau1,roseaux]]
 VISIBILITE[55]=[[pic,pic1,nuage1,nuage3,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,libellule,eau1,roseaux]]
 VISIBILITE[54.5]=[[pic,pic1,nuage1,cumulo_nimbus,cumulus,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,eau,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,nuage3,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,libellule,eau1,roseaux]]
 VISIBILITE[53.5]=[[pic,pic1,nuage1,cumulo_nimbus,cumulus,avion,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,libellule,eau1,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,nuage3,fuselage,aile,aile1,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,eau,roseaux]]
 VISIBILITE[50.5]=[[pic,pic1,nuage1,cumulo_nimbus,cumulus,fuselage,aile,aile1,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,libellule,eau1,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,bout_de_ciel,nuage2,nuage3,avion,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,eau,roseaux]]
 VISIBILITE[49]=[[pic,pic1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,herbe,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,libellule,eau1,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,nuage1,nuage3,avion,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,buisson,herbe1,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,eau,roseaux]]
 VISIBILITE[48.5]=[[pic,pic1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,buisson,herbe1,herbe3,pissenlit,caillou,chemin,herbe5,fleur,herbe6,petit_lapin1,libellule,eau1,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,nuage1,nuage3,avion,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,herbe,herbe2,petit_lapin,orni_re,chemin1,herbe4,etang,eau,roseaux]]
 VISIBILITE[44.5]=[[pic,pic1,bout_de_ciel,nuage2,cumulo_nimbus,cumulus,fuselage,aile,aile1,sapin,sapin1,arbre3,arbre4,arbre6,arbre7,horizon1,villa,taudis,maison2,chalet,colline,buisson,herbe1,herbe3,pissenlit,caillou,orni_re,chemin1,herbe5,fleur,herbe6,petit_lapin1,libellule,eau1,roseau,roseau1,roseau2,roseau3],
   [image,paysage,ciel,nuage,montagne,nuage1,nuage3,avion,arbre,for_t,arbre1,arbre2,arbre5,horizon,village,maison,maison1,terre,pr_,herbe,herbe2,petit_lapin,chemin,herbe4,etang,eau,roseaux]]
CONFIGURATION.visibilite = VISIBILITE
return CONFIGURATION
}
