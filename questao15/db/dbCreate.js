class produtoDatabase {
  
  initConnection(connection) {
    this.connection = connection; 
    this.initDatabase();
  }

  
  initDatabase() {
    
    this.connection.connect((error) => {
      if (error) {
        console.log("Ocorreu um erro ao conectar no banco de dados..."); 
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados conectado com sucesso..."); 
      this.createDatabase(); 
    });
  }

  
  createDatabase() {
    
    const sql = "CREATE DATABASE IF NOT EXISTS db_produto";
    
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar o banco de dados..."); 
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados criado com sucesso..."); 
      
      this.connection.query("USE db_produto", (error) => {
        if (error) {
          console.log("Ocorreu um erro ao selecionar o banco de dados..."); 
          console.log(error.message); 
          return;
        }
        console.log("Banco de dados selecionado com sucesso..."); 
        this.createTable(); 
      });
    });
  }

  
  createTable() {
    
    const sql = `
    CREATE TABLE IF NOT EXISTS produto (
      id INT NOT NULL AUTO_INCREMENT,
      nome VARCHAR(50) DEFAULT NULL,
      quantidade INT (10) DEFAULT NULL,
      unidadeMedida ENUM('UN', 'CT', 'CX', 'DZ', 'PA', 'PÇ', 'PT', 'RL') NOT NULL DEFAULT 'UN',
      preco DOUBLE (10,2) DEFAULT NULL,
      dataCadastro DATETIME DEFAULT NULL,
      PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `;
    
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela produtos..."); 
        console.log(error.message); 
        return;
      }
      console.log("Tabela produtos criada com sucesso..."); 
    });
  }
}


module.exports = new produtoDatabase();
