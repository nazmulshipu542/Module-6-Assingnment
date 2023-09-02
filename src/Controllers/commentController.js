exports.comment = (req, res)=>{
    res.send("This is comment section.");
}

exports.create = async(req, res)=>{
    res.send("Create comment api");
};

exports.read = async(req, res)=>{
    res.send("Read comment api");
};

exports.delete = async(req, res)=>{
    res.send("Delete comment api");
};

exports.update = async(req, res)=>{
    res.send("Update comment api");
};