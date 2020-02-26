import { NodesLinks } from '@nodes-links/sdk';

const run = async (name: string, description: string) => {
  try {
    const nl = new NodesLinks({
      clientId: '',
      clientSecret: ''
    });

    const r = await nl.projects.create(name, description);
    console.log(r);
  } catch (err) {
    console.error(err);
  }
};

run('My First Project z3', 'This is my first Project');
