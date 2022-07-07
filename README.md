# Olah

Olah is created to provide easy-to-use config-based framework to build an internal tools to manage data of MySQL database server of your application.

## Getting Started

Make sure you have installed Node.js on your local machine. Then install Olah globally by running:

```
$ npm install olah -g
```

Test your Olah installation by running:

```
$ olah -v
Olah v0.0.2
```

Olah require MySQL database credentials in order to start which will be fetched from your machine environment variable as defined below.

| Key | Required | Description |
|--|--|--|
| `OLAH_DB_USER` | Yes | Username of the database user |
| `OLAH_DB_PASS` | Yes | Password of the database user |
| `OLAH_DB_NAME` | Yes | Name of the database | 
| `OLAH_DB_HOST` | Yes | Database host. Default: `localhost` |
| `OLAH_DB_PORT` | No | Database port. Default: `3306` |

You can set the environment variable on your machine profile or passed directly into `olah start` for this setup. Example:

```
$ OLAH_DB_USER=root OLAH_DB_PASS=1234 OLAH_DB_NAME=pet_store olah start
Starting olah server...
Olah server is ready and available at http://localhost:8470/
```

## Command Line Interface

### `olah --version`
Print Olah version. Example:

```
$ olah version
0.0.2
```

### `olah start`

Start Olah server.

## Roadmap
- User Authentication
- Docker support
- CRUD functionality
- User Roles
- Multiple database source
- More database support (PostgreSQL, MariaDB, etc.)

## License

This project is licensed under the [MIT License](LICENSE).

## Copyright

Copyright Olah Contributors.

