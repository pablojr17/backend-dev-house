// metodos: index, store, show, update, destroy
/*
  index: listagem de sessões
  store: criar uma sessão
  show: listar um UNICA sessão
  update: atualização/alterar sessão
  destroy: deletar uma sessão
*/

import User from "../models/User";

class SessionController {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
