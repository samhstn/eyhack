module.exports = {
  path: '/{param*}',
  method: 'GET',
  handler: (response, reply) => {
    reply.file('./public/index.html')
  }
}
