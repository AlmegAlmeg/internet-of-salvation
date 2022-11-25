import { Router, Request, Response } from 'express'
import { asyncFunc } from '../utils/asyncFunc'

const router: Router = Router()

const phoneRegex: RegExp = /^05\d([-]{0,1})\d{7}$/

/* Get phone number and send OTP */
/* Please make sure that phoneNumber is string */
/* Accepted body for request: { "phoneNumber": "0501234567" } */
router.post('/validatePhone', async (req: Request, res: Response): Promise<void> => {
  try {
    asyncFunc(() => {
      const body: ValidatePhoneBody = req.body
      const { phoneNumber } = body
      if (phoneNumber === undefined) {
        res.status(500).json({ message: 'You must provide a phone number' })
        return
      }
      const validePhoneNumber: boolean = phoneRegex.test(phoneNumber)
      if (validePhoneNumber === false) {
        res.status(401).json({ message: 'Not a valid phone number' })
        return
      }
      res.status(200).json({ message: `${phoneNumber} is valid`, OTP: '5326' })
    })
  } catch (err) {
    res.status(500).json({ message: 'Error accured, please try again later' })
  }
})

type ValidatePhoneBody = {
  phoneNumber: string
}

export { router }
