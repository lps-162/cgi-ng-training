

app.get('/api/employees', (req, res) => {
    
});

app.get('*', (req, res) => {
    res.render('index.html')
});

