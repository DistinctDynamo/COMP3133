const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true
    },
    username:{
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minlength: [4, "Username should be at least 4 characters"],
        maxlength: [100, "Username should be at most 100 characters"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    address:{
        street:{
            type: String,
            required: [true, "Street is required"],
            trim: true
        },
        suite:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true,
            match:[/^([a-zA-Z]*\s*){0,6}$/, "Only letters allowed"]
        },
        zipcode:{
            required: true,
            match: [/^\d{5}-\d{4}$/, "Invalid zipcode format"]
        },
        geo:{
            lat:{
                type: Number,
                required: true
            },
            lng:{
                type: Number,
                required: true
            }
        }
    },
    phone:{
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Invalid phone format"]
    },
    website:{
        required: true,
        match: [/^http|https/, "Missing header"]
    },
    company:{
        name:{
            type: String,
            required: true,
            trim: true
        },
        catchphrase:{
            type: String,
            required: true,
            trim: true
        },
        bs:{
            type: String,
            required: true,
            trim: true
        }
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;