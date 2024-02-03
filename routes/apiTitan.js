import express from "express"
const titan = express ();
import { getTitan, postTitan, putTitan, deleteTitan} from "../controllers/titanCotroller.js";





titan.get ('',getTitan )


titan.post('',postTitan)


titan.put( '/:id',putTitan)

titan.delete('/:id',deleteTitan )

export {titan}