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
    },
    async makeOwnersData(req, res, next){
        let client;
        try{
            const { name, tell } = req.body;

            if (!name || !tell) {
                return res.status(400).json({ error: "Name and tell are required fields." });
            }
    
            if (typeof name !== 'string' || typeof tell !== 'string') {
                return res.status(400).json({ error: "Name and tell must be strings." });
            }
            
            client = await pool.connect();

            const query = ' INSERT INTO owners (name, tell) VALUES ($1, $2) RETURNING *';
            const result = await client.query(query, [name, tell]);
            
            const insertedOwner = result.rows[0];
            
            res.status(201).json(insertedOwner);
        }catch(err){
            console.error("Erro ao cadastrar um novo dono:", err);
            res.status(500).json({ error: "Erro ao cadastrar um novo dono", err });
        }finally{
            if(client){
                client.release();
            }
        }
    }


}

export default ownersControllerOBJ;