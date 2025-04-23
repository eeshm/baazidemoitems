#  Baaz Bikes
A fully responsive, reusable Inventory Table built using Next.js, TypeScript, TailwindCSS, and Redux Toolkit. 

##  Project Overview
1. A reusable Table component that supports:

    _Column-wise sorting (asc/desc icons always visible)
    _Column-wise filtering (search in columns)
    _Pagination (dynamic per page)
    _Responsive design (mobile + desktop friendly)

2. Dynamic API integration to fetch live inventory data from:
    _https://dev.electorq.com/dummy/inventory

3. Efficient state management using Redux Toolkit.

4. Designed to handle large datasets smoothly.

## Setup Instructions
Clone the repository

bash
Copy
Edit
git clone <your-repo-url>
cd <your-project-folder>
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
Open http://localhost:3000 to view it in your browser.


## Features Implemented

1. Reusable Table - A generic table component that accepts any dataset and column definitions.
2. Pagination - Navigate through multiple pages of inventory data.
3. Sorting - Clickable column headers with ascending (↑) and descending (↓) sorting functionality.
4. Filtering - Search functionality per column to filter table results.
5. Redux Integration - Global state management using Redux Toolkit (createAsyncThunk, createSlice).
6. TypeScript Strict Typing	- Strong typing across components, APIs, and Redux slices.
7. API Proxying	- Handled external API errors and network issues via Next.js API routes.
8. Responsive UI - Mobile-first design with TailwindCSS, works on all screen sizes.
9. Code Quality - Modular, clean, and scalable folder structure and reusable hooks/components.


# Baaz Bikes

A fully responsive, reusable Inventory Table built using Next.js, TypeScript, TailwindCSS, and Redux Toolkit.

## Project Overview

### Features

1. A reusable Table component that supports:
    * Column-wise sorting (asc/desc icons always visible)
    * Column-wise filtering (search in columns)
    * Pagination (dynamic per page)
    * Responsive design (mobile + desktop friendly)

2. Dynamic API integration to fetch live inventory data from:
    * https://dev.electorq.com/dummy/inventory

3. Efficient state management using Redux Toolkit.

4. Designed to handle large datasets smoothly.

## Setup Instructions

### Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 to view it in your browser.

## Features Implemented

### Core Features

1. Reusable Table - A generic table component that accepts any dataset and column definitions.
2. Pagination - Navigate through multiple pages of inventory data.
3. Sorting - Clickable column headers with ascending (↑) and descending (↓) sorting functionality.
4. Filtering - Search functionality per column to filter table results.

### Technical Features

1. Redux Integration - Global state management using Redux Toolkit (createAsyncThunk, createSlice).
2. TypeScript Strict Typing - Strong typing across components, APIs, and Redux slices.
3. API Proxying - Handled external API errors and network issues via Next.js API routes.
4. Responsive UI - Mobile-first design with TailwindCSS, works on all screen sizes.
5. Code Quality - Modular, clean, and scalable folder structure and reusable hooks/components.

## Tech Stack

* Next.js
* TypeScript
* TailwindCSS
* Redux Toolkit
* Axios
