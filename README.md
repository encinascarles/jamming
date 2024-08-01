# Jamming

Welcome to Jamming! This project is designed to help familiarize myself with the Spotify API and enhance my React skills. It allows users to search for songs, create playlists, and save them directly to their Spotify account.

## Live Demo

You can access the live demo of the project [here](https://jamming-2g3y.vercel.app/).

## Overview

Jamming is a simple yet powerful application that interacts with the Spotify API. It enables users to perform the following actions:

- Search for songs on Spotify
- Create custom playlists
- Save playlists to their Spotify account

## Features

- **Spotify API**: Utilized to fetch song data and manage playlists.
- **React**: Used to build a dynamic and responsive user interface.
- **CSS**: Styled the application to provide a clean and user-friendly experience.
- **Vercel**: Deployed the application for easy access and demonstration.

## Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- A Spotify account

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/jamming.git
    ```
2. Navigate to the project directory:
    ```sh
    cd jamming
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Setting Up Spotify API

To use the Spotify API, you need to set up a Spotify Developer account and create an application to get your client ID.

1. Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
2. Log in with your Spotify account and create a new application.
3. Add `http://localhost:3000` to the Redirect URIs in your application settings.
4. Note down the client ID provided by Spotify.

Create a `.env` file in the project root and add your Spotify client ID:
```sh
REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
```

### Running the Application

To start the development server, run:
```sh
npm start
```
or
```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learnings

This project was primarily built as a learning exercise. Here are some of the key areas I focused on:

- **Spotify API**: Understanding how to interact with the Spotify API for searching songs and managing playlists.
- **React**: Enhancing skills in building interactive and responsive UI components.
- **CSS**: Learning to style components effectively for a better user experience.
- **Deployment**: Deploying a React application using Vercel.

## Contributing

Since this project is meant for learning purposes, contributions are not expected. However, if you have suggestions or improvements, feel free to open an issue or submit a pull request.
