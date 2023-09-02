exports.message = (req, res)=>{
    res.send("This is message section.");
}

exports.create = async(req, res)=>{
    res.send("Create message api");
};

exports.read = async(req, res)=>{
    res.send("Read message api");
};

exports.delete = async(req, res)=>{
    res.send("Delete message api");
};

exports.update = async(req, res)=>{
    res.send("Update message api");
};