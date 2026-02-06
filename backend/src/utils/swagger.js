const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Advanced To-Do API",
    version: "0.1.0",
    description: "API documentation for the Advanced Android To-Do app"
  },
  servers: [{ url: "/" }],
  paths: {
    "/api/auth/signup": { post: { summary: "Create account" } },
    "/api/auth/login": { post: { summary: "Login" } },
    "/api/tasks": { get: { summary: "List tasks" }, post: { summary: "Create task" } },
    "/api/tasks/{id}": { put: { summary: "Update task" }, delete: { summary: "Delete task" } }
  }
};

module.exports = { swaggerSpec };
