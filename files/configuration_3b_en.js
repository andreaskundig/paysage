function makeConfiguration(){
var CONFIGURATION = new Object()
 var image = new Mot("IMAGE",0.5,0.5)
 var landscape = new Mot("LANDSCAPE",0.5,0.5)
 image.addChild(landscape)
  var heaven = new Mot("HEAVEN",0.499267578125,0.271484375)
  landscape.addChild(heaven)
   var cloud = new Mot("CLOUD",0.3159375,0.3104166666666666)
   heaven.addChild(cloud)
    var mountain = new Mot("MOUNTAIN",0.18474609374999998,0.26507031249999996)
    cloud.addChild(mountain)
     var peak = new Mot("PEAK",0.07462646484374999,0.2107249348958333)
     mountain.addChild(peak)
     var peak1 = new Mot("PEAK",0.19083740234374996,0.21723535156249996)
     mountain.addChild(peak1)
    var cloud1 = new Mot("CLOUD",0.38494140624999995,0.37835156249999996)
    cloud.addChild(cloud1)
     var a_bit_of_heaven = new Mot("A BIT OF HEAVEN",0.36882324218749996,0.29356054687499994)
     cloud1.addChild(a_bit_of_heaven)
     var cloud2 = new Mot("CLOUD",0.36882324218749996,0.40163346354166657)
     cloud1.addChild(cloud2)
   var cloud3 = new Mot("CLOUD",0.22187499999999996,0.12341021756292374)
   heaven.addChild(cloud3)
    var cumulo_nimbus = new Mot("CUMULO-NIMBUS",0.21603759765624994,0.08208567329209038)
    cloud3.addChild(cumulo_nimbus)
    var cumulus = new Mot("CUMULUS",0.37717041015624997,0.17192942329209038)
    cloud3.addChild(cumulus)
   var plane = new Mot("PLANE",0.6515625,0.10348958333333336)
   heaven.addChild(plane)
    var fuselage = new Mot("FUSELAGE",0.63186279296875,0.11945670572916668)
    plane.addChild(fuselage)
    var wing = new Mot("WING",0.61330810546875,0.04393587239583335)
    plane.addChild(wing)
    var wing1 = new Mot("WING",0.67092529296875,0.19367545572916667)
    plane.addChild(wing1)
   var tree = new Mot("TREE",0.77912353515625,0.3093935546875)
   heaven.addChild(tree)
    var forest = new Mot("FOREST",0.7876684570312499,0.3400657552083333)
    tree.addChild(forest)
     var tree1 = new Mot("TREE",0.8230053710937499,0.23861425781249998)
     forest.addChild(tree1)
      var pine_tree = new Mot("PINE TREE",0.88668701171875,0.1465084635416667)
      tree1.addChild(pine_tree)
      var pine_tree1 = new Mot("PINE TREE",0.81051513671875,0.2441647135416667)
      tree1.addChild(pine_tree1)
     var tree2 = new Mot("TREE",0.7790600585937499,0.37533300781249995)
     forest.addChild(tree2)
      var tree3 = new Mot("TREE",0.6044116210937499,0.2766012369791666)
      tree2.addChild(tree3)
      var tree4 = new Mot("TREE",0.6151538085937499,0.3729554036458333)
      tree2.addChild(tree4)
      var tree5 = new Mot("TREE",0.8544116210937498,0.4029033203124999)
      tree2.addChild(tree5)
       var tree6 = new Mot("TREE",0.8907495117187499,0.34074544270833323)
       tree5.addChild(tree6)
       var tree7 = new Mot("TREE",0.8106713867187499,0.4410058593749999)
       tree5.addChild(tree7)
  var horizon = new Mot("HORIZON",0.4234375,0.4973958333333333)
  landscape.addChild(horizon)
   var horizon1 = new Mot("HORIZON",0.514404296875,0.4886979166666667)
   horizon.addChild(horizon1)
   var village = new Mot("VILLAGE",0.163828125,0.43773376172564316)
   horizon.addChild(village)
    var house = new Mot("HOUSE",0.19664062499999999,0.4874394908923098)
    village.addChild(house)
     var villa = new Mot("VILLA",0.09736572265624999,0.49689619662147644)
     house.addChild(villa)
     var hut = new Mot("HUT",0.29267822265625,0.48908369662147644)
     house.addChild(hut)
    var house1 = new Mot("HOUSE",0.13218749999999999,0.38457490755897644)
    village.addChild(house1)
     var house2 = new Mot("HOUSE",0.11689697265624996,0.3237191132881431)
     house1.addChild(house2)
     var chalet = new Mot("CHALET",0.16377197265625,0.4096566132881431)
     house1.addChild(chalet)
   var hill = new Mot("HILL",0.18378906250000004,0.5833928525819633)
   horizon.addChild(hill)
  var ground = new Mot("GROUND",0.500048828125,0.72265625)
  landscape.addChild(ground)
   var meadow = new Mot("MEADOW",0.7139160156249998,0.6972526041666667)
   ground.addChild(meadow)
    var grass = new Mot("GRASS",0.82587890625,0.5351992053264606)
    meadow.addChild(grass)
     var bush = new Mot("BUSH",0.7328906249999999,0.5233248563681272)
     grass.addChild(bush)
     var grass1 = new Mot("GRASS",0.9135546874999998,0.5519706897014606)
     grass.addChild(grass1)
    var grass2 = new Mot("GRASS",0.7506835937499999,0.8541156572164949)
    meadow.addChild(grass2)
     var grass3 = new Mot("GRASS",0.88548828125,0.9311651363831616)
     grass2.addChild(grass3)
     var dandelion = new Mot("DANDELION",0.7409570312499999,0.8165818030498282)
     grass2.addChild(dandelion)
     var stone = new Mot("STONE",0.6452539062499999,0.9311651363831616)
     grass2.addChild(stone)
    var little_bunny = new Mot("LITTLE BUNNY",0.7002734374999999,0.6965403645833333)
    meadow.addChild(little_bunny)
     var path = new Mot("PATH",0.4977929687499999,0.5965065104166666)
     little_bunny.addChild(path)
      var hole = new Mot("HOLE",0.5435937499999999,0.6352223307291666)
      path.addChild(hole)
      var path1 = new Mot("PATH",0.3922265624999998,0.5837900390624999)
      path.addChild(path1)
     var grass4 = new Mot("GRASS",0.86400390625,0.6655169270833333)
     little_bunny.addChild(grass4)
      var grass5 = new Mot("GRASS",0.7189746093749999,0.6215882161458333)
      grass4.addChild(grass5)
      var flower = new Mot("FLOWER",0.8918261718749999,0.6333069661458333)
      grass4.addChild(flower)
      var grass6 = new Mot("GRASS",0.8303027343749999,0.7244527994791666)
      grass4.addChild(grass6)
     var little_bunny1 = new Mot("LITTLE BUNNY",0.5524804687499999,0.7097877604166666)
     little_bunny.addChild(little_bunny1)
   var pond = new Mot("POND",0.37552246093749997,0.8727847425873038)
   ground.addChild(pond)
    var water = new Mot("WATER",0.22441162109374996,0.7087809941545927)
    pond.addChild(water)
     var dragonfly = new Mot("DRAGONFLY",0.13612792968749995,0.6736413457170927)
     water.addChild(dragonfly)
     var water1 = new Mot("WATER",0.3216748046875,0.7361413457170927)
     water.addChild(water1)
    var reeds = new Mot("REEDS",0.28099853515624995,0.8659230889414703)
    pond.addChild(reeds)
     var reed = new Mot("REED",0.13760009765624995,0.926371005608137)
     reeds.addChild(reed)
     var reed1 = new Mot("REED",0.3856469726562499,0.9328814222748036)
     reeds.addChild(reed1)
     var reed2 = new Mot("REED",0.16201416015624995,0.8222043389414703)
     reeds.addChild(reed2)
     var reed3 = new Mot("REED",0.41689697265624986,0.8313189222748036)
     reeds.addChild(reed3)

CONFIGURATION.premier_mot = image

 var VISIBILITE = new Object()
 VISIBILITE[285]=[[image],
   [landscape,heaven,cloud,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cloud3,cumulo_nimbus,cumulus,plane,fuselage,wing,wing1,tree,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,meadow,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,water,dragonfly,water1,reeds,reed,reed1,reed2,reed3]]
 VISIBILITE[174.5]=[[landscape],
   [image,heaven,cloud,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cloud3,cumulo_nimbus,cumulus,plane,fuselage,wing,wing1,tree,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,meadow,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,water,dragonfly,water1,reeds,reed,reed1,reed2,reed3]]
 VISIBILITE[166]=[[heaven,horizon,ground],
   [image,landscape,cloud,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cloud3,cumulo_nimbus,cumulus,plane,fuselage,wing,wing1,tree,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,meadow,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,water,dragonfly,water1,reeds,reed,reed1,reed2,reed3]]
 VISIBILITE[124.5]=[[cloud,cloud3,plane,tree,horizon,ground],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,meadow,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,water,dragonfly,water1,reeds,reed,reed1,reed2,reed3]]
 VISIBILITE[124]=[[cloud,cloud3,plane,tree,horizon,meadow,pond],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,water,dragonfly,water1,reeds,reed,reed1,reed2,reed3]]
 VISIBILITE[115.5]=[[cloud,cloud3,plane,tree,horizon,meadow,water,reeds],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,forest,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reed,reed1,reed2,reed3]]
 VISIBILITE[107]=[[cloud,cloud3,plane,forest,horizon,meadow,water,reeds],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,tree1,pine_tree,pine_tree1,tree2,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reed,reed1,reed2,reed3]]
 VISIBILITE[96.5]=[[cloud,cloud3,plane,tree1,tree2,horizon,meadow,water,reeds],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,grass,bush,grass1,grass2,grass3,dandelion,stone,little_bunny,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reed,reed1,reed2,reed3]]
 VISIBILITE[85.5]=[[cloud,cloud3,plane,tree1,tree2,horizon,grass,grass2,little_bunny,water,reeds],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,meadow,bush,grass1,grass3,dandelion,stone,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reed,reed1,reed2,reed3]]
 VISIBILITE[74.5]=[[cloud,cloud3,plane,tree1,tree2,horizon,grass,grass2,little_bunny,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree3,tree4,tree5,tree6,tree7,horizon1,village,house,villa,hut,house1,house2,chalet,hill,ground,meadow,bush,grass1,grass3,dandelion,stone,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reeds]]
 VISIBILITE[74]=[[cloud,cloud3,plane,tree1,tree2,horizon1,village,hill,grass,grass2,little_bunny,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree3,tree4,tree5,tree6,tree7,horizon,house,villa,hut,house1,house2,chalet,ground,meadow,bush,grass1,grass3,dandelion,stone,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reeds]]
 VISIBILITE[70.5]=[[cloud,cloud3,plane,tree1,tree3,tree4,tree5,horizon1,village,hill,grass,grass2,little_bunny,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree6,tree7,horizon,house,villa,hut,house1,house2,chalet,ground,meadow,bush,grass1,grass3,dandelion,stone,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reeds]]
 VISIBILITE[69]=[[cloud,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,village,hill,grass,grass2,little_bunny,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,house,villa,hut,house1,house2,chalet,ground,meadow,bush,grass1,grass3,dandelion,stone,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reeds]]
 VISIBILITE[63.5]=[[cloud,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,village,hill,grass,grass3,dandelion,stone,little_bunny,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,house,villa,hut,house1,house2,chalet,ground,meadow,bush,grass1,grass2,path,hole,path1,grass4,grass5,flower,grass6,little_bunny1,pond,dragonfly,water1,reeds]]
 VISIBILITE[59.5]=[[cloud,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,village,hill,grass,grass3,dandelion,stone,path,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,mountain,peak,peak1,cloud1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,house,villa,hut,house1,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,hole,path1,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[56.5]=[[mountain,cloud1,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,house,house1,hill,grass,grass3,dandelion,stone,path,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,villa,hut,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,hole,path1,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[56]=[[mountain,cloud1,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,grass,grass3,dandelion,stone,path,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,hole,path1,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[54]=[[mountain,cloud1,cloud3,plane,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,grass,grass3,dandelion,stone,hole,path1,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,path,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[52]=[[mountain,cloud1,cloud3,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,grass,grass3,dandelion,stone,hole,path1,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,path,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[51]=[[mountain,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,grass,grass3,dandelion,stone,hole,path1,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,bush,grass1,grass2,little_bunny,path,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[47.5]=[[mountain,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass4,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,grass,grass2,little_bunny,path,grass5,flower,grass6,pond,dragonfly,water1,reeds]]
 VISIBILITE[44.5]=[[mountain,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,water,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,dragonfly,water1,reeds]]
 VISIBILITE[43]=[[mountain,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house1,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,dragonfly,water1,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house2,chalet,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,water,reeds]]
 VISIBILITE[42.5]=[[mountain,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house2,chalet,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,dragonfly,water1,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,peak,peak1,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house1,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,water,reeds]]
 VISIBILITE[41]=[[peak,peak1,cloud1,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house2,chalet,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,dragonfly,water1,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,mountain,a_bit_of_heaven,cloud2,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house1,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,water,reeds]]
 VISIBILITE[40.5]=[[peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house2,chalet,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,dragonfly,water1,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,mountain,cloud1,cloud3,plane,tree,forest,pine_tree,pine_tree1,tree2,tree5,horizon,village,house,house1,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,water,reeds]]
 VISIBILITE[36.5]=[[peak,peak1,a_bit_of_heaven,cloud2,cumulo_nimbus,cumulus,fuselage,wing,wing1,pine_tree,pine_tree1,tree3,tree4,tree6,tree7,horizon1,villa,hut,house2,chalet,hill,bush,grass1,grass3,dandelion,stone,hole,path1,grass5,flower,grass6,little_bunny1,dragonfly,water1,reed,reed1,reed2,reed3],
   [image,landscape,heaven,cloud,mountain,cloud1,cloud3,plane,tree,forest,tree1,tree2,tree5,horizon,village,house,house1,ground,meadow,grass,grass2,little_bunny,path,grass4,pond,water,reeds]]
CONFIGURATION.visibilite = VISIBILITE
return CONFIGURATION
}
