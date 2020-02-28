import { NodesLinks } from '@nodes-links/sdk';

const nl = new NodesLinks({
  clientId: '6td4fmhpt1urdg2mhsahh4kugf',
  clientSecret: 'l25m8poplh5nk7j35qe6tf8s8mq7tbo045h1rtil8mt87j81ns8'
});

const r = async (filePath: string) => {
  try {
    const data = await nl.utils.rawData.uploadXer(filePath, 'PPv0pB9plMQ8DCO', 'new version from sdk');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

r('C:\\Users\\user\\Desktop\\test.xer');
