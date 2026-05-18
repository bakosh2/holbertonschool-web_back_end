import express from 'express';
import mapRoutes from './routes/index';

const app = express();
const PORT = 1245;

mapRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

export default app;
