const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Ensure the uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// CORS: Allow requests from multiple frontend ports (common React/Vite ports)
app.use(cors({
  origin: [
    'http://localhost:3000',    // Create React App
    'http://localhost:5173',    // Vite
    'http://localhost:8080',    // Your current setting
    'http://localhost:4000',    // Alternative port
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Serve static files with proper headers
app.use('/uploads', express.static(uploadsDir, {
  setHeaders: (res, path) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
}));

// Multer setup with file validation
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ 
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Check if file is an image
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Upload route with better error handling
app.post('/upload', upload.array('images'), (req, res) => {
  try {
    console.log('Upload request received');
    console.log('Files:', req.files);
    
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded.' });
    }

    const imagePaths = req.files.map(file => `http://localhost:${PORT}/uploads/${file.filename}`);
    console.log('Images uploaded successfully:', imagePaths);
    
    res.json({ uploaded: imagePaths });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Image upload failed.' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  res.status(500).json({ error: error.message });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});