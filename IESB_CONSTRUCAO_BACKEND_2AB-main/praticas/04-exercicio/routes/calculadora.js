const express = require('express');
const router = express.Router();

// Funções matemáticas
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida');
  }
  return a / b;
}

function aoQuadrado(a) {
  return a * a;
}

function raizQuadrada(a) {
  if (a < 0) {
    throw new Error('Não existe raiz quadrada real de número negativo');
  }
  return Math.sqrt(a);
}

// Endpoints
router.get('/somar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: somar(numA, numB) });
});

router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: subtrair(numA, numB) });
});

router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: multiplicar(numA, numB) });
});

router.get('/dividir', (req, res) => {
  try {
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    res.json({ resultado: dividir(numA, numB) });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

router.get('/aoQuadrado', (req, res) => {
  const numA = Number(req.query.numA);
  res.json({ resultado: aoQuadrado(numA) });
});

router.get('/raizQuadrada', (req, res) => {
  try {
    const numA = Number(req.query.numA);
    res.json({ resultado: raizQuadrada(numA) });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

module.exports = router;
