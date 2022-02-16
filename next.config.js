const path = require("path");

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    loader: "custom",
    path: "/",
  },
};
