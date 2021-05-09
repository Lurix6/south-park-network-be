const multer = require('multer');
const path = require('path');
const config = require('../../config/config.json');
const { FileHelpers } = require('../../common/helpers');

// eslint-disable-next-line consistent-return
function identifier(req, key) {
  // eslint-disable-next-line default-case
  switch (key) {
    case 'user':
      return req.user.userId;
    case 'chinpokomon':
      return req.body.name;
  }
}

// eslint-disable-next-line consistent-return
function staticPath(key) {
  // eslint-disable-next-line default-case
  switch (key) {
    case 'user':
      return config.filePath.folders.userAvatar;
    case 'chinpokomon':
      return config.filePath.folders.chinpokomonsAvatar;
  }
}

function uploader(key) {
  const items = path.join(config.filePath.staticFiles, staticPath(key));


  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, items);
    },
    filename: (req, file, cb) => {
      const name = identifier(req, key).toString();
      console.log(name)
      console.log(FileHelpers)

      if (FileHelpers.existsSync(path.join(items, `${name}.png`))) {
        FileHelpers.removeSync(path.join(items, `${name}.png`));
      }
      if (FileHelpers.existsSync(path.join(items, `${name}.jpg`))) {
        FileHelpers.removeSync(path.join(items, `${name}.jpg`));
      }
      if (FileHelpers.existsSync(path.join(items, `${name}.jpeg`))) {
        FileHelpers.removeSync(path.join(items, `${name}.jpeg`));
      }
      if (FileHelpers.existsSync(path.join(items, `${name}.gif`))) {
        FileHelpers.removeSync(path.join(items, `${name}.gif`));
      }
      if (FileHelpers.existsSync(path.join(items, `${name}.xlsx`))) {
        FileHelpers.removeSync(path.join(items, `${name}.xlsx`));
      }

      cb(null, name + path.extname(file.originalname).toLowerCase());
    },
  });

  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);

    if (ext.indexOf('jpg') !== -1
      || ext.indexOf('jpeg') !== -1
      || ext.indexOf('png') !== -1
      || ext.indexOf('gif') !== -1
      || file.mimetype.indexOf('spreadsheetml') !== -1
      || file.mimetype.indexOf('application') !== -1) {
      cb(null, true);
    } else {
      cb(new Error('File format should be PNG,JPG,JPEG'), false);
    }
  };

  const upload = multer({
    limits: { fieldSize: 25 * 1024 * 1024 },
    dest: items,
    storage,
    fileFilter,
  });

  return upload;
}

function UserUpload() {
  return uploader('user');
}

function ChinpokomonUpload() {
  return uploader('chinpokomon');
}

module.exports = {
  UserUpload,
  ChinpokomonUpload,
};
