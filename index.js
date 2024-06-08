    const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/data', (req, res) => {
    fs.readFile('10701559008320140323R.txt', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        const lines = data.split('\n');
        const first10 = lines.slice(0, 11).map(line => {
            return {
                code: line.substring(0, 11).trim(),
                name: line.substring(11, 41).trim(),
                surname: line.substring(41, 71).trim(),
                address: line.substring(101, 131).trim()
            };
        });

        res.json(first10);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
