const express = require('express')
const router = express.Router()
const { addOrders, allOrders, orderbyId, removeProductByOrderId, sendDeliveryNotification} = require ('./controller')




router.post('/create-order', addOrders)
router.post('/sendDeliveryNotification', sendDeliveryNotification);
router.get('/all-orders', allOrders)
router.get('/order-by-id/:_id', orderbyId)
router.delete('/remove-product/:orderId', removeProductByOrderId);



module.exports = router