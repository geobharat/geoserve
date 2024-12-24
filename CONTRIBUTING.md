# 🤝 Contributing to Geoserve

We welcome contributions! Follow these steps to get started:

1. **Fork the repository**: Create your own copy of the repository on GitHub.
2. **Create a feature branch**: Use the following command:

   ```bash
   git checkout -b feature-name
   ```

3. **Commit your changes**: Make your edits and commit them with a descriptive message:

   ```bash
   git commit -m 'Add a new feature'
   ```

4. **Push to the branch**: Push your changes to your forked repository:

   ```bash
   git push origin feature-name
   ```

5. **Open a pull request**: Submit your changes for review.

---

## 🛠️ Project Setup Guide

### Setting Up the `docs` Folder

1. Navigate to the `docs` folder:

   ```bash
   cd docs
   ```

2. Create and activate a virtual environment:

   ```bash
   virtualenv venv && activation command
   ```

3. Install all dependencies:

   ```bash
   pip install -r requirements.txt
   ```

---

### Setting Up the `packages` Folder

1. Navigate to the root folder (`geoserve`):

   ```bash
   cd geoserve
   ```

2. Install all packages while excluding the `docs` folder:

   ```bash
   pnpm i --filter '!docs'
   ```

> 🎉 **Congrats!** All setup is complete. Now it's time to run the docs and packages.

---

## 🚀 Running the Project

To run everything simultaneously, use the following command:

```bash
pnpm dev
```

---

## 📦 Building the Project

To build all folders (`docs` and `geoserve`), use:

```bash
pnpm build
```

---

Thank you for contributing to Geoserve! 🌟

