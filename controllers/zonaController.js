import {db} from '../db/conn.js'

const getZona = async (req, res)=>{

    const sql = `select * from tbl_zona_titanes `;
    const result = await db.query(sql);
    res.json(result);

}

const postZona= async (req,res)=>{

        const {nombre} = req.body;
        const params = [nombre];

        const sql = `insert into tbl_zona_titanes
        (nombre)
        values
        ($1) returning *`;

        const result= await db.query(sql,params);

        res.json(result);

}

const putZona = async (req,res)=>{

    const {nombre} = req.body;
    const {id} = req.params;

    const params = [nombre, id];

    const sql= `update tbl_zona_titanes
    set nombre = $1
    where id= $2`;

    const result = await db.query(sql,params);

    res.json(result);
}

const deleteZona = async (req, res)=>{

    const {id} = req.params;
    const params = [ id];

    const sql = `delete from tbl_zona_titanes
    where id = $1
    returning *`;

    const result = await db.query(sql, params);

    res.json(result);
}

export {getZona, postZona, putZona, deleteZona}