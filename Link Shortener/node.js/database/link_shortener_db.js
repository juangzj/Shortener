import { Sequelize } from 'sequelize'

//New instance of sequelize
const link_shortner = new Sequelize('link_shortener', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

//export database
export default link_shortner