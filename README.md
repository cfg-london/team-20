# team-20


## Development

### Frontend

To start the frontend development server:

```
cd frontend
NODE_ENV=development npm start
```

When done, run `npm run build` to compile and bundle the frontend.

### Backend

To start the backend server, in development mode:

```
cd backend
NODE_ENV=development npm start
```

### Setting up the database
Database name: jp
Table name: surveys
Table schema:
    CREATE TABLE surveys (
        country text,
        information jsonb
    )



