# Contributing to ObserVantage

Thank you for your interest in contributing to ObserVantage! This guide will help you get your development environment set up.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Python (version 3.8 or higher recommended)
- Pip (Python package installer, usually comes with Python)
- Node.js (version 16.x or higher recommended)
- npm (Node package manager, comes with Node.js)

## Setup Instructions

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/cabbagec2hlbGwK/ObserVantage.git
    cd ObserVantage
    ```

2.  **Create and Activate a Python Virtual Environment:**
    It's highly recommended to use a virtual environment to manage project dependencies.
    ```bash
    # For Windows
    python -m venv env
    .\env\Scripts\activate

    # For macOS/Linux
    python3 -m venv env
    source env/bin/activate
    ```

3.  **Install Python Dependencies:**
    Install all the required Python packages listed in `requirements.txt`.
    ```bash
    pip install -r requirements.txt
    ```

4.  **Install Node.js Dependencies for Tailwind CSS:**
    Navigate to the `theme/static_src` directory and install the Node.js packages.
    ```bash
    cd theme/static_src
    npm install
    cd ../.. 
    ```
    *(This brings you back to the project root)*

5.  **Set up NPM_BIN_PATH (if needed):**
    If you encounter issues with `django-tailwind` finding `npm`, you might need to set the `NPM_BIN_PATH` in `observantage/settings.py`.
    Find your npm executable path (e.g., by running `where npm` on Windows or `which npm` on macOS/Linux) and update the setting:
    ```python
    # observantage/settings.py
    NPM_BIN_PATH = r"C:\path\to\your\npm.cmd" # Example for Windows
    # NPM_BIN_PATH = "/usr/local/bin/npm" # Example for macOS/Linux
    ```
    *(Ensure this path is correct for your system if you uncomment it).*

6.  **Run Database Migrations:**
    Apply any pending database migrations.
    ```bash
    python manage.py migrate
    ```

7.  **Start the Development Servers:**
    You need to run two separate processes for development:
    *   **Tailwind CSS Build Process:** This watches for changes in your template files and recompiles the CSS.
        ```bash
        python manage.py tailwind start
        ```
    *   **Django Development Server:** This runs your Django application.
        ```bash
        python manage.py runserver
        ```
    Open these in separate terminal windows/tabs.

8.  **Access the Application:**
    Once both servers are running, you can access the application in your web browser, typically at `http://127.0.0.1:8000/`.

## Making Changes

-   **Frontend (Tailwind CSS & Templates):**
    -   Modify HTML templates in the `theme/templates/` directory (or other app template directories).
    -   Use Tailwind CSS utility classes directly in your HTML.
    -   The `tailwind start` process will automatically rebuild `theme/static/css/dist/styles.css`.
-   **Backend (Django/Python):**
    -   Modify Python files in the `observantage/` or `theme/` (or other app) directories.
    -   The Django development server will usually auto-reload on Python file changes.

## Further Information

-   For more details on `django-tailwind`, refer to its [official documentation](https://django-tailwind.readthedocs.io/).
-   For D3.js, see the [official D3.js website](https://d3js.org/).

Happy contributing!