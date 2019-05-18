import Hapi from 'server/Hapi';
import CreateOccurrence from 'interactors/CreateOccurrence';
import OccurrenceController from 'controller/OccurrenceController';

class HapiFactory {
  constructor(settings) {
    this.settings = settings;
  }

  create() {
    const createOccurrenceInteractor = new CreateOccurrence();
    const occurrenceController = new OccurrenceController(createOccurrenceInteractor);
    return new Hapi(this.settings, occurrenceController);
  }
}

export default HapiFactory;
