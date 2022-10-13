import { sequelize } from "./database/connection";
import app from './app'

const port = app.get('port');

(async () => {
    try {
      await sequelize.authenticate()
      app.listen(port, () => console.log(`server is listening on port ${port}`))
    } catch (error) {        
      console.log(error);
    }
})();