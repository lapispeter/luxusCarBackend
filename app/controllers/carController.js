import Car from '../models/car.js'

const CarController = {
    async index(req, res) {
        try {
            await CarController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const cars = await Car.findAll()
        res.status(200)
        res.json({
            success: true,
            data: cars
        })
    },
    async show(req, res) {
        try {
            await CarController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const car = await Car.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: car
        })
    },
    async store(req, res) {
        try {
            await CarController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const car = await Car.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: car
        })
    },
    async update(req, res) {
        try {
            await CarController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Car.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const car = await Car.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: car
        })
    },
    async destroy(req, res) {
        try {
            await CarController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const car = await Car.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: car
        })
    }
}

export default CarController
