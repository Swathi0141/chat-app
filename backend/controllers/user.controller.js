export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUSerId = req.user._idl

       
    } catch (error) {
        console.log("Error in getUserForSidebar", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
