module.exports = {
    getAllMemes: async (req, res, next) => {
        const db = req.app.get("db");
        const allMemes = await db.get_all_memes().catch(err => console.log(err))
        res.status(200).send(allMemes)
    }
}