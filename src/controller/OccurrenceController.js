function mapOccurrenceFromRequest(request) {
  return {
    timestamp: request.payload.timestamp,
    long: request.payload.long,
    lat: request.payload.lat,
  };
}

class OccurrenceController {
  constructor(createOccurrenceInteractor) {
    this.createOccurrenceInteractor = createOccurrenceInteractor;
  }

  async create(request, h) {
    try {
      const occurrence = mapOccurrenceFromRequest(request);
      await this.createOccurrenceInteractor.execute(occurrence);
    } catch (err) {
      return h.response(err).code(500);
    }

    return h.response().code(200);
  }
}

export default OccurrenceController;
