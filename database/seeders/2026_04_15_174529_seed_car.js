import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Car) {
    await db.Car.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('cars', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('cars');
}

export { up, down }
