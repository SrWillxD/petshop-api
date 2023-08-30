import pool from '../Database/database.js';

const animalsControllerOBJ = {
    async getAnimalsData(req, res, next){
        let client;
        try{
            client = await pool.connect();
            const query = 'SELECT * FROM animals ORDER BY owner_id';
            const result = await client.query(query);
            
            const animalsData = result.rows;
            
            res.status(200).json(animalsData);
        }catch(err){
            console.error("Erro ao obter dados da tabela animals:", err);
            res.status(500).json({ error: "Erro ao obter dados da tabela animals" });
        }finally{
            if(client){
                client.release();
            }
        }
    }
}

export default animalsControllerOBJ;