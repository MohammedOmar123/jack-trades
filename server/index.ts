import sequelize from "./database/connection";
import app from './app'

const port = app.get('port');

(async () => {
    try {
      await sequelize.authenticate()
      app.listen(port, () => console.log(`Server is running on http://localhost:${ port }`))
    } catch (error) {        
      console.log(`Error on synchronizing Database: ${error}`);
    }
})();