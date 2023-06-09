const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}));
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}));

app.use(cors());
// In-memory admin credentials (Replace with your actual admin credentials or connect to a database)
const adminCredentials = {
    username: 'IdrisAdmin',
    password: 'Idrisdgr8',
};

// Route to handle admin login
app.post('/admin/auth', (req, res) => {
    const { username, password } = req.body;
    // Check if the admin credentials are correct
    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Generate a unique token for the admin session
        const token = crypto.randomBytes(16).toString('hex');
        // Send the admin panel link as a response
        res.json({ token });
    } else {
        // Return error for invalid credentials
        res.status(401).json({ error: 'Invalid credentials' });
    }
});
const projectsPath = "./Projects.json";

// Route to handle project posting
app.post("/projects", async (req, res) => {
    const projData = req.body;
    try {
        var data = fs.readFileSync(projectsPath)
        const object = await JSON.parse(data);

        object.push({ ...projData, id: object.length + 1, });
        const newData = JSON.stringify(object);

        fs.writeFile(projectsPath, newData, err => {
            // Check for error
            if (err) throw err;
            console.log("New data added..");
        });
        res.status(201).json(object);
    } catch (error) {
        res.status(404).json({ error: error });
    }

});

// Route to get all the projects
app.get("/projects", async (req, res) => {
    try {
        var data = fs.readFileSync(projectsPath);
        var object = await JSON.parse(data);
        res.status(201).json(object);

    } catch (error) {
        res.status(404).json({ error: error });
    }
});

// Route to get a singular project values for updation
app.delete("/project", async (req, res) => {
    const { id } = req.params;
    try {
        var data = fs.readFileSync(projectsPath);
        var object = await JSON.parse(data);
        const project = object.filter((p) => p.id === id);
    } catch (error) {

    }
});

// To delete a specific project
app.delete("/project", async (req, res) => {
    const { id } = req.params;
    try {
        var data = fs.readFileSync(projectsPath);
        var object = await JSON.parse(data);

    } catch (error) {

    }
});

// Update existing project
app.patch("/project", async (req, res) => {
    const { id } = req.params;
    const newProjData = req.body;
    try {

    } catch (error) {

    }
});

app.get("/", (req, res) => {
    res.send("Hello");
    console.log("Hello!");
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
