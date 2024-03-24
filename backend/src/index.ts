import express, { Request, Response, NextFunction } from 'express';  
import { Pool } from 'pg';  

// Initialize express app  
const app = express();  
  
app.use(express.json());  

app.get('/', (req: Request, res: Response) => {  
    res.status(200).send('Server is up and running!');  
  });  

/// CREATE a new duty  
app.post('/duties', async (req: Request, res: Response, next: NextFunction) => {  
    try {  
      const { name } = req.body;  
      const result = await pool.query('INSERT INTO duties (name) VALUES ($1) RETURNING *', [name]);  
      res.status(201).json(result.rows[0]);  
    } catch (error) {  
        next(error);   
    }  
  });  
    
  // READ all duties  
  app.get('/duties', async (req: Request, res: Response, next: NextFunction) => {  
    try {  
      const result = await pool.query('SELECT * FROM duties');  
      res.status(200).json(result.rows);  
    } catch (error) {  
      next(error); 
    }  
  });  
    
  // UPDATE a duty  
  app.put('/duties/:id', async (req: Request, res: Response, next: NextFunction) => {  
    try {  
      const { id } = req.params;  
      const { name } = req.body;  
      const result = await pool.query('UPDATE duties SET name = $1 WHERE id = $2 RETURNING *', [name, id]);  
      res.status(200).json(result.rows[0]);  
    } catch (error) {  
        next(error);   
    }  
  });  
    
  // DELETE a duty (optional requirement)  
  app.delete('/duties/:id', async (req: Request, res: Response, next: NextFunction) => {  
    try {  
      const { id } = req.params;  
      await pool.query('DELETE FROM duties WHERE id = $1', [id]);  
      res.status(204).send();  
    } catch (error) {  
        next(error); 
    }  
  });  

// Error handling middleware  
app.use((error: any, req: Request, res: Response, next: NextFunction) => {    
    console.error(error.stack);    
    res.status(500).send('Something broke!');    
});  

// Validate environment variables  
const { DB_USER, DB_HOST, DB_NAME, DB_PASS, DB_PORT } = process.env;  
if (!DB_USER || !DB_HOST || !DB_NAME || !DB_PASS || !DB_PORT) {  
  throw new Error('Missing environment variables for database configuration');  
}  
  
const pool = new Pool({    
  user: DB_USER,    
  host: DB_HOST,    
  database: DB_NAME,    
  password: DB_PASS,    
  port: parseInt(DB_PORT, 10),    
});  

  // Start the server  
  const PORT = process.env.PORT || 3000;  
  app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
    // Verify database connection  
    pool.connect()  
      .then(client => {  
        client.release();  
        console.log('Database connection successful');  
      })  
      .catch((err: Error) => {  
        console.error('Database connection failed', err.stack);  
      });  
  });  



  
