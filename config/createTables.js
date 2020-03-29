//user table
if ( connection ) {
  console.log("checking to create tables ");
  var sql = "CREATE TABLE IF NOT EXISTS `users` ( `id` INT NOT NULL AUTO_INCREMENT ,  `first_name` TEXT NOT NULL , `last_name` TEXT NOT NULL ,`email` TEXT NOT NULL ,`password` TEXT NOT NULL , `avatar` TEXT NOT NULL, `deleted` INT NOT NULL  ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB";
  connection.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
      }
  });
}
//next table
//CREATE TABLE IF NOT EXISTS `corenect`.`order` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `price` INT NOT NULL , `quantity` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
if ( connection ) {
  console.log("checking to create tables ");
  var sql = "CREATE TABLE IF NOT EXISTS orders` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `price` INT NOT NULL , `quantity` INT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB";
  connection.query(sql , function (err, res) {
      if(err) {
        console.log("error: ", err);
      }
  });

  if ( connection ) {
    console.log("checking to create tables ");
    var sql = "CREATE TABLE IF NOT EXISTS `symptomsEntries` ( `id` INT NOT NULL AUTO_INCREMENT ,  `userId` INT NOT NULL , `cough` INT NOT NULL ,`fever` INT NOT NULL ,`weakness` INT NOT NULL , `breathing` INT NOT NULL, `headache` INT NOT NULL  ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB";
    connection.query(sql , function (err, res) {
        if(err) {
          console.log("error: ", err);
        }
    });
  }

  for(i=0;i<200;i++) {
    cough =  Math.floor(Math.random() * 11);
    fever =  Math.floor(Math.random() * 11);
    weakness =  Math.floor(Math.random() * 11);
    breathing =  Math.floor(Math.random() * 11);
    headache =  Math.floor(Math.random() * 11);

    var sql = "INSERT INTO symptomsEntries (userId, cough, fever, weakness, breathing, headache) VALUES ('"+i+"', '"+cough+"', '"+fever+"', '"+weakness+"', '"+breathing+"', '"+headache+"')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted, ID: " + result.insertId);
    });
  }
