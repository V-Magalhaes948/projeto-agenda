const Contato = require('../models/ContatoModel');

exports.index = function (req, res) { 
  res.render('contact', {
    contato: {},
  });
};

exports.create = async function (req, res) {
  try {
  const contato = new Contato(req.body);
  await contato.register();


  if (contato.errors.length > 0) {
    req.flash('errors', contato.errors);
    req.session.save(() => res.redirect('/contact/index'));
    return;
  }
  

  req.flash('success', 'Contato registrado com sucesso.');
  req.session.save(() => res.redirect('/contact/index/' + contato.contato._id));
  return;
  } catch (e) {
    console.log('Erro no catch:', e);
    return res.render('404');
  }
};

exports.editIndex = async function (req, res) {
  if (!req.params.id) {
    res.render('404');
    return;
  }
  
  const contato = await Contato.buscaPorId(req.params.id);
  if (!contato) {
    res.render('404');
    return;
  }

  res.render('contact', { contato });
}

exports.update = async function (req, res) {
  try {
    if (!req.params.id) {
      res.render('404');
      return;
    }
    const contato = new Contato(req.body);
    await contato.update(req.params.id);

    if (contato.errors.length > 0) {
      req.flash('errors', contato.errors);
      req.session.save(() => res.redirect('/contact/index/' + req.params.id));
      return;
    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect('/contact/index/' + contato.contato._id));
    return;

  } catch (e) {
    console.log('Erro no catch:', e);
    return res.render('404');
  }
};

exports.delete = async function (req, res) { 
  try {
    if (!req.params.id) {
      res.render('404');
      return;
    }

    const contato = await Contato.delete(req.params.id);
    if (!contato) {
      res.render('404');
      return;
    }

    req.flash('success', 'Contato deletado com sucesso.');
    req.session.save(() => res.redirect('/'));
    return;
  } catch (e) {
    console.log('Erro no catch:', e);
    return res.render('404');
  }
}