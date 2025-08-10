import mongoose from "mongoose";

const favSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
                required: true
            }
            
        }
    ]

}
, {
    timestamps: true
})

export const FavoriteSchema = mongoose.model("Favorite", favSchema);