const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/tickets');

router.get('/tickets', ticketController.getAllTickets);
router.post('/tickets', ticketController.createTicket);

module.exports = router;
