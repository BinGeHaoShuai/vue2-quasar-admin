export const resp = (data = { data: null }) => {
  return {
    code: '0',
    msg: '',
    ...data
  }
}
