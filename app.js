const mercadopago = require('mercadopago');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/procesar-pago', function (req, res) {
    mercadopago.configurations.setAccessToken('TEST-8780781470103971-060418-748e2201ed16a90acd7671009b4ee949-277324989');

    const token = req.body.token;
    const payment_method_id = req.body.payment_method_id;
    const installments = req.body.installments;
    const issuer_id = req.body.issuer_id;

    var payment_data = {
        transaction_amount: 189,
        token: token,
        description: 'Practical Marble Lamp',
        installments: installments,
        payment_method_id: payment_method_id,
        issuer_id: issuer_id,
        payer: {
            email: 'reilly_howe@yahoo.com'
        }
    };

    // Guarda y postea el pago
    mercadopago.payment.save(payment_data).then(function (data) {
        // ...    
        // Imprime el estado del pago
        console.log(payment.status);
    }).catch(function (error) {
        // ...
    });

    res.json({ok:true})
})

app.listen(3000)
