exports.blog = (req, res)=>{
    res.send("This is blog section.");
};

exports.create = async(req, res)=>{
    res.send("Create blog api");
};

exports.read = async(req, res)=>{
    res.send("Read blog api");
};

exports.delete = async(req, res)=>{
    res.send("Delete blog api");
};

exports.update = async(req, res)=>{
    res.send("Update blog api");
};