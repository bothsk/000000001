const path = require("path");
process.env.NODE_ENV = "both";
const Sdk = require("./sdk");

const LISTENPORT = 3000;

module.exports = (async (SDK) => {
  try {
    global.SDK = SDK;

    process.on("SIGINT", function() {
      SDK.shutdown();
      process.exit();
    });

    await SDK.init("0", "api");

    const options = {
      controllers: path.join(__dirname, "./api"),
      loglevel: "debug",
      strict: true,
      router: true,
      validator: true,
      customErrorHandling: true,
      port: LISTENPORT,
      docs: {
        apiDocs: "/api-doc",
        apiDocsPrefix: "/api",
        swaggerUi: "/docs",
        swaggerUiPrefix: "/api",
      },
    };

    const app = await SDK.initApi(__dirname + "/api.yaml", options);
    return await SDK.setApiRoutes();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})(new Sdk());
