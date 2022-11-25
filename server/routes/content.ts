import { Router, Request, Response } from 'express'
import { asyncFunc } from '../utils/asyncFunc'
import { packages, cities } from '../data/content.json'

const router: Router = Router()

/* Sending all the packages a user can buy */
router.get('/packages', async (req: Request, res: Response): Promise<void> => {
  try {
    asyncFunc(() => {
      res.status(200).json({ data: packages })
    })
  } catch (err) {
    res.status(500).json({ message: 'Data not available' })
  }
})

/* Sending all the cities to deliver */
router.get('/cities', async (req: Request, res: Response): Promise<void> => {
  try {
    asyncFunc(() => {
      res.status(200).json({ data: cities })
    })
  } catch (err) {
    res.status(500).json({ message: 'No cities available' })
  }
})

export { router }
