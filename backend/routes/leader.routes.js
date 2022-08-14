import { PrismaClient } from '@prisma/client'
import { Router } from "express";

const prisma = new PrismaClient()
const router = Router()

router.get('/lider', async (req, res) => {
  try {
    let array = await prisma.lider.findMany()
    res.send(array)
  } catch {
    res.status(500).send('error')
  }
})
router.post('/lider', async (req, res) => {
  try {
    let name = req.body.name
    let age = +req.body.age
    let job = req.body.job
    let array = await prisma.lider.create({
      data: {
        name:name,
        age:age,
        job:job
      }
    })
    res.status(201).json(array)
    console.log(req.body);

  } catch (error) {
    console.error(error);
  }
})
router.put('/lider/:id', (req, res) => {
  try {
    let { name, age, job } = req.body
    let id = +req.params.id
    prisma.lider.update({
      where: {
        id
      }, data: {
        name,
        age,
        job
      }
    })
  } catch (error) {
    res.status(500).send('error')
  }
})
router.delete(`/lider/:id`, (req, res) => {
  try {
    let id = +req.params.id
    prisma.lider.delete({
      where: {
        id
      }
    })
  } catch (error) {
    res.status(500).send('error')
  }
})

export default router