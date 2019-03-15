import SettingsFactory from 'data/SettingsFactory';
import HapiFactory from 'server/HapiFactory';

async function main() {
  const settings = new SettingsFactory().create();
  const server = new HapiFactory(settings).create();

  await server.start();
}

main();
