import pool from '../Database/database.js';

const ownersControllerOBJ = {
    async getOwnersData(req, res, next){
        let client;
        try{
            client = await pool.connect();
            const query = 'SELECT * FROM owners ORDER BY owner_id';
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
    },
    async updateOwnerData(req, res, next){
        let client;
        try{
            const { owner_id, name, tell } = req.body;

            if (!owner_id || !name || !tell) {
            return res.status(400).json({ error: "owner_id, name, and tell are required fields." });
            }

            if (typeof owner_id !== 'number' || typeof name !== 'string' || typeof tell !== 'string') {
            return res.status(400).json({ error: "owner_id must be a number, and name and tell must be strings." });
            }

            client = await pool.connect();

            const query = 'UPDATE owners SET name = $1, tell = $2 WHERE owner_id = $3 RETURNING *';
            const result = await client.query(query, [name, tell, owner_id]);

            const updatedOwner  = result.rows[0];

            if (!updatedOwner) {
                return res.status(404).json({ error: `Owner with owner_id ${owner_id} not found.` });
            }
            
            res.status(200).json(updatedOwner);
        }catch(err){
            console.error("Erro ao atualizar um proprietário:", err);
            res.status(500).json({ error: "Erro ao atualizar um proprietário:", err });
        }finally{
            if(client){
                client.release();
            }
        }
    }


}

export default ownersControllerOBJ;