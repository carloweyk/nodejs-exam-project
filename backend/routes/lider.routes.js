import { allLider, createLider, updateLider, deleteLider } from "../service/lider.service.js";
import { Router } from "express";

const router = Router()

router.get('/lider', async (req, res) => {
    try {
        let array = await allLider()
        res.json(array)
    } catch {
        res.status(500).send('error')
    }
})
router.post('/lider', async (req, res) => {
    try {
        console.log(req.body);
        let { name, age, job } = req.body
        let array = await createLider(name, age, job)
        res.json(array)

    } catch (error) {
        console.error(error);
    }
})
router.put('/lider/:id', (req, res) => {
    try {
        let id = +req.params.id
        updateLider(id, name, age, job)
    } catch (error) {
        res.status(500).send('error')
    }
})
router.delete('/lider/:id', (req, res) => {
    try {
        deleteLider(id)
    } catch (error) {
        res.status(500).send('error')
    }
})

export default router