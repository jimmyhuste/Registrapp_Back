const { PORT} =  require("./config");
const app = require("./app")

app.listen(PORT, ()=> {
    console.log(`Backend is listening on port:  ${ PORT }`);
});