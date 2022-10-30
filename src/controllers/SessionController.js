// metodos: index, store, show, update, destroy
/*
  index: listagem de sessões
  store: criar uma sessão
  show: listar um UNICA sessão
  update: atualização/alterar sessão
  destroy: deletar uma sessão
*/

import User from "../models/User";
import * as Yup from "yup";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required().email(),
    });
    const { email } = req.body;

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: "Falha na validação." });

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
}

export default new SessionController();
