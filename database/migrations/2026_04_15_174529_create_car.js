import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('cars', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    brand: { type: DataTypes.STRING,  allowNull: false, validate:{len:[1,50]}  },
    model: { type: DataTypes.STRING,  allowNull: false, validate:{len:[1,50]}  },
    licensePlate: { type: DataTypes.STRING,  allowNull: false, validate:{minhossz(value){if(value && value.length <1){
                                                                                            throw new Error("legalbb egy karakter")}
                                                                                        }, is: /^[A-Z]{3}-\d{3}$/}  },
    year: { type: DataTypes.INTEGER,  allowNull: true, validate:{max:2025, min:2000}  },
    dailyPrice: { type: DataTypes.INTEGER,  allowNull: true, validate:{max:2000, min:100}  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('cars');
}

export { up, down }
