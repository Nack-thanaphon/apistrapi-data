module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '059c8a07c72112059dd7d7f8736e526b'),
  },
});
