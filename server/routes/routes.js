const Routes = require('express');
const pg = require('../modules/pg')
const config = require('config')
const router = new Routes();

router.get('/:id', async (req, res) => {
    try {
        pg.executeQuery(`SELECT name, date, quantity, distance, id FROM welbex LIMIT 10 OFFSET ${req.params.id * 10}`, (result1, error) => {
            if (error) {
                res.status(400).json({ message: `[ERROR] ${error}` })
                return
            }
            pg.executeQuery(`SELECT id FROM welbex`, (result, error) => {
                if (error) {
                    res.status(400).json({ message: `[ERROR] ${error}` })
                    return
                }
                return res.json({
                    array: result1.rows,
                    last_page: Math.ceil(result.rows.length / 10)
                })
            })
        });
    } catch (e) {
        console.log(e);
        res.send({ message: "server error" })
    }
})


module.exports = router;