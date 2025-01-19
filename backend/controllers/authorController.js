import Author from "../models/authorModel.js";

const getAllAuthors = async (req, res, next) => {
  try {
    const allAuthors = await Author.find({});
    res.json(allAuthors);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await Author.findById(id);
    if(author === null){
    res.status(404).json("author not found");
    } else {
      res.json(author);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json("aggiunto un nuovo autore");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const putAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await Author.findByIdAndUpdate(
      id, 
      req.body);
    res.json("autore aggiornato");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try{
    const id= req.params.id;
    const deleteAuthor = await Author.findByIdAndDelete(id);
    res.json("autore eliminato con successo");
} catch(error){
  console.log(error);
  next(error);
}
};


export { 
  getAuthorById, 
  getAllAuthors, 
  createAuthor, 
  putAuthor,
  deleteAuthor };
