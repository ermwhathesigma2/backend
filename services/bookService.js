import * as bookModels from '../models/bookModels.js';

export const fetchAllBooks = async() => {
    const books = await bookModels.fetch();
    return books;
}


const doesbookExist = async(book) => {
    const existing = await bookModels.findBookByNameAndAuthor(book.name, book.author);

    if(existing.length > 0) {
        return true;
    }
    
    return false;
}

export const createBook = async(book) =>{
    if(!book.name || !book.author){
        throw new Error ('Name and Author is required');       
    }

    const existing = await doesbookExist(book);

    if(existing){
        throw new Error ('Book already exist!');
    }
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