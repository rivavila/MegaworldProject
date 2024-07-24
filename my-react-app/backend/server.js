const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Path to the JSON file
const projectsFilePath = path.join(__dirname, 'projects.json');

// Helper function to read data from JSON file asynchronously
const readProjectsFromFile = async () => {
    try {
        const data = await fs.promises.readFile(projectsFilePath, 'utf8');
        console.log('Read data:', data); // Debugging line
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
        console.log('Writing data:', jsonString); // Debugging line
        await fs.promises.writeFile(projectsFilePath, jsonString, 'utf8');
        console.log('Data successfully written to file.');
    } catch (err) {
        console.error('Error writing to projects file:', err);
    }
};

// Route to add a new project
app.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        console.log('Received project:', project); // Debugging line
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
