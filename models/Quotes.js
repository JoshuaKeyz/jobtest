const bookshelf = require("../bookshelf");
const Contractor = require("./Contractor");
const Consumer = require("./Consumer");
var Quote = bookshelf.Model.extend({
        tableName: "quotes",
        contractor: function(){
            return this.belongsTo(Contractor)
        },
        consumer: function(){
            return this.belongsTo(Consumer);
        }
    }
)

module.exports = Quote