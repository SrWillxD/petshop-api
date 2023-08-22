import pg from 'pg';
const { Client } = pg;
import dotenv from 'dotenv';

dotenv.config();

function connectToDatabase(){
    const connectionString = process.env.DB_URL
    const client = new Client({
        connectionString: connectionString
    });
    
    client.connect().then(()=>{console.log("📊🎲 Conected to the database!")})
    .catch(err =>{console.log("Erro ao conectar ao banco de dados:", err)});
}

export default connectToDatabase;