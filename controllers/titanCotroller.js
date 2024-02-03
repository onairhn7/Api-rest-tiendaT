import {db} from '../db/conn.js'

const getTitan = async (req,res) =>{

    const sql = `select * from tbl_titan order by id` 
    const result = await db.query(sql);

    res.json(result)


}

const postTitan = async(req,res)=>{

    const {nombre, especialidad} = req.body;
    const params = [nombre, especialidad]

    const sql = `insert into tbl_titan
                (nombre, especialidad)
                values
                ($1, $2) returning * `


    const result = await db.query(sql, params);

    res.json(result);

}

const putTitan = async(req, res)=>{

    const {nombre, especialidad} = req.body
    const {id} = req.params

    const params = [
        nombre,
        especialidad,
        id

    ]

    const sql = `update tbl_titan
                set
                nombre = $1,
                especialidad = $2
            where id = $3 returning *`;

    const result = await db.query(sql, params);

    res.json(result);

}


const deleteTitan = async(req, res)=>{

    const params = [req.params.id];

    const sql = `delete from tbl_titan where id = $1 returning *`;

    const result = await db.query(sql, params);
    res.json(result);

}

export {getTitan, postTitan, putTitan, deleteTitan}