# BalTara (Bali Nusantara)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Platform](https://img.shields.io/badge/platform-web-orange)

## Description
Bali Nusantara is a React-based web application designed to immerse users in the culture of Bali, Indonesia. It serves as a comprehensive digital guide for food reccomendations, featuring:
* **Curated Video Content:** Dynamic video feeds powered by the YouTube Data API.
* **Geographic Context:** Interactive maps highlighting location of the given food via Google Maps.
* **Culinary Heritage:** A catalog of traditional Balinese foods, sourced from a custom JSON data repository.

**Target Audience:** Tourists, cultural enthusiasts, and researchers looking for a centralized platform to explore Balinese culture, geography, and cuisine.

[**Live Production Site**](http://baltara.me)

## Table of Contents
- [Description](#description)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [License](#license)

## Architecture

**Core Framework:**
* **Frontend:** React (v18.3.1)
* **Routing:** React Router DOM (v6.x)
* **Build Tool:** Create React App

**Data Sources & APIs:**
* **Video Content:** Google YouTube Data API v3
* **Maps & Location:** Google Maps JavaScript API
* **Culinary Data:** Static JSON API (Hosted on GitHub)

**UI & Styling:**
* **Framework:** Bootstrap (v5.3.3) & React-Bootstrap
* **Components:** Swiper (Carousel), SweetAlert2 (Modals)
* **Visuals:** React Wavify

## Prerequisites
Ensure the following tools are installed in your development environment:
* **Node.js**: v18.x or v20.x (LTS recommended)
* **npm**: v9.x or higher
* **Git**

## Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Liment1/BalTara.git](https://github.com/Liment1/BalTara.git)
    cd BalTara
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

## Configuration

This application requires API keys for Google services.

1.  **Create Environment File:**
    ```bash
    touch .env
    ```

2.  **Add API Keys:**
    Open `.env` and add your keys (prefix `REACT_APP_` is required):
    ```env
    REACT_APP_YOUTUBE_API_KEY=your_youtube_key_here
    REACT_APP_MAPS_API_KEY=your_maps_key_here
    ```
    *(Note: The Food Data JSON source is public and does not require an API key.)*

## Usage

**Development Server**
Runs the app in development mode.
```bash
npm start