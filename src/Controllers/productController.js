exports.product = (req, res)=>{
    res.send("This is product section.");
}

exports.create = async(req, res)=>{
    res.send("Create product api");
};

exports.read = async(req, res)=>{
    res.send("Read product api");
};

exports.delete = async(req, res)=>{
    res.send("Delete product api");
};

exports.update = async(req, res)=>{
    res.send("Update product api");
};