// "/main" route page

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message : "Welcome to the Main Page!"
    });


    // Uncomment the following lines to render a view instead of sending a text response using a view engine like EJS or Pug.
    // res.render("main", {
    //     title: "Main Page",
    //     message: "Welcome to the Main Page!",
    //     currentPage: 1,
    //     limit: 5
    // });
});

module.exports = router;
// This route can be used to render the main page of the application