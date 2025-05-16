Para usar o sqlite para ambiente de desenvolvimento 

yarn prisma init -> para mysql etc...

prisma init --datasource-provider sqlite --output ../generated/prisma   -> sqlite

@types/bcrypt 
@types/jsonwebtoken 

bcryptjs
jsonwebtoken


Typeorm

install typeorm --save
install reflect-metadata --save

e importe-o em algum lugar no local global do seu aplicativo (por exemplo em app.ts):

import "reflect-metadata"


Instalar um driver de banco de dados:

para MySQL ou MariaDB

npm install mysql --save(você mysql2também pode instalar)

para PostgreSQL ou CockroachDB

npm install pg --save

para SQLite

npm install sqlite3 --save


