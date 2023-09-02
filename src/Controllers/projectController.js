exports.project = (req, res)=>{
    res.send("This is project section.");
}

exports.create = async(req, res)=>{
    res.send("Create project api");
};

exports.read = async(req, res)=>{
    res.send("Read project api");
};

exports.delete = async(req, res)=>{
    res.send("Delete project api");
};

exports.update = async(req, res)=>{
    res.send("Update project api");
};