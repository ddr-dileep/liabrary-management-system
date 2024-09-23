import { Options } from "swagger-jsdoc";
import { userSwagger } from "../swagger/user.swagger";

const swaggerOptions: Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "LMS API Documentation",
      version: "1.0.0",
      description:
        "API documentation for LMS A library management system (LMS) is a software program that helps manage a library's operations by automating tasks like tracking books, issuing and reissuing books, and calculating fees",
    },
    servers: [
      {
        url: "http://localhost:8080/api/v1",
        description: "Development environment",
      },
      {
        url: "https://auth-api-with-swagger.onrender.com/api-docs/api/v1",
        description: "Production environment",
      },
    ],
    paths: {
      ...userSwagger,
    },
    tags: [
      {
        name: "Auth",
        description:
          "APIs related to user operations (e.g., registration, login, get-user)",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: [],
};

export default swaggerOptions;
