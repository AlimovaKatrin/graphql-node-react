import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    surName: String,
    nik: String,
    password: String,
    email: String

});

export default mongoose.model('Users', userSchema);