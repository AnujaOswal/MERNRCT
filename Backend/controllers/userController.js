const registerUser = async (req,res) => {
    const { name ,email, password,} = req.body;
    res.json({
        name,
        email,
        password
    });

};
export default{registerUser}