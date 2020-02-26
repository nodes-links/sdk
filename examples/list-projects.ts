import { NodesLinks } from '@nodes-links/sdk';

const run = async () => {
  try {
    const nl = new NodesLinks({
      clientId: '',
      clientSecret: ''
    });

    const r = await nl.projects.list();
    console.log(r);
  } catch (err) {
    console.error(err);
  }
};

run();
