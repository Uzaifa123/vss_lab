export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/api/save') {

      const data = await request.json();

      const name = data.name;
      const email = data.email;

      await env.DB.prepare(
        'INSERT INTO users (name, email) VALUES (?, ?)'
      )
      .bind(name, email)
      .run();

      return new Response('Data Saved Successfully', {
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return new Response('Worker Running');
  }
};
