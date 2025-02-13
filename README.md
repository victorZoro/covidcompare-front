# CovidCompare Dashboard

CovidCompare Dashboard is a web application built with React and Vite, designed to provide a comprehensive comparison of COVID-19 data. The application uses various libraries such as TailwindCSS, Axios, and ECharts for React to enhance the user experience.

## Prerequisites

- Node.js (version 18 or later)
- npm (version 7 or later)
- Docker (optional, for containerization)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/covidcompare-dashboard.git
    cd covidcompare-dashboard
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

## Development

To start the development server, run:

```sh
npm run dev
```

The application will be available at `http://localhost:3000`.

## Build

To build the application for production, run:

```sh
npm run build
```

The built files will be in the `dist` directory.

## Preview

To preview the production build, run:

```sh
npm run preview
```

The application will be available at `http://localhost:4173`.

## Linting

To lint the code, run:

```sh
npm run lint
```

## Formatting

To format the code, run:

```sh
npm run format
```

## Docker

To run the application in a Docker container:

1. Build the Docker image:

    ```sh
    docker-compose build
    ```

2. Run the Docker container:

    ```sh
    docker-compose up
    ```

The application will be available at `http://localhost:4173`.

## Configuration

The application configuration is managed by `vite.config.ts`. You can change the server port and other settings there.
