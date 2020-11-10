import { createServer } from "miragejs"

const movies = [
    {
        name: "Avenger EndGame",
        Release_Date: "10-12-2019",
    },
    {
        name: 'Social Network',
        Release_Date: "10-9-2011"
    }
];

export function makeServer() {
  let server = createServer({

    routes() {
      this.namespace = "api"

      this.get("/movies", (schema) => {
        return movies
      })
    },
  })

  return server
}