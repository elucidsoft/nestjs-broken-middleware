const express = require('express');
const app = express();

app.post('/express', async (req, res) => {
  console.log('Inside express');
  req.on('close', () => console.log('-- Close --'));

  await new Promise((resolve) => setTimeout(resolve, 60000));
  res.send('hello from express');
});

app.listen(3090, () => {
  console.log('Listening on 3090');
});
