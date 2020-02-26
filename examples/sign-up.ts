import { NodesLinks } from '@nodes-links/sdk';

const nl = new NodesLinks({});

const signUp = async (firstname: string, surname: string, email: string, password: string) => {
  try {
    const signUpResponse = await nl.authentication.signUp(firstname, surname, email, password);
    console.log(signUpResponse.data);
  } catch (err) {
    console.error(err);
  }
};

signUp('Johnz100', 'Smith', 'vasos+z100@nodeslinks.com', 'QAZwsx_123456');
