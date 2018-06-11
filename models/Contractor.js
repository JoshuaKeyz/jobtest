const bookshelf = require("../bookshelf");
var Quotes = require("./Quotes");

var Contractor = bookshelf.Model.extend({
        tableName: "contractors",
        quotes: function(){
            return this.hasMany(Quotes);
        }
    }, {
        register: function(first_name, last_name, email, password, location){
            if(!email || !password || !first_name){
                throw new Error("Email, password and first name are required");
            }else if(email.indexOf("@") < 2){
                throw new Error("Invalid email specified");
            }else{
                this.forge({ first_name: first_name, last_name: last_name, email: email, password: password, location: location})
                    .save(null, {method: 'insert'}).then(function(model){
                        console.log(model.toJSON());
                        bookshelf.knex.destroy()
                    })
               
            }
        }
    }
)

module.exports = Contractor