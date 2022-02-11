import { format } from "date-fns";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import Dropdown from "../UI/Dropdown";

const DUMMY_HISTORY = [
  {
    price: "42565.702737198895",
    timestamp: 1644203700,
  },
  {
    price: "42485.82391339815",
    timestamp: 1644203400,
  },
  {
    price: "42421.89348117049",
    timestamp: 1644203100,
  },
  {
    price: "42435.33864569573",
    timestamp: 1644202800,
  },
  {
    price: "42502.43620809643",
    timestamp: 1644202500,
  },
  {
    price: "42568.33939853792",
    timestamp: 1644202200,
  },
  {
    price: "42499.94854404288",
    timestamp: 1644201900,
  },
  {
    price: "42437.01230385119",
    timestamp: 1644201600,
  },
  {
    price: "42413.56094878822",
    timestamp: 1644201300,
  },
  {
    price: "42309.28885244933",
    timestamp: 1644201000,
  },
  {
    price: "42290.43409223605",
    timestamp: 1644200700,
  },
  {
    price: "42235.81880152214",
    timestamp: 1644200400,
  },
  {
    price: "42212.75783402419",
    timestamp: 1644200100,
  },
  {
    price: "42205.51281044075",
    timestamp: 1644199800,
  },
  {
    price: "42183.90159442407",
    timestamp: 1644199500,
  },
  {
    price: "42122.40858878831",
    timestamp: 1644199200,
  },
  {
    price: "42172.079294170464",
    timestamp: 1644198900,
  },
  {
    price: "42166.584916743755",
    timestamp: 1644198600,
  },
  {
    price: "42115.24013930497",
    timestamp: 1644198300,
  },
  {
    price: "42057.624552931426",
    timestamp: 1644198000,
  },
  {
    price: "41950.81661638707",
    timestamp: 1644197700,
  },
  {
    price: "41930.02617883368",
    timestamp: 1644197400,
  },
  {
    price: "41842.338600037045",
    timestamp: 1644197100,
  },
  {
    price: "41843.31021032203",
    timestamp: 1644196800,
  },
  {
    price: "41784.35983219506",
    timestamp: 1644196500,
  },
  {
    price: "41753.888778843044",
    timestamp: 1644196200,
  },
  {
    price: "41794.11811962345",
    timestamp: 1644195900,
  },
  {
    price: "41870.55969274376",
    timestamp: 1644195600,
  },
  {
    price: "41802.87729667413",
    timestamp: 1644195300,
  },
  {
    price: "41778.217652243424",
    timestamp: 1644195000,
  },
  {
    price: "41815.568633241746",
    timestamp: 1644194700,
  },
  {
    price: "41861.755760463304",
    timestamp: 1644194400,
  },
  {
    price: "41878.830637108294",
    timestamp: 1644194100,
  },
  {
    price: "41882.3602624565",
    timestamp: 1644193800,
  },
  {
    price: "42114.47409367699",
    timestamp: 1644193500,
  },
  {
    price: "42140.64505535227",
    timestamp: 1644193200,
  },
  {
    price: "42206.199139874356",
    timestamp: 1644192900,
  },
  {
    price: "42321.645403172675",
    timestamp: 1644192600,
  },
  {
    price: "42383.43188083028",
    timestamp: 1644192300,
  },
  {
    price: "42392.217548897446",
    timestamp: 1644192000,
  },
  {
    price: "42390.955116585086",
    timestamp: 1644191700,
  },
  {
    price: "42432.22276383944",
    timestamp: 1644191400,
  },
  {
    price: "42350.54205159606",
    timestamp: 1644191100,
  },
  {
    price: "42288.19090300339",
    timestamp: 1644190800,
  },
  {
    price: "42231.89552847068",
    timestamp: 1644190500,
  },
  {
    price: "42153.062059378535",
    timestamp: 1644190200,
  },
  {
    price: "42228.23348689032",
    timestamp: 1644189900,
  },
  {
    price: "41929.056181037224",
    timestamp: 1644189600,
  },
  {
    price: "41769.4916447277",
    timestamp: 1644189300,
  },
  {
    price: "41704.39161506288",
    timestamp: 1644189000,
  },
  {
    price: "41634.20001960806",
    timestamp: 1644188700,
  },
  {
    price: "41608.39916900552",
    timestamp: 1644188400,
  },
  {
    price: "41626.695766959325",
    timestamp: 1644188100,
  },
  {
    price: "41690.67538076415",
    timestamp: 1644187800,
  },
  {
    price: "41688.556592365014",
    timestamp: 1644187500,
  },
  {
    price: "41673.323033533416",
    timestamp: 1644187200,
  },
  {
    price: "41660.15809623591",
    timestamp: 1644186900,
  },
  {
    price: "41660.35865692604",
    timestamp: 1644186600,
  },
  {
    price: "41693.77844556359",
    timestamp: 1644186300,
  },
  {
    price: "41681.863408552344",
    timestamp: 1644186000,
  },
  {
    price: "41694.088830586334",
    timestamp: 1644185700,
  },
  {
    price: "41693.28488616911",
    timestamp: 1644185400,
  },
  {
    price: "41690.19130042861",
    timestamp: 1644185100,
  },
  {
    price: "41683.21275800427",
    timestamp: 1644184800,
  },
  {
    price: "41697.91117594237",
    timestamp: 1644184500,
  },
  {
    price: "41683.73832723196",
    timestamp: 1644184200,
  },
  {
    price: "41684.593301328525",
    timestamp: 1644183900,
  },
  {
    price: "41688.78724797175",
    timestamp: 1644183600,
  },
  {
    price: "41663.04081029824",
    timestamp: 1644183300,
  },
  {
    price: "41658.57066015959",
    timestamp: 1644183000,
  },
  {
    price: "41613.509179039844",
    timestamp: 1644182700,
  },
  {
    price: "41582.27352161627",
    timestamp: 1644182400,
  },
  {
    price: "41587.51845982499",
    timestamp: 1644182100,
  },
  {
    price: "41585.931763902496",
    timestamp: 1644181800,
  },
  {
    price: "41616.93973486494",
    timestamp: 1644181500,
  },
  {
    price: "41593.17143494683",
    timestamp: 1644181200,
  },
  {
    price: "41567.134262707455",
    timestamp: 1644180900,
  },
  {
    price: "41636.48014992387",
    timestamp: 1644180600,
  },
  {
    price: "41671.82775085763",
    timestamp: 1644180300,
  },
  {
    price: "41709.83572440588",
    timestamp: 1644180000,
  },
  {
    price: "41709.74261510873",
    timestamp: 1644179700,
  },
  {
    price: "41686.03956607274",
    timestamp: 1644179400,
  },
  {
    price: "41696.26339003225",
    timestamp: 1644179100,
  },
  {
    price: "41694.88000832592",
    timestamp: 1644178800,
  },
  {
    price: "41723.84871864388",
    timestamp: 1644178500,
  },
  {
    price: "41725.08242303017",
    timestamp: 1644178200,
  },
  {
    price: "41710.2402615316",
    timestamp: 1644177900,
  },
  {
    price: "41706.357249673885",
    timestamp: 1644177600,
  },
  {
    price: "41658.397274765266",
    timestamp: 1644177300,
  },
  {
    price: "41656.32027674848",
    timestamp: 1644177000,
  },
  {
    price: "41658.032178663445",
    timestamp: 1644176700,
  },
  {
    price: "41656.552736335136",
    timestamp: 1644176400,
  },
  {
    price: "41669.096176510415",
    timestamp: 1644176100,
  },
  {
    price: "41622.230083618255",
    timestamp: 1644175800,
  },
  {
    price: "41609.15943928203",
    timestamp: 1644175500,
  },
  {
    price: "41586.2891550452",
    timestamp: 1644175200,
  },
  {
    price: "41551.95367538765",
    timestamp: 1644174900,
  },
  {
    price: "41553.60924744208",
    timestamp: 1644174600,
  },
  {
    price: "41539.641716979255",
    timestamp: 1644174300,
  },
  {
    price: "41499.09620988429",
    timestamp: 1644174000,
  },
  {
    price: "41539.26059772324",
    timestamp: 1644173700,
  },
  {
    price: "41568.00772760264",
    timestamp: 1644173400,
  },
  {
    price: "41568.256174786846",
    timestamp: 1644173100,
  },
  {
    price: "41549.578119581085",
    timestamp: 1644172800,
  },
  {
    price: "41540.305030578864",
    timestamp: 1644172500,
  },
  {
    price: "41553.984743618945",
    timestamp: 1644172200,
  },
  {
    price: "41590.21755460687",
    timestamp: 1644171900,
  },
  {
    price: "41630.14694192481",
    timestamp: 1644171600,
  },
  {
    price: "41654.57726608482",
    timestamp: 1644171300,
  },
  {
    price: "41648.54206304925",
    timestamp: 1644171000,
  },
  {
    price: "41660.33121738372",
    timestamp: 1644170700,
  },
  {
    price: "41648.730254357",
    timestamp: 1644170400,
  },
  {
    price: "41662.91378053227",
    timestamp: 1644170100,
  },
  {
    price: "41643.33567241925",
    timestamp: 1644169800,
  },
  {
    price: "41655.122535740644",
    timestamp: 1644169500,
  },
  {
    price: "41690.71464663102",
    timestamp: 1644169200,
  },
  {
    price: "41695.57805452378",
    timestamp: 1644168900,
  },
  {
    price: "41682.69890441055",
    timestamp: 1644168600,
  },
  {
    price: "41685.06701907827",
    timestamp: 1644168300,
  },
  {
    price: "41666.38897247526",
    timestamp: 1644168000,
  },
  {
    price: "41676.6739152997",
    timestamp: 1644167700,
  },
  {
    price: "41661.55443037621",
    timestamp: 1644167400,
  },
  {
    price: "41652.302361552924",
    timestamp: 1644167100,
  },
  {
    price: "41656.646547089644",
    timestamp: 1644166800,
  },
  {
    price: "41612.56960651635",
    timestamp: 1644166500,
  },
  {
    price: "41592.89306204515",
    timestamp: 1644166200,
  },
  {
    price: "41608.10369809562",
    timestamp: 1644165900,
  },
  {
    price: "41643.14274383634",
    timestamp: 1644165600,
  },
  {
    price: "41603.06672979642",
    timestamp: 1644165300,
  },
  {
    price: "41561.298022353",
    timestamp: 1644165000,
  },
  {
    price: "41568.023470691",
    timestamp: 1644164700,
  },
  {
    price: "41529.234570925946",
    timestamp: 1644164400,
  },
  {
    price: "41501.91630097206",
    timestamp: 1644164100,
  },
  {
    price: "41461.43547984412",
    timestamp: 1644163800,
  },
  {
    price: "41509.710340504265",
    timestamp: 1644163500,
  },
  {
    price: "41521.98514604222",
    timestamp: 1644163200,
  },
  {
    price: "41531.98889238484",
    timestamp: 1644162900,
  },
  {
    price: "41485.48599970854",
    timestamp: 1644162600,
  },
  {
    price: "41443.33945100467",
    timestamp: 1644162300,
  },
  {
    price: "41450.230634189014",
    timestamp: 1644162000,
  },
  {
    price: "41474.885473215836",
    timestamp: 1644161700,
  },
  {
    price: "41453.276569242174",
    timestamp: 1644161400,
  },
  {
    price: "41376.15717043528",
    timestamp: 1644161100,
  },
  {
    price: "41385.68966096244",
    timestamp: 1644160800,
  },
  {
    price: "41370.76559802696",
    timestamp: 1644160500,
  },
  {
    price: "41356.03932063592",
    timestamp: 1644160200,
  },
  {
    price: "41288.6159713053",
    timestamp: 1644159900,
  },
  {
    price: "41340.6377730318",
    timestamp: 1644159600,
  },
  {
    price: "41378.424660131954",
    timestamp: 1644159300,
  },
  {
    price: "41473.01007058813",
    timestamp: 1644159000,
  },
  {
    price: "41562.15301877851",
    timestamp: 1644158700,
  },
  {
    price: "41665.42780922444",
    timestamp: 1644158400,
  },
  {
    price: "41824.429181461426",
    timestamp: 1644158100,
  },
  {
    price: "41745.7779768374",
    timestamp: 1644157800,
  },
  {
    price: "41729.939117068476",
    timestamp: 1644157500,
  },
  {
    price: "41705.97024827558",
    timestamp: 1644157200,
  },
  {
    price: "41699.66362220679",
    timestamp: 1644156900,
  },
  {
    price: "41699.20418606944",
    timestamp: 1644156600,
  },
  {
    price: "41683.07637429937",
    timestamp: 1644156300,
  },
  {
    price: "41693.22855171096",
    timestamp: 1644156000,
  },
  {
    price: "41698.396785822064",
    timestamp: 1644155700,
  },
  {
    price: "41691.03517427199",
    timestamp: 1644155400,
  },
  {
    price: "41686.468058641716",
    timestamp: 1644155100,
  },
  {
    price: "41674.74501732766",
    timestamp: 1644154800,
  },
  {
    price: "41680.09315729744",
    timestamp: 1644154500,
  },
  {
    price: "41647.91708311444",
    timestamp: 1644154200,
  },
  {
    price: "41581.529238977346",
    timestamp: 1644153900,
  },
  {
    price: "41566.15239653892",
    timestamp: 1644153600,
  },
  {
    price: "41686.56476033581",
    timestamp: 1644153300,
  },
  {
    price: "41652.38198466537",
    timestamp: 1644153000,
  },
  {
    price: "41621.16511577461",
    timestamp: 1644152700,
  },
  {
    price: "41561.342166455215",
    timestamp: 1644152400,
  },
  {
    price: "41538.95296781658",
    timestamp: 1644152100,
  },
  {
    price: "41548.46509189106",
    timestamp: 1644151800,
  },
  {
    price: "41592.9766876233",
    timestamp: 1644151500,
  },
  {
    price: "41597.672628145876",
    timestamp: 1644151200,
  },
  {
    price: "41608.35145577486",
    timestamp: 1644150900,
  },
  {
    price: "41591.73258908257",
    timestamp: 1644150600,
  },
  {
    price: "41603.61664210251",
    timestamp: 1644150300,
  },
  {
    price: "41618.780600352744",
    timestamp: 1644150000,
  },
  {
    price: "41601.644061334504",
    timestamp: 1644149700,
  },
  {
    price: "41591.05426048429",
    timestamp: 1644149400,
  },
  {
    price: "41549.32615574061",
    timestamp: 1644149100,
  },
  {
    price: "41516.70101659997",
    timestamp: 1644148800,
  },
  {
    price: "41513.16841098321",
    timestamp: 1644148500,
  },
  {
    price: "41494.15610662169",
    timestamp: 1644148200,
  },
  {
    price: "41554.64708772135",
    timestamp: 1644147900,
  },
  {
    price: "41552.08117132779",
    timestamp: 1644147600,
  },
  {
    price: "41539.50294025876",
    timestamp: 1644147300,
  },
  {
    price: "41557.57652949316",
    timestamp: 1644147000,
  },
  {
    price: "41542.77893591395",
    timestamp: 1644146700,
  },
  {
    price: "41543.526371308726",
    timestamp: 1644146400,
  },
  {
    price: "41546.936531956555",
    timestamp: 1644146100,
  },
  {
    price: "41556.006068204806",
    timestamp: 1644145800,
  },
  {
    price: "41587.22567174694",
    timestamp: 1644145500,
  },
  {
    price: "41583.63971357249",
    timestamp: 1644145200,
  },
  {
    price: "41577.59828692291",
    timestamp: 1644144900,
  },
  {
    price: "41569.94536871471",
    timestamp: 1644144600,
  },
  {
    price: "41596.525330287455",
    timestamp: 1644144300,
  },
  {
    price: "41595.70294983482",
    timestamp: 1644144000,
  },
  {
    price: "41601.38144036175",
    timestamp: 1644143700,
  },
  {
    price: "41646.77097265045",
    timestamp: 1644143400,
  },
  {
    price: "41675.701983680396",
    timestamp: 1644143100,
  },
  {
    price: "41659.93840275112",
    timestamp: 1644142800,
  },
  {
    price: "41659.27161379978",
    timestamp: 1644142500,
  },
  {
    price: "41661.86063680736",
    timestamp: 1644142200,
  },
  {
    price: "41666.53393927068",
    timestamp: 1644141900,
  },
  {
    price: "41630.57186613818",
    timestamp: 1644141600,
  },
  {
    price: "41623.88711201829",
    timestamp: 1644141300,
  },
  {
    price: "41622.44760152104",
    timestamp: 1644141000,
  },
  {
    price: "41626.11781673377",
    timestamp: 1644140700,
  },
  {
    price: "41631.37667614124",
    timestamp: 1644140400,
  },
  {
    price: "41634.88243476104",
    timestamp: 1644140100,
  },
  {
    price: "41604.354857991246",
    timestamp: 1644139800,
  },
  {
    price: "41647.49001313636",
    timestamp: 1644139500,
  },
  {
    price: "41653.66192038482",
    timestamp: 1644139200,
  },
  {
    price: "41622.61461306862",
    timestamp: 1644138900,
  },
  {
    price: "41659.57903845658",
    timestamp: 1644138600,
  },
  {
    price: "41635.94576753819",
    timestamp: 1644138300,
  },
  {
    price: "41630.8913278106",
    timestamp: 1644138000,
  },
  {
    price: "41603.04799407876",
    timestamp: 1644137700,
  },
  {
    price: "41585.946411773795",
    timestamp: 1644137400,
  },
  {
    price: "41597.64852267553",
    timestamp: 1644137100,
  },
  {
    price: "41549.76606004851",
    timestamp: 1644136800,
  },
  {
    price: "41531.403992913816",
    timestamp: 1644136500,
  },
  {
    price: "41529.34545495146",
    timestamp: 1644136200,
  },
  {
    price: "41556.648258190704",
    timestamp: 1644135900,
  },
  {
    price: "41580.50717942009",
    timestamp: 1644135600,
  },
  {
    price: "41632.64921946591",
    timestamp: 1644135300,
  },
  {
    price: "41621.70889058364",
    timestamp: 1644135000,
  },
  {
    price: "41611.11312931702",
    timestamp: 1644134700,
  },
  {
    price: "41632.02807452795",
    timestamp: 1644134400,
  },
  {
    price: "41654.94757907159",
    timestamp: 1644134100,
  },
  {
    price: "41618.30333839929",
    timestamp: 1644133800,
  },
  {
    price: "41499.54566836146",
    timestamp: 1644133500,
  },
  {
    price: "41465.4994675431",
    timestamp: 1644133200,
  },
  {
    price: "41465.01807836224",
    timestamp: 1644132900,
  },
  {
    price: "41451.103703514345",
    timestamp: 1644132600,
  },
  {
    price: "41462.63786365157",
    timestamp: 1644132300,
  },
  {
    price: "41454.307342761225",
    timestamp: 1644132000,
  },
  {
    price: "41470.17358279874",
    timestamp: 1644131700,
  },
  {
    price: "41459.44349869165",
    timestamp: 1644131400,
  },
  {
    price: "41448.03487452814",
    timestamp: 1644131100,
  },
  {
    price: "41455.06797466019",
    timestamp: 1644130800,
  },
  {
    price: "41477.899851320035",
    timestamp: 1644130500,
  },
  {
    price: "41496.48306860291",
    timestamp: 1644130200,
  },
  {
    price: "41508.45242473038",
    timestamp: 1644129900,
  },
  {
    price: "41549.10171381158",
    timestamp: 1644129600,
  },
  {
    price: "41537.23228404188",
    timestamp: 1644129300,
  },
  {
    price: "41535.0861520743",
    timestamp: 1644129000,
  },
  {
    price: "41489.79945769217",
    timestamp: 1644128700,
  },
  {
    price: "41502.805384728636",
    timestamp: 1644128400,
  },
  {
    price: "41529.74424801017",
    timestamp: 1644128100,
  },
  {
    price: "41559.85909736123",
    timestamp: 1644127800,
  },
  {
    price: "41575.14725656729",
    timestamp: 1644127500,
  },
  {
    price: "41573.557144487364",
    timestamp: 1644127200,
  },
  {
    price: "41545.273853671766",
    timestamp: 1644126900,
  },
  {
    price: "41578.32875416593",
    timestamp: 1644126600,
  },
  {
    price: "41556.10573251166",
    timestamp: 1644126300,
  },
  {
    price: "41576.91719393858",
    timestamp: 1644126000,
  },
  {
    price: "41560.254608811505",
    timestamp: 1644125700,
  },
  {
    price: "41544.429951792525",
    timestamp: 1644125400,
  },
  {
    price: "41557.52840572304",
    timestamp: 1644125100,
  },
  {
    price: "41535.22646244176",
    timestamp: 1644124800,
  },
  {
    price: "41515.15553569976",
    timestamp: 1644124500,
  },
  {
    price: "41527.59163980983",
    timestamp: 1644124200,
  },
  {
    price: "41543.061484231024",
    timestamp: 1644123900,
  },
  {
    price: "41537.310608055486",
    timestamp: 1644123600,
  },
  {
    price: "41529.461896001",
    timestamp: 1644123300,
  },
  {
    price: "41519.496238536456",
    timestamp: 1644123000,
  },
  {
    price: "41513.46288516931",
    timestamp: 1644122700,
  },
  {
    price: "41481.18812588218",
    timestamp: 1644122400,
  },
  {
    price: "41482.739716879165",
    timestamp: 1644122100,
  },
  {
    price: "41446.19753739103",
    timestamp: 1644121800,
  },
  {
    price: "41451.66808314904",
    timestamp: 1644121500,
  },
  {
    price: "41376.19773344766",
    timestamp: 1644121200,
  },
  {
    price: "41385.9757418319",
    timestamp: 1644120900,
  },
  {
    price: "41401.66252332673",
    timestamp: 1644120600,
  },
  {
    price: "41470.53933886046",
    timestamp: 1644120300,
  },
  {
    price: "41479.23966099032",
    timestamp: 1644120000,
  },
  {
    price: "41494.697519589754",
    timestamp: 1644119700,
  },
  {
    price: "41521.216920084444",
    timestamp: 1644119400,
  },
  {
    price: "41551.839577778424",
    timestamp: 1644119100,
  },
  {
    price: "41547.62885796203",
    timestamp: 1644118800,
  },
  {
    price: "41539.60693703231",
    timestamp: 1644118500,
  },
  {
    price: "41521.823720599365",
    timestamp: 1644118200,
  },
  {
    price: "41506.921100894855",
    timestamp: 1644117900,
  },
  {
    price: "41487.77739813336",
    timestamp: 1644117600,
  },
];

const Chart = () => {
  const getSelectedDuration = (duration) => {
  };

  const labels = DUMMY_HISTORY.map((history) =>
    format(new Date(DUMMY_HISTORY[0].timestamp * 1000), "HH:mm")
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Price in USD",
        data: DUMMY_HISTORY.map((history) => history.price),
        backgroundColor: ["rgb(85, 126, 173)"],
        borderColor: ["rgb(8, 56, 168)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full">
      <Dropdown
        options={["24h", "3h", "7d", "30d", "3m", "1y", "3y", "5y"]}
        sendChangeToParent={getSelectedDuration}
      />
      <div className="flex flex-row items-baseline">
        <p className="text-blue-600 font-semibold text-4xl">
          Bitcoin Price Chart
        </p>
        <p className="ml-auto mr-6 font-bold text-lg">Change: 13.37%</p>
        <p className="font-bold text-lg">Current Bitcoin Price: $ 48.6K</p>
      </div>
      <Line className="grid place-items-center" data={data} />
    </div>
  );
};

export default Chart;
