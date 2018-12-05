import 'moment/locale/nl';

let computerName, introducedDate, discontinuedDate, companyName, resultIndex = '';

export default {
  setComputerName(computerName){
      this.computerName = computerName;
  },
  setIntroducedDate(date){
      this.introducedDate = date;
  },
  setDiscontinuedDate(date){
      this.discontinuedDate = date;
  },
  setCompanyName(companyName){
      this.companyName = companyName;
  },
  setResultIndex(resultIndex){
      this.resultIndex = resultIndex;
  },
  getComputerName(){
    return this.computerName;
  },
  getIntroducedDate(){
    return this.introducedDate;
  },
  getDiscontinuedDate(){
    return this.discontinuedDate;
  },
  getcompanyName(){
    return this.companyName;
  },
  getResultIndex(){
    return this.resultIndex;
  }
}
