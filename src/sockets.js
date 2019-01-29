module.exports = io => {
    io.on('connection', socket => {
        console.log('A new socket is connected!');
    });
}