const tableNames = require('../../config/constants/tableNames');

exports.seed = async (knex) => {
    /***Will become dynamic when more table get added*/
  // Deletes ALL existing entries
  await  knex(tableNames.albanian).del();
  /***Adding 30 Random Albanian Words**/
  let allAlWords = [
      {word:'lule'},//meaning flower
      {word:'kal'},//meaning horse
      {word:'familje'},//meaning family
      {word:'pjatë'},//meaning plate
      {word:'kafshë'},//meaning animal
      {word:'peshk'},//meaning fsih
      {word:'libër'},//meaning book
      {word:'kompjuter'},//meaning computer
      {word:'mal'},{word:'fushë'},{word:'televizor'},{word:'kodër'},{word:'histori'},{word:'fjalë'},{word:'shtëpi'},{word:'mushkri'},
      {word:'dem'},{word:'qen'},{word:'mace'},{word:'kishë'},{word:'flamur'},{word:'tokë'},{word:'kohë'},{word:'fustan'},
      {word:'sharrë'},{word:'kështjellë'},{word:'luftë'},{word:'gotë'},{word:'mbulesë'},{word:'derë'},
  ]

    //will store all wrods;

    await knex(tableNames.albanian).insert(allAlWords);
};
