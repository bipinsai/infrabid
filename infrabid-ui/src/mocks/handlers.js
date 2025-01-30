import { http } from 'msw';

// Define your API mock handlers
export const handlers = [
  http.get('http://localhost:3004/api/user', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      })
    );
  }),
];
