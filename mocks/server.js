import { createServer, Model } from "miragejs";

createServer({
  models: {
    vans: Model
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple"
    })
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged"
    })
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury"
    })
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple"
    })
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury"
    })
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged"
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/vans", (schema, request) => {
      return schema.vans.all();
    })

    this.get("/vans/:id", (schema, request) => {
      const id = request.params.id;
      return schema.vans.find(id);
    })
  }
});