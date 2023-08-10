This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Bia App

This is a sample app built using various technologies to demonstrate its features and showcase a clean project structure. The app is currently live on Vercel and can be accessed at https://bia-app-seven.vercel.app/.

## Development with SOLID Principles

This project has been developed following the SOLID principles, a set of five design principles that help ensure maintainability, scalability, and flexibility in software development. Here's how these principles were applied:

### Single Responsibility Principle (SRP)

Each component within the project is focused on a single responsibility. This ensures that components are more maintainable and easier to understand.

### Open/Closed Principle (OCP)

The codebase is designed to be open for extension but closed for modification. This is achieved through the use of interfaces allowing new features to be added without altering existing code. For instance, new themes or features can be introduced without changing core components.

### Liskov Substitution Principle (LSP)

It ensures that components built on top of abstractions can be replaced by their implementations without affecting the behavior of the application. For instance, various implementations of a theme can be swapped without breaking the app.

### Interface Segregation Principle (ISP)

Interfaces are designed with specific client needs in mind to avoid unnecessary dependencies. This prevents clients from being forced to implement methods they don't need. This approach leads to cleaner, more focused interfaces and reduces tight coupling between components.

### Dependency Inversion Principle (DIP)

High-level modules are not dependent on low-level modules; both should depend on abstractions. This principle is applied by using dependency injection and inversion of control to manage component relationships.

By adhering to these SOLID principles, the project's architecture is designed to be modular, extensible, and resilient to change. This approach ensures that the codebase remains clean and maintainable as the project evolves, making it easier to add new features, fix bugs, and collaborate with other developers.

## Technologies Used

The following libraries were carefully selected and added to the project to contribute to its functionality, user experience, and maintainability.

### TypeScript

TypeScript is utilized for adding static typing to JavaScript. It enhances code quality and reduces bugs by detecting errors during development, leading to more robust and maintainable codebases.

### Styled Components

Styled Components is used for styling the app's components. It enables developers to write CSS-in-JS and offers a more intuitive way to manage component-specific styles while benefiting from the power of JavaScript.

### Next Themes

The next-themes package is integrated to provide users with a seamless way to switch between light and dark themes. It enhances the user experience by allowing them to customize the app's appearance based on their preference.

### Axios

Axios is employed to handle HTTP requests and interact with external APIs. It provides a simple and efficient way to manage data fetching and communication between the app and external services.

### Font Awesome

Font Awesome is used to include visually appealing icons in the app's user interface. Icons are an essential part of modern web design, providing a clear and intuitive representation of various actions and elements.

## Project Structure

-   pages: Contains Next.js page components that define the app's routes.
-   components: Houses reusable React components used throughout the app.
-   utils: Includes utility functions and helpers.
-   next.config.js: Configuration for Next.js.
-   tsconfig.json: TypeScript configuration file.
-   package.json: Lists project dependencies and scripts.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
