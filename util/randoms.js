import * as faker from 'faker/locale/nl';
import testGlobals from './globalVariables';
import moment from 'moment';

export default class Randoms {

  constructor(){
   
  }
  getComputerName(){
    var computerName = "computer#" + faker.company.companyName();
    testGlobals.setComputerName(computerName);
    return computerName;
  }
  getIntroducedDate(){
    var rDate = faker.date.past(1);
    var introducedDate = moment(rDate).format('YYYY-MM-DD');
    testGlobals.setIntroducedDate(introducedDate);
    return introducedDate;
  }
  getDisContinuedDate(){
    var dDate = faker.date.future(2);
    var disContinuedDate = moment(dDate).format('YYYY-MM-DD');
    testGlobals.setDiscontinuedDate(disContinuedDate);
    return disContinuedDate;
  }
  getRandomIndex(){
    var resultIndex = faker.random.number(10);
    testGlobals.setResultIndex(resultIndex);
    return resultIndex;
  }

}
