# Hoaxify

> First attempt to use TDD (Test Driven Development) in Node.js.

Hoaxify is a backend application built with Node.js and Express, demonstrating the implementation of TDD principles. It uses SQLite for the database and Sequelize as the ORM.

## Technologies Used

-   **Node.js**: Runtime environment.
-   **Express**: Web framework for Node.js.
-   **Sequelize**: Promise-based Node.js ORM.
-   **SQLite**: Self-contained, serverless, zero-configuration, transactional SQL database engine.
-   **Jest**: JavaScript Testing Framework.
-   **Bcrypt**: Library to help hash passwords.

## Getting Started

### Prerequisites

-   Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd hoaxify
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

To start the server in development mode with `nodemon`:

```bash
npm start
```

The server runs on `http://localhost:3000` (or the configured port).

## Testing

This project uses **Jest** for testing. To run the tests:

```bash
npm test
```

This runs jest in watch mode.

## API Reference

### User Registration

Files: `src/user/UserRouter.js`, `src/user/UserService.js`

*   **URL**: `/api/v1/users`
*   **Method**: `POST`
*   **Description**: Registers a new user.
*   **Request Body**:
    ```json
    {
      "username": "user1",
      "email": "user1@mail.com",
      "password": "Password1"
    }
    ```
*   **Success Response**:
    *   **Code**: 200 OK
    *   **Content**:
        ```json
        {
          "message": "User created"
        }
        ```

## Project Structure

```
hoaxify/
├── src/
│   ├── config/         # Database configuration
│   ├── user/           # User module (Model, Router, Service)
│   └── app.js          # Express app setup
├── _test_/             # Tests directory
├── index.js            # Entry point
├── package.json        # Dependencies and scripts
└── readMe.md           # Project documentation
```
