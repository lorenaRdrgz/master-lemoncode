const characterMiddleware = (req, res, next) => {
    if (req.method === 'POST') {
      req.body = {
        ...req.body,
        image: '/thumbnails/new-character.jpeg',
      };
    }
    next();
  };
  
  module.exports = (req, res, next) => {
    if (req.path === '/character') {
        characterMiddleware(req, res, next);
    } else {
      next();
    }
  };
  