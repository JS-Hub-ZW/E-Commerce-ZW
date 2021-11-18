class OrderController {

    static checkout = (req, res, next) => {
        res.send("Checkout")
    }

    static reCheckout = (req, res, next) => {
        res.send("ReCheckout")
    }

    static orders = (req, res, next) => {
        res.send("Orders")
    }

    static order = (req, res, next) => {
        res.send("Order")
    }

    static delete = (req, res, next) => {
        res.send("Delete order")
    }
}