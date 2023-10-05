import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { ILoginDTO } from 'src/DTOs/LoginDTO'
import { loginUserRepositori } from 'src/repositories/login.repositorie'

const SECRET_KEY = 'mysecret'

export async function loginService(submit: ILoginDTO) {
  try {
    const userCredentials = await loginUserRepositori(submit.email)

    if (!userCredentials) {
      return
    }

    const match = await bcrypt.compare(
      submit.password,
      userCredentials.password,
    )

    if (submit.email === userCredentials.email && match === true) {
      const id: number = userCredentials.id
      const token = jwt.sign({ id }, SECRET_KEY, {
        expiresIn: 600,
      })
      return { logado: true, id, token }
    } else {
      return
    }
  } catch (err) {
    console.error(err)
  }
}
