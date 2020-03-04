import { NodesLinks } from '@nodes-links/sdk';

const nl = new NodesLinks({
  clientId: '',
  clientSecret: ''
});

const r = async (filePath: string) => {
  try {
    const data = await nl.utils.rawData.convertXerToZip(filePath);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

r('C:\\Users\\user\\Desktop\\CP3 - East Leg - L2.xer');
