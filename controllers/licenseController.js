```js
const License = require('../models/License');

exports.createLicense = async (req, res) => {
  const { eaData } = req.body;
  const license = await License.create({
    userId: req.user.id,
    key: `EA-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
    eaData,
  });
  res.json(license);
};

exports.getLicenses = async (req, res) => {
  const licenses = await License.find({ userId: req.user.id });
  res.json(licenses);
};
```