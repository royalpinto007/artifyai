# ArtifyAI

## Description

Briefly describe what your project does.

## Installation

### Prerequisites

- Python
- Node.js

### Setting Up the Backend (FastAPI)

1. Clone the repository:

   ```
   git clone https://github.com/royalpinto007/artifyai.git
   cd artifyai
   ```
2. Navigate to the `api` directory:

   ```
   cd api
   ```
3. Create a virtual environment (optional but recommended):

   ```
   python -m venv venv
   source venv/bin/activate  # (On Windows use- `venv\Scripts\activate`)
   ```

4. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

5. Create a `.env` file in the root directory with the following content:

   ```
   AUTH_TOKEN=<your-auth-token>
   ```

   Replace `<your-auth-token>` with your authentication token.

6. Run the FastAPI backend:

   ```
   uvicorn main:app --reload
   ```

   This will start the FastAPI server locally at `http://localhost:8000`.

### Setting Up the Frontend (React)

1. Navigate to the `client` directory:

   ```
   cd client
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the React development server:

   ```
   npm start
   ```

   This will start the React app locally at `http://localhost:3000`.

## Usage

- Open your browser and go to `http://localhost:3000`.
- Enter a prompt in the input field and click on the "Generate" button to generate an image.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. You can also open an issue to report bugs or suggest improvements.

