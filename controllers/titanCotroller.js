import {db} from '../db/conn.js'

const getTitan = async (req,res) =>{

    const sql = `select a.id, a.nombre as nombre_titan,a.especialidad, b.nombre as nombre_zona from tbl_titan a inner join tbl_zona_titanes b on a.id_zona =b.id` 
    const result = await db.query(sql);

    res.json(result)


}

const postTitan = async(req,res)=>{

    const {nombre, especialidad, id_zona} = req.body;
    const params = [nombre, especialidad, id_zona]

    const sql = `insert into tbl_titan
                (nombre, especialidad, id_zona)
                values
                ($1, $2, $3) returning * `


    const result = await db.query(sql, params);

    res.json(result);

}

const putTitan = async(req, res)=>{

    const {nombre, especialidad, id_zona} = req.body
    const {id} = req.params

    const params = [
        nombre,
        especialidad,
        id_zona,
        id

    ]

    const sql = `update tbl_titan
                set
                nombre = $1,
                especialidad = $2
                id_zona = $3
            where id = $4 returning *`;

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