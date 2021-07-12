const routes = [
    {
      method: 'GET',
      path: '/',
      handler: (request, h) => 'Homepage',
    }, {
      method: '*',
      path: '/',
      handler: (request, h) => 'Halaman tidak dapat diakses',
    },
    {
      method: 'GET',
      path: '/about',
      handler: (request, h) => 'About page',
    }, {
      method: '*',
      path: '/about',
      handler: (request, h) => '<h1> ERROR 404 </h1> </br>Halaman tidak dapat diakses',
    }, {
      method: '*',
      path: '/any*',
      handler: (request, h) => '<h1> ERROR 404 </h1> </br>Halaman tidak dapat diakses',
    }, {
      method: 'GET',
      path: '/hello/{name?}',
      handler: (request, h) => {
        const { name = 'USERNAME' } = request.params;
        const { lang } = request.query;
  
        if (lang === 'id') {
          return `Hai. ${name}`;
        }
        return `Hello, ${name}`;
      },
    }, {
      method: 'POST',
      path: '/login',
      handler: (request, h) => {
        const { username, password } = request.payload;
        return `Welcome ${username}!, your password ${password}`;
      },
    }, {
      method: 'POST',
      path: '/user',
      handler: (request, h) => h.response('created').code(201),
    }, {
      method: 'POST',
      path: '/f_u',
      handler: (request, h) => h.response('success')
        .type('text/plain')
        .header('X-Custom', 'some-value'),
    },
  ];
  
  module.exports = routes;
  