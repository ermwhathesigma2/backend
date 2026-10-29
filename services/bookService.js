import * as bookModels from '../models/bookModels.js';

export const fetchAllBooks = async() => {
    const books = await bookModels.fetch();
    return books;
}

export const createBook = async(book) =>{
    const bookId = await bookModels.insert(book);
    return bookId
}
//UPDATE
export const update = async (book) => {
    const [result] = await pool.query (
       "UPDATE book SET name= ?, author= ? WHERE id=?",
        [book.name, book.author, book.id]
    )
     return result.affectedRows;
}

//DELET
export const deleteBook = async(id) =>{
    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}