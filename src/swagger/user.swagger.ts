export const userSwagger = {
  "/api/v1/user/register": {
    tag: "User",
    post: {
      tags: ["Auth"],
      summary: "Register a new user",
      description: "API to register a new user with required details.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "johndoe",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
                email: {
                  type: "string",
                  example: "johndoe@example.com",
                },
              },
            },
          },
        },
      },
      responses: {
        "201": {
          description: "User registered successfully",
        },
        "400": {
          description: "Bad request (validation errors or missing data)",
        },
      },
    },
  },
  "/api/v1/user/login": {
    post: {
      tags: ["Auth"],
      summary: "Login user",
      description: "API to loginuser with required details.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "johndoe",
                },
                password: {
                  type: "string",
                  example: "Password123!",
                },
              },
            },
          },
        },
      },
      responses: {
        "200": {
          description: "User Login successfully",
        },
        "400": {
          description: "Bad request (validation errors or missing data)",
        },
      },
    },
  },
};