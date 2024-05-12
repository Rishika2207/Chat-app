import User from "../models/user.model.js";

export const getUsersForSideBar=async (req,res)=>{
    try {
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSideBar: ",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const updateUserStatus=async(req,res)=>{
    const id=req.params.id;
    const {status}=req.body;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.status =status; 
        await user.save();
        return res.status(200).json({ message: "User status updated successfully" });
    } catch (error) {
        console.error("Error updating user status:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}