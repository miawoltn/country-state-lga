import { IState } from '../interfaces';
const states: IState[] = [
  { name: "Abia", code: "AB", countryCode: "NGA" },
  { name: "Adamawa", code: "AD", countryCode: "NGA" },
  { name: "Akwa Ibom", code: "AK", countryCode: "NGA" },
  { name: "Anambra", code: "AN", countryCode: "NGA" },
  { name: "Bauchi", code: "BA", countryCode: "NGA" },
  { name: "Bayelsa", code: "BY", countryCode: "NGA" },
  { name: "Benue", code: "BN", countryCode: "NGA" },
  { name: "Borno", code: "BO", countryCode: "NGA" },
  { name: "Cross River", code: "CR", countryCode: "NGA" },
  { name: "Delta", code: "DT", countryCode: "NGA" },
  { name: "Ebonyi", code: "EB", countryCode: "NGA" },
  { name: "Edo", code: "ED", countryCode: "NGA" },
  { name: "Ekiti", code: "EK", countryCode: "NGA" },
  { name: "Enugu", code: "EN", countryCode: "NGA" },
  { name: "Gombe", code: "GM", countryCode: "NGA" },
  { name: "Imo", code: "IM", countryCode: "NGA" },
  { name: "Jigawa", code: "JG", countryCode: "NGA" },
  { name: "Kaduna", code: "KD", countryCode: "NGA" },
  { name: "Kano", code: "KN", countryCode: "NGA" },
  { name: "Katsina", code: "KT", countryCode: "NGA" },
  { name: "Kebbi", code: "KB", countryCode: "NGA" },
  { name: "Kogi", code: "KG", countryCode: "NGA" },
  { name: "Kwara", code: "KW", countryCode: "NGA" },
  { name: "Lagos", code: "LA", countryCode: "NGA" },
  { name: "Nasarawa", code: "NS", countryCode: "NGA" },
  { name: "Niger", code: "NW", countryCode: "NGA" },
  { name: "Ogun", code: "OG", countryCode: "NGA" },
  { name: "Ondo", code: "ON", countryCode: "NGA" },
  { name: "Osun", code: "OS", countryCode: "NGA" },
  { name: "Oyo", code: "OY", countryCode: "NGA" },
  { name: "Plateau", code: "PL", countryCode: "NGA" },
  { name: "Rivers", code: "RV", countryCode: "NGA" },
  { name: "Sokoto", code: "SO", countryCode: "NGA" },
  { name: "Taraba", code: "TR", countryCode: "NGA" },
  { name: "Yobe", code: "YB", countryCode: "NGA" },
  { name: "Zamfara", code: "ZF", countryCode: "NGA" },
  { name: "FCT", code: "FC", countryCode: "NGA" },
  { name: "BADAKHSHAN", code: "42", countryCode: "AFG" },
  { name: "BADGIS", code: "43", countryCode: "AFG" },
  { name: "BAGLAN", code: "44", countryCode: "AFG" },
  { name: "BALKH", code: "45", countryCode: "AFG" },
  { name: "BAMIYAN", code: "46", countryCode: "AFG" },
  { name: "FARAN", code: "47", countryCode: "AFG" },
  { name: "FARYAB", code: "48", countryCode: "AFG" },
  { name: "GAWR", code: "49", countryCode: "AFG" },
  { name: "GAZNI", code: "50", countryCode: "AFG" },
  { name: "HERAT", code: "51", countryCode: "AFG" },
  { name: "HILMAND", code: "52", countryCode: "AFG" },
  { name: "JAWZJAN", code: "53", countryCode: "AFG" },
  { name: "KABUL", code: "54", countryCode: "AFG" },
  { name: "KAPISA", code: "55", countryCode: "AFG" },
  { name: "KHAWST", code: "56", countryCode: "AFG" },
  { name: "KUNAR", code: "57", countryCode: "AFG" },
  { name: "LAGMAN", code: "58", countryCode: "AFG" },
  { name: "LAWGHAR", code: "59", countryCode: "AFG" },
  { name: "NANGARHAR", code: "60", countryCode: "AFG" },
  { name: "NIMRUZ", code: "61", countryCode: "AFG" },
  { name: "NURISTAN", code: "62", countryCode: "AFG" },
  { name: "PAKTIKA", code: "63", countryCode: "AFG" },
  { name: "PAKTIYA", code: "64", countryCode: "AFG" },
  { name: "PARWAN", code: "65", countryCode: "AFG" },
  { name: "QANDAHAR", code: "66", countryCode: "AFG" },
  { name: "QUNDUZ", code: "67", countryCode: "AFG" },
  { name: "SAMANGAN", code: "68", countryCode: "AFG" },
  { name: "TAKHAR", code: "70", countryCode: "AFG" },
  { name: "URUZGAN", code: "71", countryCode: "AFG" },
  { name: "WARDAG", code: "72", countryCode: "AFG" },
  { name: "ZABUL", code: "73", countryCode: "AFG" },
  { name: "SKRAPAR", code: "105", countryCode: "ALB" },
  { name: "BULQIZE", code: "75", countryCode: "ALB" },
  { name: "FIER", code: "81", countryCode: "ALB" },
  { name: "HAS", code: "84", countryCode: "ALB" },
  { name: "PUKE", code: "102", countryCode: "ALB" },
  { name: "TEPELENE", code: "106", countryCode: "ALB" },
  { name: "KRUJE", code: "88", countryCode: "ALB" },
  { name: "BERAT", code: "74", countryCode: "ALB" },
  { name: "LEZHE", code: "92", countryCode: "ALB" },
  { name: "LUSHNJE", code: "94", countryCode: "ALB" },
  { name: "DELVINE", code: "76", countryCode: "ALB" },
  { name: "KURBIN", code: "91", countryCode: "ALB" },
  { name: "PERMET", code: "100", countryCode: "ALB" },
  { name: "POGRADEC", code: "101", countryCode: "ALB" },
  { name: "VLORE", code: "109", countryCode: "ALB" },
  { name: "DEVOLL", code: "77", countryCode: "ALB" },
  { name: "KORCE", code: "87", countryCode: "ALB" },
  { name: "MALLAKASTER", code: "95", countryCode: "ALB" },
  { name: "MIRDITE", code: "98", countryCode: "ALB" },
  { name: "PEQIN", code: "99", countryCode: "ALB" },
  { name: "DIBRE", code: "78", countryCode: "ALB" },
  { name: "GRAMSH", code: "83", countryCode: "ALB" },
  { name: "KAVAJE", code: "85", countryCode: "ALB" },
  { name: "MALSI E MADHE", code: "96", countryCode: "ALB" },
  { name: "SARANDE", code: "103", countryCode: "ALB" },
  { name: "SHKODER", code: "104", countryCode: "ALB" },
  { name: "TROPOJE", code: "108", countryCode: "ALB" },
  { name: "ELBASAN", code: "80", countryCode: "ALB" },
  { name: "GJIROKASTER", code: "82", countryCode: "ALB" },
  { name: "KOLONJE", code: "86", countryCode: "ALB" },
  { name: "TIRANE", code: "107", countryCode: "ALB" },
  { name: "DURRES", code: "79", countryCode: "ALB" },
  { name: "KUCOVE", code: "89", countryCode: "ALB" },
  { name: "KUKES", code: "90", countryCode: "ALB" },
  { name: " LIBRAZHD", code: "93", countryCode: "ALB" },
  { name: "MAT", code: "97", countryCode: "ALB" },
  { name: "SAKIKDAH", code: "139", countryCode: "DZA" },
  { name: "WILAYA DE CONSTANTINE", code: "157", countryCode: "DZA" },
  { name: "GHALIZAN", code: "123", countryCode: "DZA" },
  { name: "MUASKAR", code: "132", countryCode: "DZA" },
  { name: "BURJ BU ARRIRIJ", code: "122", countryCode: "DZA" },
  { name: "ILIZI", code: "125", countryCode: "DZA" },
  { name: "MASILAH", code: "129", countryCode: "DZA" },
  { name: "TINDUF", code: "148", countryCode: "DZA" },
  { name: "WAHRAN", code: "153", countryCode: "DZA" },
  { name: "WARQLA", code: "154", countryCode: "DZA" },
  { name: "ALGIERS", code: "113", countryCode: "DZA" },
  { name: "BATNAH", code: "116", countryCode: "DZA" },
  { name: "BIJAYAH", code: "117", countryCode: "DZA" },
  { name: "BUIRAH", code: "120", countryCode: "DZA" },
  { name: "BUMARDAS", code: "121", countryCode: "DZA" },
  { name: "GHARDAYAH", code: "124", countryCode: "DZA" },
  { name: "JILFAH", code: "127", countryCode: "DZA" },
  { name: "NAAMA", code: "134", countryCode: "DZA" },
  { name: "OUARGLA", code: "136", countryCode: "DZA" },
  { name: "TAMANGHASAT", code: "144", countryCode: "DZA" },
  { name: "TIBAZAH", code: "145", countryCode: "DZA" },
  { name: "TISAMSILT", code: "149", countryCode: "DZA" },
  { name: "TIZI WAZU", code: "151", countryCode: "DZA" },
  { name: "UMM-AL-BAWAGHI", code: "152", countryCode: "DZA" },
  { name: "WILAYA D ALGER", code: "155", countryCode: "DZA" },
  { name: "WILAYA DE BEJAIA", code: "156", countryCode: "DZA" },
  { name: "AL-BAYADH", code: "159", countryCode: "DZA" },
  { name: "BISKRAH", code: "118", countryCode: "DZA" },
  { name: "BLIDAH", code: "119", countryCode: "DZA" },
  { name: "MIDYAH", code: "130", countryCode: "DZA" },
  { name: "MILAH", code: "131", countryCode: "DZA" },
  { name: "ORAN", code: "135", countryCode: "DZA" },
  { name: "TILIMSAN", code: "147", countryCode: "DZA" },
  { name: "TIYARAT", code: "150", countryCode: "DZA" },
  { name: "AL-WAD", code: "161", countryCode: "DZA" },
  { name: "ASH-SHALIF", code: "162", countryCode: "DZA" },
  { name: "AT-TARIF", code: "163", countryCode: "DZA" },
  { name: "ADRAR", code: "112", countryCode: "DZA" },
  { name: "ANNABAH", code: "114", countryCode: "DZA" },
  { name: "BASHSHAR", code: "115", countryCode: "DZA" },
  { name: "JIJILI", code: "126", countryCode: "DZA" },
  { name: "KHANSHALAH", code: "128", countryCode: "DZA" },
  { name: "MUSTAGHANAM", code: "133", countryCode: "DZA" },
  { name: "SATIF", code: "140", countryCode: "DZA" },
  { name: "TIBISSAH", code: "146", countryCode: "DZA" },
  { name: "QALMAH", code: "137", countryCode: "DZA" },
  { name: "QUSTANTINAH", code: "138", countryCode: "DZA" },
  { name: "SUQ AHRAS", code: "143", countryCode: "DZA" },
  { name: "AL-AGHWAT", code: "158", countryCode: "DZA" },
  { name: "SWAINS ISLAND", code: "166", countryCode: "ASM" },
  { name: "EASTERN", code: "164", countryCode: "ASM" },
  { name: "WESTERN", code: "167", countryCode: "ASM" },
  { name: "LA_MASSANA", code: "171", countryCode: "AND" },
  { name: "ANDORRA LA VELLA", code: "168", countryCode: "AND" },
  { name: "CANILLO", code: "169", countryCode: "AND" },
  { name: "LES ESCALDES", code: "45", countryCode: "AND" },
  { name: "ENCAMP", code: "170", countryCode: "AND" },
  { name: "ORDINO", code: "173", countryCode: "AND" },
  { name: "SANT JULIA DE LORIA", code: "174", countryCode: "AND" },
  { name: "LUNDA NORTE", code: "186", countryCode: "AGO" },
  { name: "UIGE", code: "191", countryCode: "AGO" },
  { name: "MALANJE", code: "188", countryCode: "AGO" },
  { name: "HUAMBO", code: "180", countryCode: "AGO" },
  { name: "KWANZA SUL", code: "184", countryCode: "AGO" },
  { name: "BIE", code: "177", countryCode: "AGO" },
  { name: "CUNENE", code: "179", countryCode: "AGO" },
  { name: "LUANDA", code: "185", countryCode: "AGO" },
  { name: "NAMIBE", code: "190", countryCode: "AGO" },
  { name: "ZAIRE", code: "192", countryCode: "AGO" },
  { name: "BENGO", code: "175", countryCode: "AGO" },
  { name: "BENGUELA", code: "176", countryCode: "AGO" },
  { name: "KWANZA NORTE", code: "183", countryCode: "AGO" },
  { name: "CABINDA", code: "178", countryCode: "AGO" },
  { name: "KUANDO-KUBANGO", code: "182", countryCode: "AGO" },
  { name: "LUNDA SUL", code: "187", countryCode: "AGO" },
  { name: "HUILA", code: "181", countryCode: "AGO" },
  { name: "MOXICO", code: "189", countryCode: "AGO" },
  { name: "OTHER PROVINCES", code: "193", countryCode: "AIA" },
  { name: "SECTOR CLAIMED BY ARGENTINA/CH", code: "194", countryCode: "ATA" },
  { name: "SECTOR CLAIMED BY ARGENTINA/UK", code: "195", countryCode: "ATA" },
  { name: "SECTOR CLAIMED BY AUSTRALIA", code: "196", countryCode: "ATA" },
  { name: "SECTOR CLAIMED BY NEW ZEALAND", code: "198", countryCode: "ATA" },
  { name: "SECTOR CLAIMED BY FRANCE", code: "197", countryCode: "ATA" },
  { name: "UNCLAIMED SECTOR", code: "200", countryCode: "ATA" },
  { name: "SECTOR CLAIMED BY NORWAY", code: "199", countryCode: "ATA" },
  { name: "SAINT GEORGE", code: "202", countryCode: "ATG" },
  { name: "SAINT JOHN", code: "203", countryCode: "ATG" },
  { name: "BARBUDA", code: "201", countryCode: "ATG" },
  { name: "SAINT MARY", code: "204", countryCode: "ATG" },
  { name: "SAINT PETER", code: "206", countryCode: "ATG" },
  { name: "SAINT PHILIP", code: "207", countryCode: "ATG" },
  { name: "SAINT PAUL", code: "205", countryCode: "ATG" },
  { name: "CORRIENTES", code: "213", countryCode: "ARG" },
  { name: "ENTRE RIOS", code: "215", countryCode: "ARG" },
  { name: "SAN JUAN", code: "225", countryCode: "ARG" },
  { name: "SAN LUIS", code: "226", countryCode: "ARG" },
  { name: "SALTA", code: "224", countryCode: "ARG" },
  { name: "SANTA CRUZ", code: "227", countryCode: "ARG" },
  { name: "SANTA FE", code: "228", countryCode: "ARG" },
  { name: "CATAMARCA", code: "209", countryCode: "ARG" },
  { name: "CHACO", code: "210", countryCode: "ARG" },
  { name: "CHUBUT", code: "211", countryCode: "ARG" },
  { name: "CORDOBA", code: "212", countryCode: "ARG" },
  { name: "DISTRITO FEDERAL", code: "214", countryCode: "ARG" },
  { name: "NEUQUEN", code: "222", countryCode: "ARG" },
  { name: "SANTIAGO DEL ESTERO", code: "229", countryCode: "ARG" },
  { name: "LA PAMPA", code: "218", countryCode: "ARG" },
  { name: "LA RIOJA", code: "219", countryCode: "ARG" },
  { name: "MENDOZA", code: "220", countryCode: "ARG" },
  { name: "MISIONES", code: "221", countryCode: "ARG" },
  { name: "RIO NEGRO", code: "223", countryCode: "ARG" },
  { name: "TIERRA DEL FUEGO", code: "230", countryCode: "ARG" },
  { name: "TUCUMAN", code: "231", countryCode: "ARG" },
  { name: "BUENOS AIRES", code: "208", countryCode: "ARG" },
  { name: "FORMOSA", code: "216", countryCode: "ARG" },
  { name: "JUJUY", code: "217", countryCode: "ARG" },
  { name: "LORI", code: "237", countryCode: "ARM" },
  { name: "VAYOTS DZOR", code: "242", countryCode: "ARM" },
  { name: "SHIRAK", code: "238", countryCode: "ARM" },
  { name: "STEPANAKERT", code: "239", countryCode: "ARM" },
  { name: "ARAGATSOTN", code: "232", countryCode: "ARM" },
  { name: "ARMAVIR", code: "234", countryCode: "ARM" },
  { name: "GEGHARKUNIK", code: "235", countryCode: "ARM" },
  { name: "TAVUSH", code: "241", countryCode: "ARM" },
  { name: "ARARAT", code: "233", countryCode: "ARM" },
  { name: "KOTAIK", code: "236", countryCode: "ARM" },
  { name: "SYUNIK", code: "240", countryCode: "ARM" },
  { name: "YEREVAN", code: "243", countryCode: "ARM" },
  { name: "ARUBA", code: "244", countryCode: "ABW" },
];


export default states;