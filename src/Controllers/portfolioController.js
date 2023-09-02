exports.portfolio = (req, res)=>{
    res.send("this is portfolio section.");
}

exports.create = async(req, res)=>{
    res.send("Create portfolio api");
};

exports.read = async(req, res)=>{
    res.send("Read portfolio api");
};

exports.delete = async(req, res)=>{
    res.send("Delete portfolio api");
};

exports.update = async(req, res)=>{
    res.send("Update portfolio api");
};