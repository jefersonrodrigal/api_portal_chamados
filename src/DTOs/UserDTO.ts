export type IUserDTO = {
  email: string
  password: string
  name: string
  lastname: string
}

export type IUserUpdateDTO = {
  nome: string
  sobrenome: string
  email: string
}

export type IUserQuery = {
  name: string
  lastname: string
  email: string
}
