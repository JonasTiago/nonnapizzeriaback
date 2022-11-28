import { sessionsCollection } from "../database/db";

export async function tokenValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    if (!token) return res.sendStatus(401);
  
    try {
      const user = await sessionsCollection.findOne({ token });
      if (!user) return res.sendStatuss(401);
  
      res.locals.user_id = user.id;
    } catch (err) {
      res.sendStatus(500);
    }

    next()
  }
  