
const dbConnection = require("../db/dbConnection");


class produtoModel {

  
  executeSQL(sql, parametros = "") {
    
    return new Promise( function (resolve, reject) {
        
        
        dbConnection.query(sql, parametros, function (error, resposta) {
          
          if (error) {
            return reject(error);
          }
          
          return resolve(resposta);
        });

      }
    );
  }

  
  readList() {
    const sql = "SELECT id,nome,quantidade,unidadeMedida,preco,dataCadastro FROM produto"; 
    return this.executeSQL(sql); 
  }

  
  read(id) {
    const sql = "SELECT id,nome,quantidade,unidadeMedida,preco,dataCadastro FROM produto WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

  
  create(newProduto) {
    const sql = "INSERT INTO produto SET ?"; 
    return this.executeSQL(sql, newProduto); 
  }

  
  update(updatedProdudo, id) {
    const sql = "UPDATE produto SET ? WHERE id = ?"; 
    return this.executeSQL(sql, [updatedProdudo, id]); 
  }

  
  delete(id) {
    const sql = "DELETE FROM produto WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

}


module.exports = new  produtoModel();
