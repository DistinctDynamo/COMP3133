const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "Name is required"],
        trim: true
    },
    username:{
        type: String,
        require: [true, "Username is required"],
        trim: true,
        minlength: [4, "Username should be at least 4 characters"],
        maxlength: [100, "Username should be at most 100 characters"]
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    address:{
        street:{
            type: String,
            require: true,
            trim: true
        },
        suite:{
            type: String,
            require: true
        },
        city:{
            type: String,
            require: true,
            match:[/^([a-zA-Z]*\s*){0,6}$/, "Only letters allowed"]
        },
        zipcode:{
            require: true,
            match: [/^\d{5}-\d{4}$/, "Invalid zipcode format"]
        },
        geo:{
            lat:{
                type: Number,
                require: true
            },
            lng:{
                type: Number,
                require: true
            }
        }
    },
    phone:{
        require: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Invalid phone format"]
    },
    website:{
        require: true,
        match: [/^http|https/, "Missing header"]
    },
    company:{
        name:{
            type: String,
            require: true,
            trim: true
        },
        catchphrase:{
            type: String,
            require: true,
            trim: true
        },
        bs:{
            type: String,
            require: true,
            trim: true
        }
    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;