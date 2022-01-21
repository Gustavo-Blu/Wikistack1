const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true,
        }
    },
    content: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.ENUM('opened', 'cloased')
    },
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    }
})
module.exports = {
  db, Page, User
}