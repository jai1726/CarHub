const express = require('express');
const docsAPI=require('../controllers/docsAPI');

const DocsRouter=express.Router();

DocsRouter.get('/',docsAPI);
    
    




module.exports=DocsRouter;