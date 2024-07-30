const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Path to the JSON file
const projectsFilePath = path.join(__dirname, 'projects.json');

// Dynamically resolve the image folder path relative to the project root
const imgFolderPath = path.resolve(__dirname, '../src/components/assets/img');

// Ensure the upload directory exists
fs.mkdirSync(imgFolderPath, { recursive: true });

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, imgFolderPath); // Set the destination folder for uploads
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use the original filename
    }
});

const upload = multer({ storage: storage });

// Helper function to read data from JSON file asynchronously
const readProjectsFromFile = async () => {
    try {
        const data = await fs.promises.readFile(projectsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading projects file:', err);
        return [];
    }
};

// Helper function to write data to JSON file asynchronously
const writeProjectsToFile = async (projects) => {
    try {
        const jsonString = JSON.stringify(projects, null, 2);
        await fs.promises.writeFile(projectsFilePath, jsonString, 'utf8');
    } catch (err) {
        console.error('Error writing to projects file:', err);
    }
};

// Route to handle file uploads
app.post('/api/upload', upload.array('files'), (req, res) => {
    if (!req.files) {
        return res.status(400).json({ message: 'No files were uploaded.' });
    }
    res.status(200).json({
        message: 'Files uploaded successfully',
        files: req.files
    });
});

// Route to add a new project
app.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        const projects = await readProjectsFromFile();
        projects.push(project);
        await writeProjectsToFile(projects);
        res.status(201).json({
            message: 'Project added successfully',
        });
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get all projects
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await readProjectsFromFile();
        res.status(200).json(projects);
    } catch (err) {
        console.error('Error processing request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
