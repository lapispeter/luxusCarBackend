import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Booking = sequelize.define('bookings', {
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
    totalPrice: { type: DataTypes.INTEGER,  allowNull: true, validate:{max:2147483647, min:{args: [0],
            msg: "Az érték nem lehet negatív!" }}  },
    userUID: { type: DataTypes.STRING,  allowNull: false, validate:{minhossz(value){if(value && value.length <1){throw new Error("legalbb egy karakter")}}}  }
}, {
    timestamps: true,
    freezeTableName: true,
        // MODELL szintű validáció (több mező összehasonlítása)
    validate: {
        startDateBeforeEndDate: function() {
            if (!(this.startDate < this.endDate)) {
                throw new Error('A start dátumnak kisebbnek kell lennie a végdátumnál!');
            }
        }
    }

})

export default Booking
