// 引入 Express 框架
const express = require('express');
const app = express();
const port = 3000;

// 定义根路由
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// 定义 /compliance-training 路由
app.get('/compliance-training', (req, res) => {
    res.send('Compliance Training Page');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});