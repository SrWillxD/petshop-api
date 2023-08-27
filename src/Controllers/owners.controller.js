import pool from '../Database/database.js';

const ownersControllerOBJ = {
    async getOwnersData(req, res, next){
        let client;
        try{
            client = await pool.connect();
            const query = 'SELECT * FROM owners';
            const result = await client.query(query);
            
            const ownersData = result.rows;
            
            res.status(200).json(ownersData);
        }catch(err){
            console.error("Erro ao obter dados da tabela owners:", err);
            res.status(500).json({ error: "Erro ao obter dados da tabela owners" });
        }finally{
            if(client){
                client.release();
            }
        }
    }


}

export default ownersControllerOBJ;