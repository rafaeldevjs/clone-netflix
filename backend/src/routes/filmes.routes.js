import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ mensagem: 'PEGAR TODOS OS REGISTROS' });
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ${id}` });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({ mensagem: `CRIAR UM REGISTRO COM O ${body}` });
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR UM REGISTRO COM O ${id}` });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `DELETA UM REGISTRO COM O ${id}` });
});

export default router;
