const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/gyms', (req, res) => {
    const gyms = [
        { id: 1, name: 'YMCA', price: '$1000 - $5000', amenities: 'Well Equipped', address: '100 Smart Street, Halifax, NS' },
        { id: 2, name: 'GoodLife Fitness', price: '$1200 - $4500', amenities: 'Cardio Equipment', address: '200 Fitness Ave, Halifax, NS' },
    ];
    res.json(gyms);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
