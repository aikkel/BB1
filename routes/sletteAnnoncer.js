const { Sequelize, DataTypes } = require('sequelize');
const express = require('express');
const { sequelize } = require('../Database/db');
const Advert = require('../models/Advert')(sequelize);
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', function(req, res, next) {
    res.render('sletteAnnoncer', { title: 'Slette Annoncer' });
  });

  router.post('/delete', async (req, res) => {
    try {
        await Advert.destroy({
            where: {
                advertID: req.body.advertID
            }
        });
        res.json({ success: true });
    } catch (err) {
        res.json({ success: false });
    }
});

router.get('/:advertID', async (req, res) => {
    const advert = await getAdvertById(req.body.advertID);
    res.json(advert);
});

async function deleteFromAdvertTable(advertId) {
    try {
        const result = await Advert.destroy({
            where: {
                advertID: advertId
            }
        });

        return result > 0;
    } catch (error) {
        console.error('Failed to delete advert:', error);
        return false;
    }
}

async function getAdvertById(advertId) {
    try {
        const advert = await Advert.findOne({
            where: {
                advertID: advertId
            }
        });

        if (advert === null) {
            console.log('No advert found with the specified ID');
            return null;
        }

        return advert;
    } catch (error) {
        console.error('Failed to get advert:', error);
        return null;
    }
}

module.exports = router;