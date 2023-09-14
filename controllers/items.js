const Item = require("../models/Item");
const path = require("path");
const asyncWrapper = require("../middleware/asyncWrapper");


// ------ Get and Upload Resume ------ //
const getResume = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (error) {
            console.log(error);
        }
};

const addResume = asyncWrapper(async (req, res) => {
    const { name } = req.body;
    const file = req.file.path;
    const item = await Item.create({name, file});
    res.status(201).json({item});
});


// ------ Get and Upload Certificates ------ //
const getCert = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json({items});
    } catch (error) {
            console.log(error);
        }
};

const addCert = asyncWrapper(async (req, res) => {
    const { name } = req.body;
    const file = req.file.path;
    const item = await Item.create({name, file});
    res.status(201).json({item});
});

module.exports = {
    getResume,
    addResume,
    getCert,
    addCert
};