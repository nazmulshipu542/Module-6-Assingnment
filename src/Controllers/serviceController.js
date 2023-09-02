exports.service = (req, res)=>{
    res.send("This is service section.");
}

exports.create = async(req, res)=>{
    res.send("Create service api");
};

exports.read = async(req, res)=>{
    res.send("Read service api");
};

exports.delete = async(req, res)=>{
    res.send("Delete service api");
};

exports.update = async(req, res)=>{
    res.send("Update service api");
};