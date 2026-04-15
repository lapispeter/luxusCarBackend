import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    startDate: { type: DataTypes.DATEONLY,  allowNull: false, validate: {
            //Feltétel az aktuális dátumhoz:
            isAfterNow: function(value) {
                const today = new Date().toISOString().split('T')[0];
                if(!(value >= today)) {
                    throw new Error('A start dátum mai vagy a jövő!');
                }
            }
        }  },
    endDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    carId: { type: DataTypes.INTEGER,  allowNull: false  },
    totalPrice: { type: DataTypes.INTEGER,  allowNull: true, validate:{max:2147483647, min:0}  },
    userUID: { type: DataTypes.STRING,  allowNull: false, validate:{minhossz(value){if(value && value.length <1){throw new Error("legalbb egy karakter")}}}  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('bookings');
}

export { up, down }
