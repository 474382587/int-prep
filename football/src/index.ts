import { HTMLReport } from './reportTargets/HTMLReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary} from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load()

// console.table(matchReader.matches);


// console.log(manUnitedWins);
const analyzer = new WinsAnalysis('Man United')
const outputTarget = new ConsoleReport()
const htmlReport = new HTMLReport()
const summary = new Summary(analyzer, htmlReport)
summary.buildAndPrintReport(matchReader.matches)

const matchReader2 = MatchReader.fromCsv('football.csv')
const summary2 = Summary.winsAnalysisWithHtmlReport('Man United')
summary2.buildAndPrintReport(matchReader2.matches)