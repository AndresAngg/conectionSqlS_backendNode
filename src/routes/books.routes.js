import {Router} from 'express'
import {getBooks, createBook, showBook, deleteBook, updateBook} from '../controllers/books.controller'

const rou = Router()

rou.get('/books', getBooks)
rou.post('/books', createBook)
rou.get('/books/:id', showBook)
rou.delete('/books/:id', deleteBook)
rou.put('/books/:id',updateBook)

export default rou
