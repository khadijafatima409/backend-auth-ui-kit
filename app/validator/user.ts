import vine from '@vinejs/vine'

export const createAuthValidator = vine.compile(
  vine.object({
    first_name: vine.string().trim(),
    last_name: vine.string().trim().optional(),
    email: vine.string(),
    phone_number: vine.string(),
    password: vine.string(),
    confirm_password: vine.string(),
  })
)

export const loginAuthValidator = vine.compile(
  vine.object({
    email: vine.string(),
    password: vine.string(),
  })
)
