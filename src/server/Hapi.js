import hapi from 'hapi';

class HapiServer {
  constructor(settings, occurrenceController) {
    this.settings = settings;
    this.occurrenceController = occurrenceController;
  }

  async start() {
    const server = hapi.server({
      port: this.settings.server.port,
    });

    await server.route(this.createServerRoutes());
    await server.start();
  }

  createServerRoutes() {
    const routes = [
      {
        method: 'GET',
        path: '/healthcheck',
        handler: this.healthCheckHandler.bind(this),
      },
      {
        method: 'POST',
        path: '/occurrence',
        handler: this.occurrenceController.create.bind(this.occurrenceController),
      },
    ];

    return routes;
  }

  async healthCheckHandler(request, h) {
    return h.response({ online: true }).code(200);
  }
}

export default HapiServer;
