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
export const updateBook = async(book) =>{
    const updatedBook = await bookModels.update(book);
    return updatedBook;
}

//DELET
export const deleteBook = async(id) =>{
    const deletedBook = await bookModels.remove(id);
    return deletedBook;
}