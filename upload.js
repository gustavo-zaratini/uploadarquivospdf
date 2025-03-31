const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// Configura o Multer para salvar os arquivos localmente
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + '-' + file.originalname.replace(/\s+/g, '_');
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Apenas PDFs são permitidos'));
    }
    cb(null, true);
  },
});

const handler = (req, res) => {
  if (req.method === 'POST') {
    upload.single('file')(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const fileUrl = '/uploads/' + req.file.filename;
      return res.status(200).json({ url: fileUrl });
    });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
