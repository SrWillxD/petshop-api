import pool from '../Database/database.js';

const animalsControllerOBJ = {
    async getAnimalsData(req, res, next){
        let client;
        try{
            client = await pool.connect();
            const query = 'SELECT * FROM animals ORDER BY animals_id';
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
    },
    async makeAnimalsData(req, res, next){
        let client;
        try{
            const { name, type, owner_id } = req.body;

            if (!name || !type || !owner_id) {
                return res.status(400).json({ error: "Name, type and owner_id are required fields." });
            }
    
            if (typeof name !== 'string' || typeof type !== 'string' || typeof owner_id !== 'number') {
                return res.status(400).json({ error: "Name and type must be strings, owner_id must be a number."});
            }
            
            client = await pool.connect();

            const ownerQuery = 'SELECT * FROM owners WHERE owner_id = $1';
            const ownerResult = await client.query(ownerQuery, [owner_id]);

            if (ownerResult.rows.length === 0) {
                return res.status(404).json({ error: `Owner with owner_id ${owner_id} not found.` });
            }

            const query = ' INSERT INTO animals (name, type, owner_id) VALUES ($1, $2, $3) RETURNING *';
            const result = await client.query(query, [name, type, owner_id]);
            
            const insertedAnimal = result.rows[0];
            
            res.status(201).json(insertedAnimal);
        }catch(err){
            console.error("Erro ao cadastrar um novo animal:", err);
            res.status(500).json({ error: "Erro ao cadastrar um novo animal", err });
        }finally{
            if(client){
                client.release();
            }
        }
    },
    async updateAnimalsData(req, res, next){
        let client;
        try{
            const { animals_id, name, type, owner_id } = req.body;
    
            if (!animals_id || !name || !type || !owner_id) {
                return res.status(400).json({ error: "animals_id, name, type and owner_id are required fields." });
            }
    
            if (typeof animals_id !== 'number' || typeof name !== 'string' || typeof type !== 'string' || typeof owner_id != "number") {
                return res.status(400).json({ error: "animals_id and owner_id must be a number, name and tell must be strings." });
            }
    
            client = await pool.connect();

            const ownerQuery = 'SELECT * FROM owners WHERE owner_id = $1';
            const ownerResult = await client.query(ownerQuery, [owner_id]);

            if (ownerResult.rows.length === 0) {
                return res.status(404).json({ error: `Owner with owner_id ${owner_id} not found.` });
            }
    
            const query = 'UPDATE animals SET name = $1, type = $2, owner_id = $3 WHERE animals_id = $4 RETURNING *';
            const result = await client.query(query, [name, type, owner_id, animals_id]);
    
            const updatedAnimal  = result.rows[0];
    
            if (!updatedAnimal) {
                return res.status(404).json({ error: `Animal with animals_id ${animals_id} not found.` });
            }
            
            res.status(200).json(updatedAnimal);
        }catch(err){
            console.error("Erro ao atualizar um animal:", err);
            res.status(500).json({ error: "Erro ao atualizar um animal:", err });
        }finally{
            if(client){
                client.release();
            }
        }
    }
}

export default animalsControllerOBJ;