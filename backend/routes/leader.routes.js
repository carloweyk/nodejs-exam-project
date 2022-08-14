import { Router } from "express";
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()


router.post('/lider', async (req, res) => {
  try {
    let name = req.body.name
    let age = req.body.age
    let job = req.body.job
    let array = await prisma.lider.create({
      data: {
        name,
        age,
        job
      }
    })
    res.status(201).json(array)
    console.log(req.body);

  } catch (error) {
    console.error(error);
  }
})

router.get('/lider', async (req, res) => {
  try {
    let array = await prisma.lider.findMany()
    res.send(array)
  } catch {
    res.status(500).send('error')
  }
})

router.put('/lider/:id', async (req, res) => {
  try {
    let { name, age, job } = req.body
    let id = +req.params.id
    await prisma.lider.update({
      where: {
        id
      }, data: {
        name,
        age,
        job
      }
    })
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send('error')
  }
})
router.delete(`/lider/:id`,async (req, res) => {
  try {
    let id = +req.params.id
    await prisma.lider.delete({
      where: {
        id
      }
    })
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send('error')
  }
})

export default router