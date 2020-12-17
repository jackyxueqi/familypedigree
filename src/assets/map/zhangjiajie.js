(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var cityMap =
    {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":430802,"name":"永定区","center":[110.484559,29.125961],"centroid":[110.461514,29.118979],"childrenNum":0,"level":"district","parent":{"adcode":430800},"subFeatureIndex":0,"acroutes":[100000,430000,430800]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.852575,29.094229],[110.852149,29.092614],[110.853998,29.091072],[110.852166,29.086804],[110.854129,29.084216],[110.855062,29.080674],[110.857729,29.07826],[110.861002,29.073046],[110.86092,29.068539],[110.861885,29.064647],[110.864111,29.063747],[110.865092,29.066575],[110.868447,29.065363],[110.870247,29.061278],[110.87149,29.064748],[110.86992,29.0673],[110.873209,29.066428],[110.874894,29.061544],[110.880376,29.055815],[110.882486,29.054705],[110.886823,29.055476],[110.890963,29.052887],[110.891715,29.050748],[110.895659,29.049673],[110.898571,29.051243],[110.906851,29.049692],[110.909715,29.048719],[110.91194,29.045321],[110.910418,29.040721],[110.914673,29.035726],[110.908946,29.035974],[110.903824,29.03479],[110.902859,29.025598],[110.903104,29.021318],[110.905051,29.01747],[110.915131,29.008534],[110.912791,29.00486],[110.909126,29.003068],[110.905117,28.995702],[110.90042,28.995793],[110.898473,29.001094],[110.897262,29.001415],[110.893744,28.997217],[110.894104,28.994618],[110.889163,28.992459],[110.878658,28.994581],[110.868774,28.998384],[110.860707,28.998944],[110.855716,28.99809],[110.847322,28.995913],[110.840466,28.99256],[110.839353,28.987746],[110.842119,28.981288],[110.846439,28.973883],[110.850268,28.968553],[110.851904,28.956599],[110.851838,28.952004],[110.849138,28.946536],[110.843608,28.943393],[110.836801,28.941876],[110.830321,28.944486],[110.82281,28.948264],[110.811438,28.955294],[110.805973,28.957665],[110.801538,28.9584],[110.798626,28.955229],[110.798069,28.935727],[110.795009,28.923374],[110.788857,28.913804],[110.782508,28.90929],[110.775668,28.906164],[110.769908,28.905079],[110.763641,28.905842],[110.758716,28.908646],[110.746836,28.917729],[110.739342,28.924458],[110.734924,28.926572],[110.730473,28.92615],[110.723535,28.917729],[110.720606,28.915229],[110.716925,28.913427],[110.709888,28.91464],[110.7039,28.917904],[110.699514,28.922077],[110.69274,28.92489],[110.690891,28.92398],[110.692118,28.918005],[110.691758,28.912269],[110.690662,28.90815],[110.687766,28.906559],[110.684346,28.905907],[110.678586,28.906182],[110.673628,28.908288],[110.670519,28.910844],[110.670339,28.91612],[110.66651,28.923493],[110.66291,28.928346],[110.656987,28.935047],[110.644289,28.945029],[110.63596,28.949688],[110.63002,28.955478],[110.623835,28.962415],[110.620726,28.9652],[110.614737,28.966624],[110.606605,28.965558],[110.598243,28.967249],[110.593318,28.969362],[110.590781,28.974664],[110.585889,28.980452],[110.579,28.992918],[110.572569,29.000561],[110.568904,29.000138],[110.563373,28.997217],[110.558399,28.995435],[110.549448,28.990024],[110.54179,28.982308],[110.545832,28.973772],[110.553539,28.963353],[110.554014,28.959447],[110.553441,28.95556],[110.551068,28.953281],[110.54503,28.950598],[110.538747,28.948843],[110.533232,28.94615],[110.521926,28.938476],[110.520584,28.935507],[110.521075,28.932749],[110.524642,28.926508],[110.528733,28.920726],[110.539009,28.908435],[110.541038,28.904748],[110.543034,28.897604],[110.543967,28.889329],[110.541021,28.882708],[110.537061,28.878625],[110.530762,28.874109],[110.52438,28.886119],[110.518457,28.891931],[110.507608,28.898487],[110.501946,28.903599],[110.493061,28.909841],[110.488283,28.91179],[110.483898,28.910798],[110.481263,28.90724],[110.480003,28.904233],[110.476616,28.900721],[110.476567,28.89879],[110.482638,28.894809],[110.483554,28.89182],[110.481771,28.889439],[110.474783,28.888694],[110.472133,28.887489],[110.470595,28.883048],[110.468042,28.880234],[110.464393,28.880124],[110.450926,28.882818],[110.451008,28.8884],[110.449159,28.889825],[110.442123,28.889752],[110.432828,28.890772],[110.430816,28.892455],[110.423109,28.900611],[110.418658,28.901788],[110.411704,28.898091],[110.4002,28.895747],[110.394375,28.891839],[110.39089,28.88726],[110.390415,28.881126],[110.384672,28.885448],[110.374919,28.887535],[110.364971,28.89023],[110.358753,28.891232],[110.358916,28.897696],[110.364791,28.907938],[110.365478,28.918437],[110.363874,28.923852],[110.361093,28.927455],[110.355546,28.931058],[110.337137,28.939505],[110.331001,28.941168],[110.322721,28.94035],[110.317714,28.937998],[110.314572,28.938328],[110.31238,28.93979],[110.308125,28.944312],[110.307127,28.947335],[110.306505,28.958271],[110.309271,28.960798],[110.317338,28.965255],[110.319187,28.967276],[110.318974,28.973148],[110.325503,28.975784],[110.331934,28.981343],[110.332523,28.983732],[110.327974,28.983851],[110.332523,28.989253],[110.335844,28.994755],[110.336843,28.999798],[110.346219,29.011133],[110.347397,29.01522],[110.347364,29.019417],[110.341621,29.027269],[110.341293,29.030814],[110.344255,29.03636],[110.340344,29.041327],[110.337497,29.041309],[110.332555,29.038646],[110.326845,29.041364],[110.323098,29.041731],[110.314,29.035882],[110.309663,29.035983],[110.305294,29.038582],[110.302725,29.042512],[110.303036,29.044431],[110.299878,29.047323],[110.299306,29.050096],[110.299616,29.057137],[110.303413,29.077131],[110.304951,29.079691],[110.30482,29.087823],[110.304198,29.091347],[110.299453,29.090641],[110.292286,29.086098],[110.288931,29.086548],[110.284415,29.085446],[110.279981,29.083133],[110.276741,29.080242],[110.273501,29.074423],[110.269067,29.071559],[110.263699,29.069714],[110.260541,29.07009],[110.256058,29.073881],[110.249627,29.076919],[110.248547,29.079921],[110.250511,29.09366],[110.253113,29.098524],[110.258021,29.100552],[110.259641,29.10202],[110.264059,29.110159],[110.263879,29.112885],[110.261638,29.11961],[110.259985,29.121115],[110.256091,29.122234],[110.241626,29.122647],[110.239008,29.122243],[110.236766,29.124867],[110.231153,29.126436],[110.226572,29.12695],[110.221254,29.125739],[110.217032,29.12706],[110.216721,29.129124],[110.220108,29.134096],[110.22397,29.136436],[110.223904,29.139096],[110.221483,29.139133],[110.21749,29.136014],[110.215903,29.136078],[110.214856,29.141086],[110.211828,29.144003],[110.205545,29.151965],[110.205496,29.155212],[110.203925,29.161045],[110.198509,29.164347],[110.194434,29.163136],[110.18964,29.162815],[110.185255,29.154973],[110.183668,29.153708],[110.17907,29.153965],[110.171706,29.160926],[110.16485,29.165502],[110.15819,29.16519],[110.155818,29.16365],[110.151563,29.159156],[110.14906,29.154955],[110.147014,29.153405],[110.140829,29.152259],[110.138931,29.149589],[110.140404,29.145407],[110.137262,29.141059],[110.13412,29.137968],[110.128409,29.136399],[110.125546,29.137224],[110.119148,29.141242],[110.112128,29.142829],[110.107694,29.141738],[110.10501,29.142251],[110.102736,29.140123],[110.099856,29.1396],[110.095667,29.141536],[110.093032,29.143765],[110.08904,29.15125],[110.090594,29.15911],[110.090529,29.167309],[110.087763,29.177048],[110.084818,29.184447],[110.079844,29.189013],[110.076882,29.20085],[110.071957,29.205241],[110.070059,29.211887],[110.070909,29.219559],[110.073168,29.225627],[110.080613,29.232583],[110.081922,29.236222],[110.07968,29.243443],[110.08004,29.247053],[110.082854,29.251195],[110.087289,29.251937],[110.090316,29.250462],[110.096174,29.250316],[110.103537,29.253422],[110.111424,29.271966],[110.113535,29.279029],[110.113486,29.284177],[110.11257,29.289701],[110.117184,29.291038],[110.123533,29.295004],[110.123386,29.298613],[110.120899,29.300967],[110.121324,29.302688],[110.120342,29.3105],[110.121717,29.315995],[110.125677,29.31964],[110.134104,29.325546],[110.146229,29.333255],[110.157568,29.342575],[110.174913,29.348865],[110.185124,29.34924],[110.191391,29.347116],[110.197134,29.345697],[110.20543,29.338053],[110.208261,29.331836],[110.211861,29.32561],[110.214987,29.323751],[110.217866,29.323266],[110.221548,29.324841],[110.235833,29.338968],[110.238238,29.341925],[110.244309,29.347391],[110.248825,29.352407],[110.253849,29.356957],[110.258332,29.358989],[110.26226,29.35736],[110.267758,29.35595],[110.272503,29.35844],[110.275432,29.361405],[110.279932,29.364591],[110.286264,29.366385],[110.293088,29.365204],[110.297931,29.365442],[110.305605,29.369423],[110.30824,29.371885],[110.312134,29.376901],[110.31539,29.372819],[110.318859,29.366842],[110.319678,29.358669],[110.318925,29.355666],[110.314752,29.35313],[110.308469,29.350247],[110.307733,29.347409],[110.309467,29.345423],[110.313869,29.343445],[110.316536,29.343637],[110.32205,29.34534],[110.327957,29.346549],[110.33195,29.349414],[110.334208,29.353103],[110.334372,29.35811],[110.335697,29.360453],[110.340459,29.360151],[110.34792,29.356865],[110.357738,29.351995],[110.372792,29.351062],[110.380925,29.345917],[110.390677,29.337],[110.406926,29.323394],[110.409184,29.304987],[110.409789,29.292714],[110.411966,29.289893],[110.415729,29.288968],[110.420573,29.288986],[110.430243,29.289966],[110.433499,29.285258],[110.434056,29.281008],[110.436248,29.275347],[110.439488,29.271105],[110.448619,29.2716],[110.457177,29.278709],[110.463084,29.279661],[110.472771,29.275429],[110.487301,29.266002],[110.501586,29.257472],[110.502912,29.254686],[110.511568,29.241473],[110.516853,29.233839],[110.522335,29.231089],[110.545456,29.220723],[110.549219,29.218367],[110.555683,29.216956],[110.56105,29.217442],[110.561017,29.222162],[110.557352,29.231263],[110.553408,29.235791],[110.540465,29.258012],[110.531269,29.274531],[110.52906,29.285863],[110.53176,29.287768],[110.539123,29.286632],[110.544278,29.287585],[110.552246,29.289847],[110.565566,29.291469],[110.569902,29.294107],[110.57198,29.296607],[110.574746,29.295838],[110.577691,29.292146],[110.579687,29.279927],[110.582698,29.27586],[110.585398,29.273899],[110.589145,29.272983],[110.595936,29.269447],[110.597196,29.264499],[110.607079,29.249931],[110.619499,29.239127],[110.625242,29.234618],[110.63092,29.227689],[110.636565,29.217763],[110.639936,29.215214],[110.646498,29.213784],[110.651178,29.211447],[110.667066,29.200987],[110.670437,29.197522],[110.671157,29.193616],[110.670323,29.189719],[110.667377,29.185153],[110.659932,29.179927],[110.653305,29.174709],[110.639511,29.165181],[110.636565,29.162228],[110.633326,29.155368],[110.636124,29.148452],[110.643323,29.138527],[110.645385,29.134839],[110.644305,29.132087],[110.64136,29.128904],[110.635796,29.125509],[110.632622,29.122775],[110.628924,29.121665],[110.62228,29.114839],[110.621904,29.106342],[110.624146,29.098983],[110.637842,29.08417],[110.643602,29.083666],[110.649083,29.082014],[110.657428,29.076662],[110.666706,29.065344],[110.676639,29.062508],[110.683969,29.062444],[110.688731,29.064243],[110.697682,29.065831],[110.700431,29.070145],[110.705618,29.071357],[110.71249,29.07468],[110.721326,29.073633],[110.729459,29.077406],[110.730571,29.079306],[110.728232,29.083032],[110.728362,29.085327],[110.732895,29.089851],[110.736691,29.091632],[110.746313,29.095055],[110.759796,29.099377],[110.763592,29.099708],[110.766079,29.10102],[110.769614,29.105085],[110.77485,29.108792],[110.779481,29.109352],[110.785813,29.104801],[110.794175,29.104819],[110.799689,29.100148],[110.803535,29.097781],[110.805433,29.097478],[110.812681,29.098827],[110.822008,29.103195],[110.827801,29.113518],[110.832039,29.114142],[110.838781,29.113958],[110.842528,29.112453],[110.845342,29.110233],[110.850971,29.104103],[110.853164,29.099221],[110.852575,29.094229]]]]}},{"type":"Feature","properties":{"adcode":430811,"name":"武陵源区","center":[110.54758,29.347827],"centroid":[110.500904,29.346309],"childrenNum":0,"level":"district","parent":{"adcode":430800},"subFeatureIndex":1,"acroutes":[100000,430000,430800]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.574353,29.410958],[110.578018,29.410849],[110.580522,29.40729],[110.581258,29.400729],[110.581324,29.395569],[110.584171,29.391314],[110.592843,29.386052],[110.598145,29.38338],[110.615882,29.378713],[110.637776,29.377615],[110.651963,29.378292],[110.656218,29.377047],[110.661503,29.374045],[110.667099,29.369643],[110.670879,29.367401],[110.676311,29.366449],[110.681891,29.367547],[110.688567,29.367556],[110.692756,29.365634],[110.695914,29.359987],[110.694851,29.355913],[110.687356,29.343921],[110.682742,29.339344],[110.677997,29.335645],[110.66831,29.330014],[110.63974,29.320738],[110.628253,29.319777],[110.620595,29.315171],[110.615408,29.307835],[110.610188,29.304456],[110.603577,29.303522],[110.598014,29.304117],[110.587934,29.302872],[110.579589,29.300719],[110.574746,29.295838],[110.57198,29.296607],[110.569902,29.294107],[110.565566,29.291469],[110.552246,29.289847],[110.544278,29.287585],[110.539123,29.286632],[110.53176,29.287768],[110.52906,29.285863],[110.531269,29.274531],[110.540465,29.258012],[110.553408,29.235791],[110.557352,29.231263],[110.561017,29.222162],[110.56105,29.217442],[110.555683,29.216956],[110.549219,29.218367],[110.545456,29.220723],[110.522335,29.231089],[110.516853,29.233839],[110.511568,29.241473],[110.502912,29.254686],[110.501586,29.257472],[110.487301,29.266002],[110.472771,29.275429],[110.463084,29.279661],[110.457177,29.278709],[110.448619,29.2716],[110.439488,29.271105],[110.436248,29.275347],[110.434056,29.281008],[110.433499,29.285258],[110.430243,29.289966],[110.420573,29.288986],[110.415729,29.288968],[110.411966,29.289893],[110.409789,29.292714],[110.409184,29.304987],[110.406926,29.323394],[110.390677,29.337],[110.380925,29.345917],[110.372792,29.351062],[110.357738,29.351995],[110.34792,29.356865],[110.340459,29.360151],[110.335697,29.360453],[110.334372,29.35811],[110.334208,29.353103],[110.33195,29.349414],[110.327957,29.346549],[110.32205,29.34534],[110.316536,29.343637],[110.313869,29.343445],[110.309467,29.345423],[110.307733,29.347409],[110.308469,29.350247],[110.314752,29.35313],[110.318925,29.355666],[110.319678,29.358669],[110.318859,29.366842],[110.31539,29.372819],[110.312134,29.376901],[110.319759,29.388898],[110.321985,29.390225],[110.326256,29.391268],[110.332294,29.394434],[110.337284,29.395999],[110.348509,29.398085],[110.365249,29.399037],[110.379092,29.40072],[110.384803,29.402221],[110.400528,29.405451],[110.404995,29.406933],[110.411098,29.407683],[110.418822,29.410318],[110.433761,29.412239],[110.44245,29.414234],[110.447948,29.421369],[110.451924,29.429199],[110.4577,29.433133],[110.462168,29.431962],[110.466209,29.426885],[110.469809,29.421022],[110.474718,29.419457],[110.479169,29.419466],[110.491179,29.424178],[110.493388,29.43005],[110.492914,29.436307],[110.491523,29.444922],[110.49329,29.448837],[110.496841,29.450794],[110.503533,29.450803],[110.504433,29.448452],[110.504024,29.439453],[110.50463,29.436618],[110.508066,29.43616],[110.511846,29.433901],[110.520895,29.422778],[110.522155,29.418241],[110.523742,29.406484],[110.52744,29.397362],[110.532496,29.39092],[110.535474,29.388697],[110.538943,29.387828],[110.543296,29.388633],[110.549661,29.396191],[110.555454,29.401041],[110.566499,29.40836],[110.571358,29.410849],[110.574353,29.410958]]]]}},{"type":"Feature","properties":{"adcode":430821,"name":"慈利县","center":[111.132702,29.423876],"centroid":[110.927452,29.393009],"childrenNum":0,"level":"district","parent":{"adcode":430800},"subFeatureIndex":2,"acroutes":[100000,430000,430800]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.852575,29.094229],[110.853164,29.099221],[110.850971,29.104103],[110.845342,29.110233],[110.842528,29.112453],[110.838781,29.113958],[110.832039,29.114142],[110.827801,29.113518],[110.822008,29.103195],[110.812681,29.098827],[110.805433,29.097478],[110.803535,29.097781],[110.799689,29.100148],[110.794175,29.104819],[110.785813,29.104801],[110.779481,29.109352],[110.77485,29.108792],[110.769614,29.105085],[110.766079,29.10102],[110.763592,29.099708],[110.759796,29.099377],[110.746313,29.095055],[110.736691,29.091632],[110.732895,29.089851],[110.728362,29.085327],[110.728232,29.083032],[110.730571,29.079306],[110.729459,29.077406],[110.721326,29.073633],[110.71249,29.07468],[110.705618,29.071357],[110.700431,29.070145],[110.697682,29.065831],[110.688731,29.064243],[110.683969,29.062444],[110.676639,29.062508],[110.666706,29.065344],[110.657428,29.076662],[110.649083,29.082014],[110.643602,29.083666],[110.637842,29.08417],[110.624146,29.098983],[110.621904,29.106342],[110.62228,29.114839],[110.628924,29.121665],[110.632622,29.122775],[110.635796,29.125509],[110.64136,29.128904],[110.644305,29.132087],[110.645385,29.134839],[110.643323,29.138527],[110.636124,29.148452],[110.633326,29.155368],[110.636565,29.162228],[110.639511,29.165181],[110.653305,29.174709],[110.659932,29.179927],[110.667377,29.185153],[110.670323,29.189719],[110.671157,29.193616],[110.670437,29.197522],[110.667066,29.200987],[110.651178,29.211447],[110.646498,29.213784],[110.639936,29.215214],[110.636565,29.217763],[110.63092,29.227689],[110.625242,29.234618],[110.619499,29.239127],[110.607079,29.249931],[110.597196,29.264499],[110.595936,29.269447],[110.589145,29.272983],[110.585398,29.273899],[110.582698,29.27586],[110.579687,29.279927],[110.577691,29.292146],[110.574746,29.295838],[110.579589,29.300719],[110.587934,29.302872],[110.598014,29.304117],[110.603577,29.303522],[110.610188,29.304456],[110.615408,29.307835],[110.620595,29.315171],[110.628253,29.319777],[110.63974,29.320738],[110.66831,29.330014],[110.677997,29.335645],[110.682742,29.339344],[110.687356,29.343921],[110.694851,29.355913],[110.695914,29.359987],[110.692756,29.365634],[110.688567,29.367556],[110.681891,29.367547],[110.676311,29.366449],[110.670879,29.367401],[110.667099,29.369643],[110.661503,29.374045],[110.656218,29.377047],[110.651963,29.378292],[110.637776,29.377615],[110.615882,29.378713],[110.598145,29.38338],[110.592843,29.386052],[110.584171,29.391314],[110.581324,29.395569],[110.581258,29.400729],[110.580522,29.40729],[110.578018,29.410849],[110.574353,29.410958],[110.581389,29.42598],[110.588376,29.438529],[110.591452,29.450885],[110.598734,29.46527],[110.60487,29.4721],[110.610532,29.482834],[110.613313,29.492899],[110.616292,29.499983],[110.618435,29.508374],[110.625128,29.516289],[110.630544,29.525474],[110.630937,29.534996],[110.629644,29.541949],[110.624604,29.54596],[110.610335,29.547011],[110.601925,29.553214],[110.602334,29.557974],[110.613624,29.566068],[110.622853,29.570252],[110.631297,29.575339],[110.634487,29.576225],[110.640051,29.579166],[110.643749,29.579358],[110.647741,29.581623],[110.660456,29.58703],[110.663417,29.590446],[110.665315,29.594099],[110.673104,29.603212],[110.681548,29.603368],[110.684706,29.602427],[110.69742,29.606445],[110.704865,29.610061],[110.711999,29.611604],[110.721228,29.612206],[110.730751,29.613485],[110.736544,29.612745],[110.752629,29.614416],[110.757178,29.619191],[110.758847,29.624906],[110.759158,29.628805],[110.7569,29.635934],[110.75618,29.640079],[110.756769,29.644433],[110.758143,29.64854],[110.76032,29.652191],[110.762987,29.654226],[110.767896,29.665643],[110.766472,29.675526],[110.766554,29.680499],[110.779039,29.683063],[110.781346,29.683227],[110.786877,29.681639],[110.800246,29.68278],[110.806316,29.682415],[110.814498,29.680581],[110.820568,29.683145],[110.829977,29.685882],[110.842151,29.691311],[110.84562,29.691867],[110.848975,29.694093],[110.85444,29.696237],[110.856862,29.696283],[110.859431,29.69444],[110.864716,29.692004],[110.866745,29.688099],[110.871654,29.685435],[110.874992,29.684897],[110.890373,29.686895],[110.900633,29.684614],[110.904691,29.684486],[110.921185,29.679495],[110.92737,29.676594],[110.927927,29.67162],[110.931281,29.671493],[110.94015,29.669065],[110.942457,29.668025],[110.946352,29.668928],[110.94897,29.671584],[110.952881,29.673573],[110.959786,29.674331],[110.965071,29.677488],[110.967755,29.677716],[110.978554,29.67621],[110.98415,29.67632],[110.989485,29.673902],[110.995932,29.668043],[110.99855,29.667176],[111.005995,29.668317],[111.00917,29.668098],[111.02046,29.669978],[111.032094,29.669038],[111.034434,29.667368],[111.038983,29.658616],[111.039229,29.653286],[111.036463,29.649562],[111.031571,29.64718],[111.031031,29.64436],[111.032634,29.643301],[111.041749,29.642434],[111.046281,29.640106],[111.049717,29.636957],[111.051812,29.631032],[111.051763,29.623857],[111.053317,29.619073],[111.056181,29.617402],[111.071218,29.619264],[111.076995,29.619301],[111.093112,29.615831],[111.098054,29.615557],[111.110637,29.613804],[111.118573,29.610645],[111.120324,29.608435],[111.124415,29.607751],[111.132384,29.608837],[111.137571,29.608901],[111.142316,29.60765],[111.148207,29.604746],[111.150203,29.602993],[111.151316,29.596811],[111.154441,29.594729],[111.158974,29.594619],[111.168841,29.599103],[111.173455,29.600537],[111.179428,29.600957],[111.190849,29.598866],[111.200552,29.599103],[111.207523,29.601423],[111.210272,29.601003],[111.213267,29.599204],[111.217979,29.599898],[111.223952,29.60261],[111.232755,29.60261],[111.243276,29.600519],[111.252276,29.600528],[111.255778,29.599313],[111.257332,29.596985],[111.256629,29.592902],[111.254567,29.587021],[111.261963,29.585003],[111.265268,29.580746],[111.267118,29.579797],[111.273794,29.580874],[111.27867,29.573375],[111.283661,29.562953],[111.284871,29.557919],[111.286884,29.555261],[111.293102,29.557179],[111.294689,29.55686],[111.303967,29.549149],[111.304802,29.546408],[111.300825,29.54067],[111.301284,29.537691],[111.3058,29.535005],[111.309089,29.534712],[111.315781,29.535964],[111.319234,29.533314],[111.320232,29.529376],[111.320461,29.520831],[111.324176,29.515384],[111.328397,29.511207],[111.329625,29.508703],[111.329837,29.503658],[111.332652,29.497387],[111.33617,29.495778],[111.337528,29.493447],[111.335924,29.490961],[111.329428,29.486728],[111.325141,29.479844],[111.322065,29.47583],[111.319349,29.469887],[111.317614,29.464355],[111.318678,29.459838],[111.320298,29.457341],[111.32519,29.45254],[111.326614,29.445965],[111.329641,29.444163],[111.327432,29.437432],[111.324994,29.434816],[111.321378,29.433837],[111.319512,29.432264],[111.318203,29.428568],[111.312116,29.42372],[111.311249,29.419265],[111.307223,29.417381],[111.299991,29.415697],[111.294837,29.412889],[111.291728,29.40782],[111.292742,29.404783],[111.297504,29.40331],[111.300891,29.39706],[111.2977,29.394764],[111.291809,29.392723],[111.286197,29.389511],[111.282041,29.38856],[111.275152,29.388276],[111.269457,29.386565],[111.262667,29.383032],[111.25923,29.380635],[111.248022,29.357561],[111.244389,29.352178],[111.243015,29.348773],[111.24074,29.340314],[111.236371,29.336185],[111.234784,29.333292],[111.236109,29.329639],[111.240135,29.327514],[111.244013,29.323659],[111.245567,29.321041],[111.248054,29.310528],[111.251998,29.302771],[111.250967,29.29461],[111.246991,29.287383],[111.243931,29.282703],[111.234882,29.273514],[111.230791,29.271682],[111.229286,29.270097],[111.222119,29.265681],[111.220172,29.260715],[111.220155,29.257454],[111.224639,29.247667],[111.22729,29.244029],[111.230955,29.243168],[111.232788,29.23986],[111.231446,29.231731],[111.223199,29.223675],[111.214412,29.219064],[111.20641,29.217552],[111.192944,29.218102],[111.180475,29.221915],[111.17789,29.223418],[111.176908,29.227038],[111.17357,29.231355],[111.167319,29.234169],[111.165666,29.236176],[111.153901,29.237743],[111.129389,29.223326],[111.12183,29.218578],[111.112175,29.214866],[111.092818,29.204122],[111.085962,29.196467],[111.080775,29.188399],[111.075146,29.177744],[111.074426,29.174462],[111.07184,29.169831],[111.065066,29.16431],[111.055281,29.152148],[111.052352,29.145618],[111.050912,29.143618],[111.046707,29.140435],[111.043483,29.13927],[111.039507,29.139921],[111.030622,29.140233],[111.025811,29.137711],[111.024338,29.130656],[111.024518,29.124803],[111.022326,29.120463],[111.001659,29.117949],[110.995245,29.114591],[110.985345,29.110985],[110.980076,29.112086],[110.980665,29.114775],[110.98415,29.116491],[110.983823,29.11895],[110.974725,29.119225],[110.973138,29.11995],[110.971829,29.123032],[110.95846,29.133876],[110.947186,29.138234],[110.941639,29.138087],[110.941328,29.136353],[110.945059,29.133784],[110.945763,29.130941],[110.943619,29.127537],[110.941803,29.128225],[110.939594,29.131207],[110.935781,29.129399],[110.932541,29.131408],[110.929776,29.130849],[110.926127,29.125289],[110.927305,29.12206],[110.925374,29.118674],[110.919663,29.115986],[110.91752,29.113527],[110.913135,29.111306],[110.905526,29.110637],[110.902891,29.111178],[110.898784,29.109315],[110.893352,29.110903],[110.889604,29.109884],[110.889212,29.104883],[110.886643,29.10068],[110.882765,29.098524],[110.876318,29.097726],[110.87347,29.099322],[110.871785,29.104544],[110.868676,29.108067],[110.864667,29.107618],[110.862867,29.102956],[110.856011,29.095679],[110.852575,29.094229]]]]}},{"type":"Feature","properties":{"adcode":430822,"name":"桑植县","center":[110.164039,29.399939],"centroid":[110.181928,29.562013],"childrenNum":0,"level":"district","parent":{"adcode":430800},"subFeatureIndex":3,"acroutes":[100000,430000,430800]},"geometry":{"type":"MultiPolygon","coordinates":[[[[110.11257,29.289701],[110.103325,29.302606],[110.097189,29.308852],[110.089089,29.314127],[110.080564,29.318834],[110.073789,29.320711],[110.073757,29.32192],[110.068439,29.323769],[110.063055,29.322542],[110.058441,29.320281],[110.049196,29.314576],[110.035434,29.304053],[110.016355,29.28829],[110.014293,29.287869],[110.010497,29.289005],[110.001546,29.295407],[109.998045,29.296607],[109.991777,29.29745],[109.986819,29.297266],[109.975496,29.299162],[109.970113,29.301773],[109.967593,29.303742],[109.959428,29.311947],[109.951279,29.318055],[109.941101,29.320729],[109.936405,29.323174],[109.936143,29.325152],[109.942786,29.328769],[109.950232,29.33201],[109.952915,29.333823],[109.96036,29.341266],[109.960769,29.347363],[109.958969,29.352645],[109.954797,29.358165],[109.947204,29.362083],[109.945126,29.365762],[109.945159,29.36989],[109.95267,29.38349],[109.952424,29.386931],[109.94799,29.394901],[109.945274,29.398415],[109.940316,29.422824],[109.937714,29.428285],[109.935881,29.434404],[109.92999,29.441822],[109.925621,29.444419],[109.919747,29.445252],[109.915133,29.445087],[109.908407,29.44173],[109.851906,29.392568],[109.836639,29.38004],[109.828916,29.373295],[109.824399,29.382849],[109.821225,29.388651],[109.81486,29.392568],[109.803635,29.404673],[109.797613,29.409879],[109.794504,29.411645],[109.795257,29.417106],[109.802964,29.424983],[109.808249,29.427114],[109.808576,29.431221],[109.807578,29.43509],[109.802718,29.439627],[109.802129,29.441218],[109.803225,29.444749],[109.801884,29.448864],[109.796108,29.45458],[109.7884,29.463944],[109.780857,29.474687],[109.779352,29.478052],[109.778763,29.486902],[109.775588,29.489846],[109.770548,29.490522],[109.768699,29.494882],[109.76577,29.500001],[109.758571,29.504617],[109.752942,29.509069],[109.749833,29.5183],[109.744842,29.523874],[109.7444,29.527128],[109.740947,29.534283],[109.734648,29.54099],[109.73473,29.542168],[109.738755,29.547623],[109.741782,29.54914],[109.746985,29.548637],[109.749178,29.549478],[109.750438,29.553671],[109.760076,29.561647],[109.769223,29.567557],[109.782379,29.576609],[109.782461,29.577787],[109.779352,29.582482],[109.772152,29.585213],[109.768552,29.587313],[109.764936,29.596126],[109.76487,29.598647],[109.769059,29.604354],[109.769567,29.606527],[109.766948,29.612407],[109.76168,29.615174],[109.745726,29.615347],[109.742878,29.614754],[109.737266,29.611595],[109.731375,29.608874],[109.726924,29.60786],[109.72357,29.608198],[109.719954,29.609705],[109.715552,29.613138],[109.71781,29.61501],[109.716354,29.620205],[109.710856,29.629617],[109.702118,29.634273],[109.701234,29.636309],[109.706945,29.640288],[109.710954,29.643675],[109.715781,29.649498],[109.718694,29.655486],[109.718432,29.658643],[109.714717,29.666784],[109.713605,29.670306],[109.714963,29.673354],[109.725304,29.674823],[109.737053,29.678391],[109.743664,29.681922],[109.755331,29.686393],[109.760109,29.689112],[109.765247,29.695161],[109.766343,29.698947],[109.766179,29.702906],[109.76361,29.706099],[109.759651,29.708726],[109.760207,29.713369],[109.769747,29.719663],[109.772692,29.722198],[109.77297,29.724214],[109.768601,29.727844],[109.758652,29.731455],[109.757752,29.734893],[109.755723,29.733124],[109.753531,29.734109],[109.752385,29.739973],[109.75592,29.743274],[109.764347,29.742818],[109.769272,29.744505],[109.769452,29.747231],[109.771857,29.751344],[109.775817,29.755228],[109.779515,29.757735],[109.785848,29.760233],[109.791902,29.763415],[109.798235,29.764764],[109.803242,29.766351],[109.812962,29.767673],[109.820881,29.769924],[109.832172,29.770316],[109.836655,29.769833],[109.853755,29.772495],[109.863213,29.772668],[109.869807,29.774701],[109.877939,29.770982],[109.883176,29.76729],[109.888428,29.765886],[109.894237,29.767691],[109.896888,29.770435],[109.90214,29.769952],[109.9079,29.76419],[109.912384,29.764628],[109.918994,29.766898],[109.926391,29.770316],[109.929827,29.770918],[109.935537,29.775868],[109.940185,29.774182],[109.946992,29.779086],[109.949724,29.772978],[109.969704,29.771793],[109.97602,29.768119],[109.98263,29.768566],[109.990845,29.772213],[110.001939,29.770818],[110.005637,29.769432],[110.01066,29.770116],[110.017255,29.769414],[110.024144,29.769624],[110.030231,29.772368],[110.043223,29.776233],[110.048508,29.777363],[110.064135,29.782814],[110.072857,29.783926],[110.079206,29.785731],[110.088696,29.78615],[110.100854,29.788602],[110.113503,29.789678],[110.118755,29.787344],[110.13106,29.781073],[110.14492,29.77111],[110.149338,29.76626],[110.153249,29.763014],[110.157405,29.757024],[110.160792,29.753778],[110.170512,29.752328],[110.184453,29.753359],[110.188135,29.754471],[110.199163,29.753012],[110.204678,29.751362],[110.214103,29.747842],[110.219879,29.746648],[110.231121,29.739225],[110.241855,29.734328],[110.245782,29.73223],[110.251542,29.728063],[110.260394,29.719517],[110.269312,29.713488],[110.278214,29.709073],[110.287606,29.699385],[110.289946,29.696392],[110.291713,29.689267],[110.291091,29.681475],[110.292057,29.67183],[110.29438,29.666766],[110.299878,29.662376],[110.310122,29.660487],[110.315685,29.661144],[110.321248,29.665013],[110.328137,29.666811],[110.33447,29.667231],[110.339493,29.668125],[110.343224,29.667587],[110.342799,29.664904],[110.344451,29.66192],[110.353091,29.653815],[110.353713,29.651826],[110.351847,29.646112],[110.351929,29.644131],[110.355824,29.638837],[110.360749,29.635843],[110.364758,29.634556],[110.37258,29.633524],[110.383772,29.639905],[110.400904,29.647992],[110.407089,29.650311],[110.408529,29.651844],[110.413864,29.654655],[110.414355,29.660277],[110.416154,29.661737],[110.421685,29.662057],[110.429654,29.661363],[110.432501,29.662038],[110.439897,29.662413],[110.447048,29.664648],[110.448553,29.669649],[110.448292,29.676621],[110.449192,29.681722],[110.449372,29.690809],[110.452399,29.696119],[110.454117,29.697505],[110.459484,29.704074],[110.461922,29.710404],[110.465211,29.71305],[110.468975,29.712147],[110.472934,29.70889],[110.485239,29.704521],[110.487579,29.703116],[110.493846,29.700972],[110.50427,29.694659],[110.507117,29.692105],[110.515511,29.690855],[110.525264,29.693491],[110.531334,29.696174],[110.535834,29.699102],[110.541905,29.70224],[110.545374,29.705415],[110.551428,29.707184],[110.562817,29.712557],[110.565991,29.714591],[110.57,29.718221],[110.574533,29.723448],[110.577986,29.726384],[110.584629,29.730908],[110.590732,29.733826],[110.602056,29.742015],[110.606948,29.744687],[110.61441,29.747113],[110.623753,29.755948],[110.62588,29.757033],[110.631804,29.757744],[110.634684,29.749575],[110.636713,29.747742],[110.640214,29.746474],[110.644551,29.746128],[110.652994,29.744642],[110.657068,29.742061],[110.659032,29.739818],[110.661077,29.735805],[110.661274,29.73151],[110.660128,29.724743],[110.660783,29.719635],[110.664252,29.713214],[110.667754,29.709894],[110.672548,29.706847],[110.67834,29.705533],[110.689926,29.70203],[110.699351,29.699677],[110.71573,29.690371],[110.721457,29.687497],[110.726055,29.687269],[110.731864,29.690298],[110.737477,29.696365],[110.741027,29.697907],[110.747704,29.707066],[110.751713,29.71055],[110.757521,29.714099],[110.761792,29.715923],[110.76423,29.713387],[110.764999,29.709894],[110.764852,29.704557],[110.766325,29.693774],[110.765654,29.686211],[110.766554,29.680499],[110.766472,29.675526],[110.767896,29.665643],[110.762987,29.654226],[110.76032,29.652191],[110.758143,29.64854],[110.756769,29.644433],[110.75618,29.640079],[110.7569,29.635934],[110.759158,29.628805],[110.758847,29.624906],[110.757178,29.619191],[110.752629,29.614416],[110.736544,29.612745],[110.730751,29.613485],[110.721228,29.612206],[110.711999,29.611604],[110.704865,29.610061],[110.69742,29.606445],[110.684706,29.602427],[110.681548,29.603368],[110.673104,29.603212],[110.665315,29.594099],[110.663417,29.590446],[110.660456,29.58703],[110.647741,29.581623],[110.643749,29.579358],[110.640051,29.579166],[110.634487,29.576225],[110.631297,29.575339],[110.622853,29.570252],[110.613624,29.566068],[110.602334,29.557974],[110.601925,29.553214],[110.610335,29.547011],[110.624604,29.54596],[110.629644,29.541949],[110.630937,29.534996],[110.630544,29.525474],[110.625128,29.516289],[110.618435,29.508374],[110.616292,29.499983],[110.613313,29.492899],[110.610532,29.482834],[110.60487,29.4721],[110.598734,29.46527],[110.591452,29.450885],[110.588376,29.438529],[110.581389,29.42598],[110.574353,29.410958],[110.571358,29.410849],[110.566499,29.40836],[110.555454,29.401041],[110.549661,29.396191],[110.543296,29.388633],[110.538943,29.387828],[110.535474,29.388697],[110.532496,29.39092],[110.52744,29.397362],[110.523742,29.406484],[110.522155,29.418241],[110.520895,29.422778],[110.511846,29.433901],[110.508066,29.43616],[110.50463,29.436618],[110.504024,29.439453],[110.504433,29.448452],[110.503533,29.450803],[110.496841,29.450794],[110.49329,29.448837],[110.491523,29.444922],[110.492914,29.436307],[110.493388,29.43005],[110.491179,29.424178],[110.479169,29.419466],[110.474718,29.419457],[110.469809,29.421022],[110.466209,29.426885],[110.462168,29.431962],[110.4577,29.433133],[110.451924,29.429199],[110.447948,29.421369],[110.44245,29.414234],[110.433761,29.412239],[110.418822,29.410318],[110.411098,29.407683],[110.404995,29.406933],[110.400528,29.405451],[110.384803,29.402221],[110.379092,29.40072],[110.365249,29.399037],[110.348509,29.398085],[110.337284,29.395999],[110.332294,29.394434],[110.326256,29.391268],[110.321985,29.390225],[110.319759,29.388898],[110.312134,29.376901],[110.30824,29.371885],[110.305605,29.369423],[110.297931,29.365442],[110.293088,29.365204],[110.286264,29.366385],[110.279932,29.364591],[110.275432,29.361405],[110.272503,29.35844],[110.267758,29.35595],[110.26226,29.35736],[110.258332,29.358989],[110.253849,29.356957],[110.248825,29.352407],[110.244309,29.347391],[110.238238,29.341925],[110.235833,29.338968],[110.221548,29.324841],[110.217866,29.323266],[110.214987,29.323751],[110.211861,29.32561],[110.208261,29.331836],[110.20543,29.338053],[110.197134,29.345697],[110.191391,29.347116],[110.185124,29.34924],[110.174913,29.348865],[110.157568,29.342575],[110.146229,29.333255],[110.134104,29.325546],[110.125677,29.31964],[110.121717,29.315995],[110.120342,29.3105],[110.121324,29.302688],[110.120899,29.300967],[110.123386,29.298613],[110.123533,29.295004],[110.117184,29.291038],[110.11257,29.289701]]]]}}]}
    
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('张家界市', cityMap);
}));
