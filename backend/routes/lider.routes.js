import { allLider, createLider, updateLider, deleteLider } from "../service/lider.service.js";
import { Router } from "express";

const router = Router()

router.get('/lider', async (req, res) => {
    try {
        let array = await allLider()
        res.send(array)
    } catch {
        res.status(500).send('error')
    }
})
router.post('/lider', async (req, res) => {
    try {

        let { name, age, job } = req.body
        let array = await createLider(name, age, job)
        res.send(array)
        console.log(req.body);

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