exports.title = (req, res)=>{
    res.send("This is title section");
}

exports.create = async(req, res)=>{
    res.send("Create title api");
};

exports.read = async(req, res)=>{
    res.send("Read title api");
};

exports.delete = async(req, res)=>{
    res.send("Delete title api");
};

exports.update = async(req, res)=>{
    res.send("Update title api");
};