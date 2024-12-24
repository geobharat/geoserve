# 🌍 Geoserve

> [!WARNING]  
> Library is under construction

**JavaScript Wrapper for GeoServer REST APIs** providing Sync, Async, and CLI support 🚀

`geoserve` is a powerful JavaScript package that simplifies communication with GeoServer by leveraging its REST API endpoints. Whether you're building geospatial applications or managing GeoServer configurations, `geoserve` makes the process seamless and developer-friendly. ✨

---

## 📦 Features

- **Sync & Async API Support**: Flexible methods to suit your application’s needs.
- **CLI Interface**: Easily interact with GeoServer right from your terminal.
- **TypeScript Ready**: Fully typed for better IntelliSense and developer experience.
- **Comprehensive Testing**: Reliable and well-tested with Jest.
- **Developer Tools**: Prettier and ESLint integration for consistent and clean code.

---

## 🛠️ Tech Stack

- **Node.js**: The runtime for building scalable and efficient applications.
- **TypeScript**: Ensuring type safety and code reliability.
- **Jest**: For rigorous testing and code coverage.
- **pnpm Workspace**: Manage your monorepo efficiently.
- **Prettier & ESLint**: Keep your code clean and consistent.

---

## 🚀 Installation

Install `geoserve` using your favorite package manager:

```bash
npm install geoserve
# or
yarn add geoserve
# or
pnpm add geoserve
```

---

> [!NOTE]  
> We'll add examples soon

<!-- ## 📝 Usage

### Import the Library

```typescript
import { Geoserve } from 'geoserve';

const geoserve = new Geoserve({
  baseUrl: 'http://localhost:8080/geoserver',
  username: 'admin',
  password: 'geoserver',
});
``` -->
<!-- 
### Example: Fetching Workspaces

```typescript
async function getWorkspaces() {
  const workspaces = await geoserve.getWorkspaces();
  console.log(workspaces);
}

getWorkspaces();
``` -->

### CLI Usage 🌟

Run commands directly from your terminal:

```bash
geoserve get-workspaces --url "http://localhost:8080/geoserver" --username "admin" --password "geoserver"
```

---

## 🧪 Testing

Run the test suite with Jest:

```bash
pnpm test
```

---

## 🧹 Code Quality

Ensure your code is properly formatted and linted:

```bash
pnpm format
pnpm lint
```

---

## 📖 Documentation

For detailed usage and API references, check out the [Documentation](#).


---
## 🤝 Contributing

We welcome contributions! Read more about contributing [guidelines](CONTRIBUTING.md)

---


## 📜 License

This project is licensed under the [Apache License](LICENSE).

---

## 🌟 Acknowledgments

Special thanks to the open-source community for their amazing tools and contributions! ❤️