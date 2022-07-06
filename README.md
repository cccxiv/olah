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

Next, you need to generate the initial configuration file by running `olah init` which will create `olah.yaml` inside your current working directory. Example:

```
$ olah init
Olah configuration file has been created.
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

### `olah init`

Initialize and generate Olah configuration file. This will produce `olah.yaml` that will be used to start Olah server. 

By default, if you try to initialize the config again when there is already `olah.yaml` on the directory, it will rename the existing configuration and create the new one. For example:

```
$ olah config init
NOTICE: olah.yaml already exist and renamed to olah.yaml.1656947960
New Olah configuration file has been created.
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

