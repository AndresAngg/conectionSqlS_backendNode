import {Router} from 'express'
import {getBooks, createBook} from '../controllers/books.controller'

const rou = Router()

rou.get('/books', getBooks)
rou.post('/books', createBook)
rou.get('/books', )
rou.delete('/books', )
rou.put('/books', )

export default rou